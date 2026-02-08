"use client";

import { useMemo, useState } from "react";
import { whatsappLink } from "@/lib/site";

const OPS = ["Comprar", "Alquilar", "Vender", "Administrar"] as const;
const TIPOS = ["Apartamento", "Casa", "Terreno", "Galera", "Oficina", "Local"] as const;

export default function QuickWhatsAppForm() {
  const [operacion, setOperacion] = useState<(typeof OPS)[number]>("Comprar");
  const [tipo, setTipo] = useState<(typeof TIPOS)[number]>("Apartamento");
  const [zona, setZona] = useState("");
  const [presupuesto, setPresupuesto] = useState("");

  const message = useMemo(() => {
    const lines = [
      "Hola Chambonnet Comercial, quiero información.",
      `• Operación: ${operacion}`,
      `• Tipo: ${tipo}`,
      zona.trim() ? `• Zona: ${zona.trim()}` : "",
      presupuesto.trim() ? `• Presupuesto: ${presupuesto.trim()}` : "",
      "",
      "¿Me pueden orientar con el proceso y opciones disponibles? Gracias.",
    ].filter(Boolean);

    return lines.join("\n");
  }, [operacion, tipo, zona, presupuesto]);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur"
      aria-label="Consulta rápida por WhatsApp"
    >
      <div className="grid gap-3 md:grid-cols-2">
        <div>
          <label className="text-xs font-extrabold text-white/80">Operación</label>
          <select
            value={operacion}
            onChange={(e) => setOperacion(e.target.value as any)}
            className="mt-1 w-full rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-sm text-white outline-none focus:border-white/30"
          >
            {OPS.map((x) => (
              <option key={x} value={x} className="text-black">
                {x}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-xs font-extrabold text-white/80">Tipo</label>
          <select
            value={tipo}
            onChange={(e) => setTipo(e.target.value as any)}
            className="mt-1 w-full rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-sm text-white outline-none focus:border-white/30"
          >
            {TIPOS.map((x) => (
              <option key={x} value={x} className="text-black">
                {x}
              </option>
            ))}
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="text-xs font-extrabold text-white/80">
            Zona (ej: Bellavista, San Francisco)
          </label>
          <input
            value={zona}
            onChange={(e) => setZona(e.target.value)}
            placeholder="Escribe una zona o ciudad"
            className="mt-1 w-full rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/30"
          />
        </div>

        <div className="md:col-span-2">
          <label className="text-xs font-extrabold text-white/80">Presupuesto (opcional)</label>
          <input
            value={presupuesto}
            onChange={(e) => setPresupuesto(e.target.value)}
            placeholder="Ej: $180,000 o $1,200/mes"
            className="mt-1 w-full rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/30"
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-green-600 px-4 py-2.5 text-sm font-extrabold text-white shadow-soft transition hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-white/70"
      >
        Consultar por WhatsApp
      </button>

      <p className="mt-2 text-xs text-white/70">Respuesta rápida y acompañamiento en todo momento.</p>
    </form>
  );
}
