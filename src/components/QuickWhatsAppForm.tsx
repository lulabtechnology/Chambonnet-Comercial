"use client";

import { useMemo, useState } from "react";
import { buildLeadMessage, waLink } from "@/lib/site";

const OPS = ["Comprar", "Alquilar", "Vender", "Administrar"] as const;

const TIPOS = [
  "Apartamento",
  "Casa",
  "Terreno",
  "Galera",
  "Oficina",
  "Local",
] as const;

export default function QuickWhatsAppForm() {
  const [operacion, setOperacion] = useState<(typeof OPS)[number]>("Comprar");
  const [tipo, setTipo] = useState<(typeof TIPOS)[number]>("Apartamento");
  const [zona, setZona] = useState("");
  const [presupuesto, setPresupuesto] = useState("");

  const message = useMemo(() => {
    return buildLeadMessage({
      operacion,
      tipo,
      zona: zona.trim() || undefined,
      presupuesto: presupuesto.trim() || undefined,
    });
  }, [operacion, tipo, zona, presupuesto]);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    window.open(waLink(message), "_blank", "noopener,noreferrer");
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-black/10 bg-white/90 p-4 shadow-sm backdrop-blur"
      aria-label="Consulta rápida por WhatsApp"
    >
      <div className="grid gap-3 md:grid-cols-2">
        <div>
          <label className="text-sm font-medium text-black">Operación</label>
          <select
            value={operacion}
            onChange={(e) => setOperacion(e.target.value as any)}
            className="mt-1 w-full rounded-xl border border-black/15 bg-white px-3 py-2 text-sm text-black outline-none focus:border-black/40"
          >
            {OPS.map((x) => (
              <option key={x} value={x}>
                {x}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-sm font-medium text-black">Tipo</label>
          <select
            value={tipo}
            onChange={(e) => setTipo(e.target.value as any)}
            className="mt-1 w-full rounded-xl border border-black/15 bg-white px-3 py-2 text-sm text-black outline-none focus:border-black/40"
          >
            {TIPOS.map((x) => (
              <option key={x} value={x}>
                {x}
              </option>
            ))}
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="text-sm font-medium text-black">
            Zona (ej: Bellavista, San Francisco)
          </label>
          <input
            value={zona}
            onChange={(e) => setZona(e.target.value)}
            placeholder="Escribe una zona o ciudad"
            className="mt-1 w-full rounded-xl border border-black/15 bg-white px-3 py-2 text-sm text-black outline-none focus:border-black/40"
          />
        </div>

        <div className="md:col-span-2">
          <label className="text-sm font-medium text-black">
            Presupuesto (opcional)
          </label>
          <input
            value={presupuesto}
            onChange={(e) => setPresupuesto(e.target.value)}
            placeholder="Ej: $180,000 o $1,200/mes"
            className="mt-1 w-full rounded-xl border border-black/15 bg-white px-3 py-2 text-sm text-black outline-none focus:border-black/40"
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-green-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
      >
        Consultar por WhatsApp
      </button>

      <p className="mt-2 text-xs text-black/70">
        Procesos claros y acompañamiento de inicio a fin.
      </p>
    </form>
  );
}
