export const SITE = {
  name: "Chambonnet Comercial",
  description:
    "Consultores inmobiliarios en Panamá. Compra, vende, alquila y administra propiedades con procesos claros y acompañamiento en todo momento.",
  locale: "es_PA",
  // TODO: Cambiar por el dominio final cuando esté listo
  url: "https://chambonnetcomercial.com",
  // OpenGraph image (placeholder)
  ogImage: "/og.svg",

  // Zonas ejemplo (copy + SEO)
  zones: ["Bellavista", "San Francisco"],

  // Dato fuerte
  managedCount: 200
};

export const CONTACT = {
  // TODO: Cambiar estos placeholders en cuanto el cliente los entregue
  WHATSAPP_NUMBER: "50760000000", // Formato recomendado: código país + número, sin +, sin espacios. Ej: 5076XXXXXXX
  INSTAGRAM_URL: "https://instagram.com/tu_cuenta",
  FACEBOOK_URL: "https://facebook.com/tu_pagina",
  TIKTOK_URL: "https://tiktok.com/@tu_cuenta",
  YOUTUBE_URL: "", // Opcional. Si lo llenas, puedes usarlo para video en el futuro.
  EMAIL: "correo@tudominio.com", // Opcional
  PHONE: "+507 6000-0000" // Opcional (texto)
};

export const NAV = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Tips", href: "#tips" },
  { label: "FAQ", href: "#faq" },
  { label: "Contacto", href: "#contacto" }
] as const;

export function buildWhatsAppMessage(input: {
  nombre: string;
  telefono: string;
  email: string;
  operacion?: string;
  mensaje: string;
}) {
  const lines = [
    `Hola, soy ${input.nombre}.`,
    `Teléfono: ${input.telefono}`,
    `Email: ${input.email}`,
    input.operacion ? `Operación: ${input.operacion}` : "",
    "",
    input.mensaje.trim()
  ].filter(Boolean);

  return lines.join("\n");
}

export function whatsappLink(message: string) {
  const num = (CONTACT.WHATSAPP_NUMBER || "").replace(/[^\d]/g, "") || "50760000000";
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
