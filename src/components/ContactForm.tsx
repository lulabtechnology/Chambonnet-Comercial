"use client";

import * as React from "react";
import { CONTACT, buildWhatsAppMessage, isPlaceholderUrl, whatsappLink } from "@/lib/site";

type FormState = {
  nombre: string;
  telefono: string;
  email: string;
  operacion: "Comprar" | "Alquilar" | "Vender" | "Administrar" | "";
  mensaje: string;
};

export default function ContactForm() {
  const [form, setForm] = React.useState<FormState>({
    nombre: "",
    telefono: "",
    email: "",
    operacion: "",
    mensaje: ""
  });

  const [error, setError] = React.useState<string>("");
  const [success, setSuccess] = React.useState<string>("");
  const [confirm, setConfirm] = React.useState<{ message: string; waUrl: string } | null>(null);

  function update<K extends keyof FormState>(k: K, v: FormState[K]) {
    setForm((s) => ({ ...s, [k]: v }));
    setError("");
    setSuccess("");
  }

  function validate() {
    if (!form.nombre.trim()) return "Por favor, escribe tu nombre.";
    if (!form.telefono.trim()) return "Por favor, escribe tu teléfono.";
    if (!form.email.trim()) return "Por favor, escribe tu email.";
    if (!form.mensaje.trim()) return "Por favor, escribe tu mensaje.";
    return "";
  }

  async function copy(text: string) {
    try {
      await navigator.clipboard.writeText(text);
      setSuccess("Mensaje copiado.");
      setError("");
    } catch {
      setError("No se pudo copiar. Puedes seleccionar y copiar manualmente.");
    }
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSuccess("");

    const v = validate();
    if (v) {
      setError(v);
      return;
    }

    const msg = buildWhatsAppMessage({
      nombre: form.nombre,
      telefono: form.telefono,
      email: form.email,
      operacion: form.operacion || undefined,
      mensaje: form.mensaje
    });

    const url = whatsappLink(msg);

    setConfirm({ message: msg, waUrl: url });
    setSuccess("Su mensaje ha sido enviado");
    setError("");

    // Abrir WhatsApp (sin backend)
    window.open(url, "_blank", "noopener,noreferrer");
  }

  const showTodoSocial =
    isPlaceholderUrl(CONTACT.INSTAGRAM_URL) ||
    isPlaceholderUrl(CONTACT.FACEBOOK_URL) ||
    isPlaceholderUrl(CONTACT.TIKTOK_URL);

  return (
    <div>
      <form onSubmit={onSubmit} className="space-y-4" aria-label="Formulario de contacto">
        <div>
          <label className="text-sm font-extrabold text-brand-black" htmlFor="nombre">
            Nombre
          </label>
          <input
            id="nombre"
            name="nombre"
            autoComplete="name"
            value={form.nombre}
            onChange={(e) => update("nombre", e.target.value)}
            className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-brand-black outline-none focus:ring-2 focus:ring-brand-red/40"
            placeholder="Tu nombre"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="text-sm font-extrabold text-brand-black" htmlFor="telefono">
              Teléfono
            </label>
            <input
              id="telefono"
              name="telefono"
              autoComplete="tel"
              value={form.telefono}
              onChange={(e) => update("telefono", e.target.value)}
              className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-brand-black outline-none focus:ring-2 focus:ring-brand-red/40"
              placeholder="+507 ..."
            />
          </div>

          <div>
            <label className="text-sm font-extrabold text-brand-black" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              autoComplete="email"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-brand-black outline-none focus:ring-2 focus:ring-brand-red/40"
              placeholder="tuemail@..."
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-extrabold text-brand-black" htmlFor="operacion">
            Tipo de operación (opcional)
          </label>
          <select
            id="operacion"
            name="operacion"
            value={form.operacion}
            onChange={(e) => update("operacion", e.target.value as FormState["operacion"])}
            className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-brand-black outline-none focus:ring-2 focus:ring-brand-red/40"
          >
            <option value="">Seleccionar</option>
            <option value="Comprar">Comprar</option>
            <option value="Alquilar">Alquilar</option>
            <option value="Vender">Vender</option>
            <option value="Administrar">Administrar</option>
          </select>
        </div>

        <div>
          <label className="text-sm font-extrabold text-brand-black" htmlFor="mensaje">
            Mensaje
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            value={form.mensaje}
            onChange={(e) => update("mensaje", e.target.value)}
            className="mt-2 min-h-[120px] w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-brand-black outline-none focus:ring-2 focus:ring-brand-red/40"
            placeholder="Cuéntanos qué buscas (zona, presupuesto, tipo de propiedad, etc.)"
          />
        </div>

        {error && (
          <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
            {error}
          </div>
        )}

        {success && (
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700">
            {success}
          </div>
        )}

        <button
          type="submit"
          className="w-full rounded-xl bg-brand-red px-5 py-3 text-sm font-extrabold text-white shadow-soft transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-brand-red/40"
        >
          Enviar
        </button>

        <p className="text-xs text-black/60">
          Envío sin servidor: al enviar se abre WhatsApp con el mensaje prellenado.
        </p>
      </form>

      {/* Confirmación */}
      {confirm && (
        <div className="mt-6 rounded-2xl border border-black/10 bg-black/[0.02] p-5">
          <p className="text-sm font-extrabold text-brand-black">Confirmación</p>
          <p className="mt-1 text-sm text-black/70">
            Oprime si quieres vernos en Instagram, Facebook o TikTok. Luego, puedes ir directo a WhatsApp.
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            <a
              href={CONTACT.INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-black/10 bg-white px-4 py-2 text-sm font-extrabold text-brand-black transition hover:bg-black/[0.03] focus:outline-none focus:ring-2 focus:ring-brand-red/40"
            >
              Instagram
            </a>
            <a
              href={CONTACT.FACEBOOK_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-black/10 bg-white px-4 py-2 text-sm font-extrabold text-brand-black transition hover:bg-black/[0.03] focus:outline-none focus:ring-2 focus:ring-brand-red/40"
            >
              Facebook
            </a>
            <a
              href={CONTACT.TIKTOK_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-black/10 bg-white px-4 py-2 text-sm font-extrabold text-brand-black transition hover:bg-black/[0.03] focus:outline-none focus:ring-2 focus:ring-brand-red/40"
            >
              TikTok
            </a>
            <a
              href={confirm.waUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-brand-red px-4 py-2 text-sm font-extrabold text-white shadow-soft transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-brand-red/40"
            >
              WhatsApp
            </a>
          </div>

          <div className="mt-4 rounded-xl border border-black/10 bg-white p-4">
            <p className="text-xs font-semibold text-black/60">Mensaje prellenado</p>
            <pre className="mt-2 whitespace-pre-wrap rounded-lg bg-black/[0.03] p-3 text-xs text-black/80">
              {confirm.message}
            </pre>

            <div className="mt-3 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => copy(confirm.message)}
                className="rounded-xl border border-black/10 bg-white px-4 py-2 text-sm font-extrabold text-brand-black transition hover:bg-black/[0.03] focus:outline-none focus:ring-2 focus:ring-brand-red/40"
              >
                Copiar
              </button>
              <button
                type="button"
                onClick={() => setConfirm(null)}
                className="rounded-xl border border-black/10 bg-white px-4 py-2 text-sm font-extrabold text-brand-black transition hover:bg-black/[0.03] focus:outline-none focus:ring-2 focus:ring-brand-red/40"
              >
                Cerrar
              </button>
            </div>

            {showTodoSocial && (
              <p className="mt-3 text-xs text-black/60">
                TODO: Reemplazar URLs de redes en <code className="font-mono">/src/lib/site.ts</code>
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
