"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { NAV, whatsappLink } from "@/lib/site";
import { buildWhatsAppMessage } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const items = useMemo(() => NAV, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const quickMsg = buildWhatsAppMessage({
    nombre: "Cliente",
    telefono: "—",
    email: "—",
    operacion: "Consulta",
    mensaje: "Hola, quiero ver propiedades y recibir guía con procesos claros. ¿Me ayudan, por favor?"
  });

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <a href="#inicio" className="flex items-center gap-3" aria-label="Ir al inicio">
          <Image src="/logo.svg" alt="Chambonnet Comercial" width={220} height={44} priority />
        </a>

        <nav className="hidden items-center gap-5 md:flex" aria-label="Navegación principal">
          {items.map((it) => (
            <a
              key={it.href}
              href={it.href}
              className="text-sm font-bold text-brand-black/80 hover:text-brand-black focus:outline-none focus:ring-2 focus:ring-brand-red/40 rounded-lg px-2 py-1"
            >
              {it.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={whatsappLink(quickMsg)}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-xl bg-brand-red px-4 py-2 text-sm font-extrabold text-white shadow-soft transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-brand-red/40 md:inline-flex"
          >
            WhatsApp
          </a>

          <button
            type="button"
            className="inline-flex rounded-xl border border-black/10 bg-white px-3 py-2 text-sm font-extrabold text-brand-black shadow-soft transition hover:bg-black/[0.03] focus:outline-none focus:ring-2 focus:ring-brand-red/40 md:hidden"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Cerrar" : "Menú"}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-black/10 bg-white">
          <nav className="mx-auto max-w-6xl px-4 py-4" aria-label="Navegación móvil">
            <div className="grid gap-2">
              {items.map((it) => (
                <a
                  key={it.href}
                  href={it.href}
                  className="rounded-xl border border-black/10 bg-white px-4 py-3 text-sm font-extrabold text-brand-black transition hover:bg-black/[0.03] focus:outline-none focus:ring-2 focus:ring-brand-red/40"
                  onClick={() => setOpen(false)}
                >
                  {it.label}
                </a>
              ))}

              <a
                href={whatsappLink(quickMsg)}
                target="_blank"
                rel="noreferrer"
                className="mt-2 rounded-xl bg-brand-red px-4 py-3 text-center text-sm font-extrabold text-white shadow-soft transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-brand-red/40"
                onClick={() => setOpen(false)}
              >
                WhatsApp
              </a>
            </div>

            <p className="mt-3 text-xs text-black/60">
              TODO: Cambiar WhatsApp real en <code className="font-mono">/src/lib/site.ts</code>
            </p>
          </nav>
        </div>
      )}
    </header>
  );
}
