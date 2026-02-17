import Link from "next/link";
import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacidad",
  description:
    "Política de privacidad de Chambonnet Comercial. Información sobre el uso de enlaces a WhatsApp y redes sociales y cómo se maneja la información compartida.",
  alternates: { canonical: "/privacidad" },
  openGraph: {
    type: "website",
    locale: "es_PA",
    url: "/privacidad",
    title: "Privacidad | Chambonnet Comercial",
    description:
      "Política de privacidad de Chambonnet Comercial. Información sobre el uso de enlaces a WhatsApp y redes sociales y cómo se maneja la información compartida.",
    images: [{ url: SITE.ogImage, width: 1200, height: 630, alt: "Chambonnet Comercial" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacidad | Chambonnet Comercial",
    description:
      "Política de privacidad de Chambonnet Comercial. Información sobre el uso de enlaces a WhatsApp y redes sociales y cómo se maneja la información compartida.",
    images: [SITE.ogImage],
  },
  robots: { index: true, follow: true },
};

export default function PrivacidadPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14">
      <h1 className="text-3xl font-extrabold text-brand-black">Privacidad</h1>
      <p className="mt-4 text-black/70">
        Este texto es un placeholder. Aquí se incluirán los términos de privacidad reales del negocio.
      </p>

      <div className="mt-8 space-y-3 text-sm text-black/70">
        <p>
          <span className="font-extrabold text-brand-black">1) Datos de contacto:</span> la web puede mostrar enlaces a
          WhatsApp y redes sociales para facilitar comunicación.
        </p>
        <p>
          <span className="font-extrabold text-brand-black">2) Formulario:</span> el formulario abre WhatsApp con mensaje
          prellenado; no almacena datos en un servidor.
        </p>
        <p>
          <span className="font-extrabold text-brand-black">3) Enlaces externos:</span> redes sociales pueden tener sus
          propias políticas de privacidad.
        </p>
        <p className="text-xs text-black/60">TODO: reemplazar este contenido por el texto legal final del cliente.</p>
      </div>

      <div className="mt-10">
        <Link
          href="/"
          className="inline-flex rounded-xl bg-brand-red px-5 py-3 text-sm font-extrabold text-white shadow-soft transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-brand-red/40"
        >
          Volver a la landing
        </Link>
      </div>
    </div>
  );
}
