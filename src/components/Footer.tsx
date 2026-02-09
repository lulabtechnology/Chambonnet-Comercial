import Link from "next/link";
import Image from "next/image";
import SocialLinks from "@/components/SocialLinks";
import { CONTACT, ASSETS } from "@/lib/site";
import { formatYearRange } from "@/lib/utils";
import { buildWhatsAppMessage, whatsappLink } from "@/lib/site";

export default function Footer() {
  const year = formatYearRange(2026);

  const quickMsg = buildWhatsAppMessage({
    nombre: "Cliente",
    telefono: "—",
    email: "",
    operacion: "Consulta",
    mensaje: "Hola, quiero ver propiedades y recibir guía con procesos claros. ¿Me ayudan, por favor?",
  });

  return (
    <footer className="border-t border-black/10 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <Image src={ASSETS.logo} alt="Chambonnet Comercial" width={220} height={44} />
            <p className="mt-3 text-sm text-black/70">
              Compra, vende, alquila y administra propiedades con procesos claros y acompañamiento en todo momento.
            </p>
          </div>

          <div>
            <p className="text-sm font-extrabold text-brand-black">Redes</p>
            <div className="mt-3">
              <SocialLinks variant="footer" />
            </div>
          </div>

          <div>
            <p className="text-sm font-extrabold text-brand-black">Contacto</p>
            <p className="mt-3 text-sm text-black/70">
              {CONTACT.EMAIL ? (
                <>
                  Email: <span className="font-semibold">{CONTACT.EMAIL}</span>
                  <br />
                </>
              ) : null}
              Teléfono: <span className="font-semibold">{CONTACT.PHONE}</span>
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              <a
                href={whatsappLink(quickMsg)}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-brand-red px-4 py-2 text-sm font-extrabold text-white shadow-soft transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-brand-red/40"
              >
                WhatsApp
              </a>

              <Link
                href="/privacidad"
                className="rounded-xl border border-black/10 bg-white px-4 py-2 text-sm font-extrabold text-brand-black transition hover:bg-black/[0.03] focus:outline-none focus:ring-2 focus:ring-brand-red/40"
              >
                Privacidad
              </Link>

              <Link
                href="/terminos"
                className="rounded-xl border border-black/10 bg-white px-4 py-2 text-sm font-extrabold text-brand-black transition hover:bg-black/[0.03] focus:outline-none focus:ring-2 focus:ring-brand-red/40"
              >
                Términos
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-black/10 pt-6 text-xs text-black/60 md:flex-row md:items-center md:justify-between">
          <p>© {year} Chambonnet Comercial. Todos los derechos reservados.</p>
          <p>Hecho para conversión a redes + WhatsApp. Diseño premium-simple.</p>
        </div>
      </div>

      {/* Botón flotante WhatsApp */}
      <a
        href={whatsappLink(quickMsg)}
        target="_blank"
        rel="noreferrer"
        aria-label="Abrir WhatsApp"
        className="fixed bottom-5 right-5 inline-flex items-center justify-center rounded-2xl bg-brand-red px-4 py-3 text-sm font-extrabold text-white shadow-soft transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-brand-red/40"
      >
        WhatsApp
      </a>
    </footer>
  );
}
