import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CONTACT, SITE } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: "Consultores inmobiliarios en Panamá | Chambonnet Comercial",
  description: SITE.description,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: "/",
    siteName: SITE.name,
    title: "Consultores inmobiliarios en Panamá | Chambonnet Comercial",
    description: SITE.description,
    images: [
      {
        url: SITE.ogImage,
        width: 1200,
        height: 630,
        alt: "Chambonnet Comercial"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Consultores inmobiliarios en Panamá | Chambonnet Comercial",
    description: SITE.description,
    images: [SITE.ogImage]
  },
  robots: {
    index: true,
    follow: true
  },
  other: {
    "theme-color": "#D10F1B"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    areaServed: "Panamá",
    address: {
      "@type": "PostalAddress",
      addressCountry: "PA",
      addressLocality: "Panamá"
    },
    telephone: CONTACT.PHONE,
    email: CONTACT.EMAIL,
    sameAs: [CONTACT.INSTAGRAM_URL, CONTACT.FACEBOOK_URL, CONTACT.TIKTOK_URL].filter(Boolean)
  };

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
