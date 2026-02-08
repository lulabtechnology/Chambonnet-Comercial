// src/lib/site.ts
export const SITE = {
  name: "Chambonnet Comercial",
  // Mientras no haya dominio propio, dejamos el Vercel:
  url: "https://chambonnet-comercial.vercel.app",
  title: "Chambonnet Comercial | Consultores inmobiliarios en Panamá",
  description:
    "Consultores inmobiliarios en Panamá. Compra, vende, alquila y administra propiedades con procesos claros y acompañamiento en todo momento. Zonas fuertes: Bellavista y San Francisco.",
  locale: "es_PA",
  // Imagen para compartir (OpenGraph). Debe existir en /public:
  ogImage: "/og.jpg",
  // Logo para header/footer (puedes cambiar a /logo.svg si lo deseas):
  logo: "/logo.png",
};

export const CONTACT = {
  // WhatsApp wa.me necesita país + número, sin guiones:
  whatsappNumber: "50760701881",
  phoneDisplay: "+507 6070-1881",
  email: "TODO@chambonnet.com", // TODO: si el cliente da un email real, cámbialo aquí
};

export const SOCIAL = {
  instagram:
    "https://www.instagram.com/chambonnetcomercial?utm_source=qr&igsh=aHBmNWg1N3dzNTlm",
  facebook: "https://www.facebook.com/share/1Bke9jcdab/",
  tiktok: "https://www.tiktok.com/@jorgechambonnetrealtor?_r=1&_t=ZS-93hCEhVAALK",
  youtube: "https://youtube.com/@jorgechambonnet?si=9bcqxcKhSQedevYU",
};

export const ASSETS = {
  heroDesktop: "/hero-desktop.jpg",
  heroMobile: "/hero-mobile.jpg",
  acobirLogo: "/acobir.png",
  mlsLogo: "/mls.png",
  // Galería (puedes cambiar/añadir después):
  gallery: [
    { src: "/prop-playa.jpg", alt: "Casa de playa en Panamá" },
    { src: "/prop-residencias.jpg", alt: "Residencias en Panamá" },
    { src: "/prop-comercial.jpg", alt: "Oficinas y espacios comerciales" },
  ],
};

export function waLink(message: string) {
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function buildLeadMessage(input: {
  nombre?: string;
  telefono?: string;
  email?: string;
  operacion?: string;
  tipo?: string;
  zona?: string;
  presupuesto?: string;
  mensaje?: string;
}) {
  const lines = [
    "Hola Chambonnet Comercial, quiero información.",
    input.operacion ? `• Operación: ${input.operacion}` : null,
    input.tipo ? `• Tipo: ${input.tipo}` : null,
    input.zona ? `• Zona: ${input.zona}` : null,
    input.presupuesto ? `• Presupuesto: ${input.presupuesto}` : null,
    input.nombre ? `• Nombre: ${input.nombre}` : null,
    input.telefono ? `• Teléfono: ${input.telefono}` : null,
    input.email ? `• Email: ${input.email}` : null,
    input.mensaje ? `• Mensaje: ${input.mensaje}` : null,
    "",
    "¿Me pueden orientar con el proceso y opciones disponibles? Gracias.",
  ].filter(Boolean);

  return lines.join("\n");
}
