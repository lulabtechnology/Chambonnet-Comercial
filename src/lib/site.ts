// src/lib/site.ts

export const SITE = {
  name: "Chambonnet Comercial",
  description:
    "Consultores inmobiliarios en Panamá. Compra, vende, alquila y administra propiedades con procesos claros y acompañamiento en todo momento.",
  locale: "es_PA",

  // ✅ Mientras no conectes dominio en Vercel, deja el Vercel URL.
  // TODO: Cambiar por el dominio final cuando esté listo (ej: https://chambonnetcomercial.com)
  url: "https://chambonnet-comercial.vercel.app",

  // ✅ Usa la nueva imagen OG que te dejé en el zip: /public/og.jpg
  // Si aún no la subes, sube el archivo og.jpg a /public
  ogImage: "/og.jpg",

  // Zonas ejemplo (copy + SEO)
  zones: ["Bellavista", "San Francisco"],

  // Dato fuerte
  managedCount: 200,
} as const;

export const CONTACT = {
  // ✅ YA NO PLACEHOLDER
  // Formato: código país + número, sin +, sin espacios, sin guiones
  WHATSAPP_NUMBER: "50760701881",

  // ✅ Redes reales (tu cliente las pasó)
  INSTAGRAM_URL:
    "https://www.instagram.com/chambonnetcomercial?utm_source=qr&igsh=aHBmNWg1N3dzNTlm",
  FACEBOOK_URL: "https://www.facebook.com/share/1Bke9jcdab/",
  TIKTOK_URL:
    "https://www.tiktok.com/@jorgechambonnetrealtor?_r=1&_t=ZS-93hCEhVAALK",
  YOUTUBE_URL: "https://youtube.com/@jorgechambonnet?si=9bcqxcKhSQedevYU",

  // ⚠️ No invento correo: déjalo vacío hasta que lo den
  EMAIL: "",

  // ✅ Teléfono visible (texto)
  PHONE: "+507 6070-1881",
} as const;

export const NAV = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Tips", href: "#tips" },
  { label: "FAQ", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
] as const;

/**
 * ✅ Mantengo el nombre original (buildWhatsAppMessage) porque tus componentes lo importan así.
 * Puedes pasar campos extra opcionales sin romper lo existente.
 */
export function buildWhatsAppMessage(input: {
  nombre: string;
  telefono: string;
  email: string;
  operacion?: string;
  tipo?: string;
  zona?: string;
  presupuesto?: string;
  mensaje: string;
}) {
  const lines = [
    `Hola, soy ${input.nombre}.`,
    `Teléfono: ${input.telefono}`,
    input.email ? `Email: ${input.email}` : "",
    input.operacion ? `Operación: ${input.operacion}` : "",
    input.tipo ? `Tipo: ${input.tipo}` : "",
    input.zona ? `Zona: ${input.zona}` : "",
    input.presupuesto ? `Presupuesto: ${input.presupuesto}` : "",
    "",
    input.mensaje.trim(),
    "",
    "¿Me pueden orientar con el proceso y opciones disponibles? Gracias.",
  ].filter(Boolean);

  return lines.join("\n");
}

export function whatsappLink(message: string) {
  const num =
    (CONTACT.WHATSAPP_NUMBER || "").replace(/[^\d]/g, "") || "50760701881";
  const text = encodeURIComponent(message);
  return `https://wa.me/${num}?text=${text}`;
}

export function isPlaceholderUrl(url: string) {
  return (
    url.includes("instagram.com/tu_cuenta") ||
    url.includes("facebook.com/tu_pagina") ||
    url.includes("tiktok.com/@tu_cuenta")
  );
}

/**
 * ✅ Extras (NO rompen nada): rutas de assets para que lo uses donde quieras.
 * Sube estos archivos a /public (del zip que te pasé):
 * - hero-desktop.jpg
 * - hero-mobile.jpg
 * - prop-playa.jpg
 * - prop-residencias.jpg
 * - prop-comercial.jpg
 * - acobir.png
 * - mls.png
 * - logo.png
 * - og.jpg
 */
export const ASSETS = {
  logo: "/logo.png",
  heroDesktop: "/hero-desktop.jpg",
  heroMobile: "/hero-mobile.jpg",
  acobir: "/acobir.png",
  mls: "/mls.png",
  gallery: [
    { src: "/prop-playa.jpg", alt: "Casa de playa en Panamá" },
    { src: "/prop-residencias.jpg", alt: "Residencias en Panamá" },
    { src: "/prop-comercial.jpg", alt: "Oficinas y espacios comerciales" },
  ],
} as const;
