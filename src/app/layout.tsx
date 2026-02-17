import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CONTACT, SITE, ASSETS } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),

  title: {
    default: `${SITE.name} | Consultores inmobiliarios en Panamá`,
    template: `%s | ${SITE.name}`,
  },

  description: SITE.description,

  alternates: {
    canonical: "/",
  },

  keywords: [
    "consultores inmobiliarios en Panamá",
    "propiedades en Panamá",
    "venta de propiedades Panamá",
    "alquiler de propiedades Panamá",
    "administración de propiedades Panamá",
    "Chambonnet Comercial",
  ],

  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: "/",
    siteName: SITE.name,
    title: `${SITE.name} | Consultores inmobiliarios en Panamá`,
    description: SITE.description,
    images: [
      {
        url: SITE.ogImage,
        width: 1200,
        height: 630,
        alt: SITE.name,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | Consultores inmobiliarios en Panamá`,
    description: SITE.description,
    images: [SITE.ogImage],
  },

  robots: {
    index: true,
    follow: true,
  },

  other: {
    "theme-color": "#D10F1B",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const sameAs = [
    CONTACT.INSTAGRAM_URL,
    CONTACT.FACEBOOK_URL,
    CONTACT.TIKTOK_URL,
    CONTACT.YOUTUBE_URL,
  ].filter(Boolean);

  const jsonLd: Record<string, any> = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    areaServed: "Panamá",
    address: {
      "@type": "PostalAddress",
      addressCountry: "PA",
      addressLocality: "Panamá",
    },
    telephone: CONTACT.PHONE,
    sameAs,
    // Logo público (ruta en /public)
    logo: new URL(ASSETS.logo, SITE.url).toString(),
  };

  if (CONTACT.EMAIL) jsonLd.email = CONTACT.EMAIL;

  return (
    <html lang="es">
      <body className={inter.className}>
        <a className="skip-link" href="#contenido">
          Saltar al contenido
        </a>

        <Header />

        <main id="contenido">{children}</main>

        <Footer />

        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
