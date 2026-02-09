import * as React from "react";
import { CONTACT } from "@/lib/site";

type Variant = "hero" | "header" | "footer";

export default function SocialLinks({ variant = "hero" }: { variant?: Variant }) {
  const base =
    "inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm font-extrabold transition focus:outline-none focus:ring-2";

  const styles: Record<Variant, string> = {
    hero: "border-white/20 bg-white/5 text-white hover:bg-white/10 focus:ring-white/60",
    header: "border-black/10 bg-white text-brand-black hover:bg-black/[0.03] focus:ring-brand-red/40",
    footer: "border-black/10 bg-white text-brand-black hover:bg-black/[0.03] focus:ring-brand-red/40",
  };

  const items = [
    { label: "Instagram", href: CONTACT.INSTAGRAM_URL, Icon: InstagramIcon },
    { label: "Facebook", href: CONTACT.FACEBOOK_URL, Icon: FacebookIcon },
    { label: "TikTok", href: CONTACT.TIKTOK_URL, Icon: TikTokIcon },
  ].filter((x) => !!x.href);

  return (
    <div className="flex flex-wrap items-center gap-2" aria-label="Redes sociales">
      {items.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          className={`${base} ${styles[variant]}`}
          aria-label={`Abrir ${label}`}
          title={label}
        >
          <Icon className="h-5 w-5" />
          <span className="leading-none">{label}</span>
        </a>
      ))}
    </div>
  );
}

function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-5 4.5A5.5 5.5 0 1 1 6.5 14 5.5 5.5 0 0 1 12 8.5zm0 2A3.5 3.5 0 1 0 15.5 14 3.5 3.5 0 0 0 12 10.5zM18 6.8a1.2 1.2 0 1 1-1.2-1.2A1.2 1.2 0 0 1 18 6.8z" />
    </svg>
  );
}

function FacebookIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.5 22v-8h2.7l.4-3H13.5V9.1c0-.9.3-1.5 1.6-1.5h1.7V5c-.3 0-1.4-.1-2.7-.1-2.7 0-4.6 1.6-4.6 4.7V11H7v3h2.5v8h4z" />
    </svg>
  );
}

function TikTokIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M14 3c.4 3.3 2.3 5.2 5 5.5V12c-1.8 0-3.5-.6-5-1.8V16c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6c.4 0 .8 0 1.2.1v3.4c-.4-.1-.8-.2-1.2-.2-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3V3h3z" />
    </svg>
  );
}
