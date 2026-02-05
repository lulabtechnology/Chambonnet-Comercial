import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { CONTACT, SITE } from "@/lib/site";
import { IconBadgeCheck, IconBolt, IconBuilding, IconClipboard, IconHome, IconKey, IconWrench } from "@/components/Icons";

export default function Page() {
  return (
    <>
      {/* HERO */}
      <section id="inicio" className="relative overflow-hidden bg-brand-black text-white">
        <div className="absolute inset-0 opacity-60">
          {/* Imagen Desktop */}
          <div className="hidden md:block h-full w-full">
            <Image
              src="/hero-desktop.jpg"
              alt="Propiedades en Panamá (imagen placeholder)"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </div>

          {/* Imagen Mobile */}
          <div className="block md:hidden h-full w-full">
            <Image
              src="/hero-mobile.jpg"
              alt="Propiedades en Panamá (imagen placeholder)"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </div>

          {/* Overlay elegante */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-black/85" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(209,15,27,0.25),transparent_55%)]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <Reveal>
                <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-white/85">
                  <span className="h-2 w-2 rounded-full bg-brand-red" aria-hidden="true" />
                  Consultores inmobiliarios en Panamá
                </p>
              </Reveal>

              <Reveal delayMs={80}>
                <h1 className="mt-4 text-3xl font-extrabold leading-tight md:text-5xl">
                  Consultores inmobiliarios en Panamá | {SITE.name}
                </h1>
              </Reveal>

              <Reveal delayMs={140}>
                <p className="mt-4 text-white/80 md:text-lg">
                  Tu agente de confianza. Procesos claros y acompañamiento en todo momento. Compra, vende y alquila
                  fácilmente con atención personalizada.
                </p>
              </Reveal>

              <Reveal delayMs={220}>
                <ul className="mt-6 space-y-3 text-white/85">
                  <li className="flex items-start gap-3">
                    <IconBadgeCheck className="mt-0.5 h-5 w-5 text-brand-red" />
                    <span>Compra segura con acompañamiento</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <IconBolt className="mt-0.5 h-5 w-5 text-brand-red" />
                    <span>Respuesta rápida y atención personalizada</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <IconBuilding className="mt-0.5 h-5 w-5 text-brand-red" />
                    <span>+{SITE.managedCount} propiedades administradas a nivel nacional</span>
                  </li>
                </ul>
              </Reveal>

              <Reveal delayMs={300}>
                <div className="mt-7 flex flex-wrap gap-2">
                  <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80">
                    Atención 24/7
                  </span>
                  <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80">
                    Miembros ACOBIR
                  </span>
                  <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80">
                    Miembros MLS
                  </span>
                </div>
              </Reveal>

              <Reveal delayMs={380}>
                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#tips"
                    className="inline-flex items-center justify-center rounded-xl bg-brand-red px-5 py-3 text-sm font-extrabold text-white shadow-soft transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-white/70"
                  >
                    Ver propiedades en redes
                  </a>
                  <a
                    href="#contacto"
                    className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-extrabold text-white backdrop-blur transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/70"
                  >
                    WhatsApp
                  </a>
                </div>

                <p className="mt-4 text-xs text-white/70">
                  Zonas fuertes (ejemplo): {SITE.zones.join(" / ")}.
                </p>
              </Reveal>
            </div>

            <Reveal delayMs={220}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-bold">Tu próxima propiedad, con procesos claros</p>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/80">
                    Premium-simple
                  </span>
                </div>

                <div className="mt-4 rounded-2xl border border-white/10 bg-black/30 p-4">
                  <p className="text-sm text-white/80">
                    Servicio ideal si buscas en Google una propiedad en Panamá y quieres un acompañamiento directo, con
                    soluciones fáciles y pasos definidos.
                  </p>

                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs font-semibold text-white/70">Enfoque</p>
                      <p className="mt-1 text-sm font-bold">Compra / Venta / Alquiler</p>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs font-semibold text-white/70">Administración</p>
                      <p className="mt-1 text-sm font-bold">Gestión completa</p>
                    </div>
                  </div>

                  <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs font-semibold text-white/70">Oferta</p>
                    <p className="mt-1 text-sm font-bold">Conoce tips para comprar propiedades en Panamá</p>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2 text-xs">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-white/75">
                    TODO: Reemplazar imágenes del hero
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-white/75">
                    TODO: Actualizar redes y WhatsApp en <code className="font-mono">site.ts</code>
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Divider */}
        <div className="h-10 bg-gradient-to-b from-brand-black to-white" aria-hidden="true" />
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="scroll-mt-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <Reveal>
            <h2 className="text-2xl font-extrabold text-brand-black md:text-3xl">Servicios</h2>
          </Reveal>
          <Reveal delayMs={80}>
            <p className="mt-3 max-w-2xl text-black/70">
              Soluciones fáciles, pasos claros y acompañamiento en todo momento para que tomes decisiones con confianza.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              icon={<IconHome className="h-6 w-6 text-brand-red" />}
              title="Venta"
              desc="Estrategia de comercialización y acompañamiento de principio a fin."
            />
            <ServiceCard
              icon={<IconKey className="h-6 w-6 text-brand-red" />}
              title="Alquiler"
              desc="Gestión ágil: publicaciones, filtros y coordinación para cerrar rápido."
            />
            <ServiceCard
              icon={<IconBuilding className="h-6 w-6 text-brand-red" />}
              title="Administración"
              desc="Gestión integral: cobros, seguimiento y mantenimiento preventivo."
            />
            <ServiceCard
              icon={<IconClipboard className="h-6 w-6 text-brand-red" />}
              title="Inspección y mantenimiento"
              desc="Revisión periódica para conservar el valor del inmueble."
            />
            <ServiceCard
              icon={<IconWrench className="h-6 w-6 text-brand-red" />}
              title="Remodelaciones y reparaciones"
              desc="Coordinación de mejoras con enfoque en calidad y presupuesto."
            />
            <ServiceCard
              icon={<IconBuilding className="h-6 w-6 text-brand-red" />}
              title="Comercialización residencial y comercial"
              desc="Apartamentos, casas, terrenos, galeras y oficinas."
            />
          </div>
        </div>
      </section>

      {/* CÓMO FUNCIONA */}
      <section id="como-funciona" className="scroll-mt-24 bg-black/[0.02]">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <Reveal>
            <h2 className="text-2xl font-extrabold text-brand-black md:text-3xl">Cómo funciona</h2>
          </Reveal>
          <Reveal delayMs={80}>
            <p className="mt-3 max-w-2xl text-black/70">
              Un camino simple y claro para avanzar con confianza.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <StepCard step="Paso 1" title="Quiero comprar o alquilar" desc="Cuéntanos qué buscas y en qué plazo." />
            <StepCard
              step="Paso 2"
              title="Elige el tipo"
              desc="Apartamento, casa, terreno, galera u oficina."
            />
            <StepCard
              step="Paso 3"
              title="Define presupuesto y ubicación"
              desc="Te guiamos para acotar opciones y encontrar la mejor alternativa."
            />
          </div>

          <Reveal delayMs={120}>
            <div className="mt-8 rounded-2xl border border-black/10 bg-white p-5 shadow-soft">
              <p className="text-sm text-black/80">
                <span className="font-extrabold text-brand-black">Nota:</span> Te guiamos con procesos claros de inicio a
                fin, con atención personalizada y seguimiento continuo.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TIPS */}
      <section id="tips" className="scroll-mt-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <Reveal>
            <h2 className="text-2xl font-extrabold text-brand-black md:text-3xl">Tips para comprar propiedades en Panamá</h2>
          </Reveal>
          <Reveal delayMs={80}>
            <p className="mt-3 max-w-2xl text-black/70">
              Contenido práctico para avanzar con claridad: decisiones mejor informadas, pasos ordenados y acompañamiento.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            <TipCard
              n="1"
              title="Define tu objetivo y horizonte"
              desc="Vivienda, inversión o renta: el objetivo guía la zona, el presupuesto y el tipo de propiedad."
            />
            <TipCard
              n="2"
              title="Haz un checklist de requisitos"
              desc="Habitaciones, estacionamientos, amenidades y accesos. Reduce tiempo y mejora resultados."
            />
            <TipCard
              n="3"
              title="Revisa ubicación y conectividad"
              desc="Cercanía a servicios, accesos viales y proyección del área (ej.: Bellavista, San Francisco)."
            />
            <TipCard
              n="4"
              title="Confirma documentación y condiciones"
              desc="Validación de papeles clave y criterios de negociación con pasos claros."
            />
            <TipCard
              n="5"
              title="Alinea mantenimiento y proyección"
              desc="Evalúa estado, mejoras recomendadas y costos de mantenimiento para una decisión sólida."
            />
          </div>

          <Reveal delayMs={120}>
            <div className="mt-10 rounded-2xl border border-black/10 bg-white p-6 shadow-soft">
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm font-extrabold text-brand-black">CTA principal</p>
                  <p className="mt-1 text-black/70">Ver propiedades y más tips directamente en nuestras redes.</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <a
                    href={CONTACT.INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl border border-black/10 bg-white px-4 py-2 text-sm font-extrabold text-brand-black transition hover:bg-black/[0.03] focus:outline-none focus:ring-2 focus:ring-brand-red/40"
                    aria-label="Abrir Instagram (placeholder)"
                  >
                    Instagram
                  </a>
                  <a
                    href={CONTACT.FACEBOOK_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl border border-black/10 bg-white px-4 py-2 text-sm font-extrabold text-brand-black transition hover:bg-black/[0.03] focus:outline-none focus:ring-2 focus:ring-brand-red/40"
                    aria-label="Abrir Facebook (placeholder)"
                  >
                    Facebook
                  </a>
                  <a
                    href={CONTACT.TIKTOK_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl border border-black/10 bg-white px-4 py-2 text-sm font-extrabold text-brand-black transition hover:bg-black/[0.03] focus:outline-none focus:ring-2 focus:ring-brand-red/40"
                    aria-label="Abrir TikTok (placeholder)"
                  >
                    TikTok
                  </a>
                </div>
              </div>

              <p className="mt-4 text-xs text-black/60">
                TODO: Cambiar URLs reales en <code className="font-mono">/src/lib/site.ts</code>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CONFIANZA / PROOF */}
      <section className="bg-black/[0.02]">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <Reveal>
            <h2 className="text-2xl font-extrabold text-brand-black md:text-3xl">Resultados y respaldo</h2>
          </Reveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:items-center">
            <Reveal delayMs={80}>
              <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-soft">
                <p className="text-sm font-semibold text-black/60">Dato fuerte</p>
                <p className="mt-2 text-4xl font-extrabold text-brand-black">+{SITE.managedCount}</p>
                <p className="mt-1 text-black/70">propiedades administradas a nivel nacional</p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-black/10 bg-black/[0.02] p-4">
                    <p className="text-sm font-extrabold text-brand-black">Respuesta rápida</p>
                    <p className="mt-1 text-sm text-black/70">Atención personalizada y seguimiento.</p>
                  </div>
                  <div className="rounded-xl border border-black/10 bg-black/[0.02] p-4">
                    <p className="text-sm font-extrabold text-brand-black">Variedad nacional</p>
                    <p className="mt-1 text-sm text-black/70">Opciones residenciales y comerciales.</p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delayMs={120}>
              <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-soft">
                <p className="text-sm font-extrabold text-brand-black">Miembros ACOBIR y MLS</p>
                <p className="mt-1 text-sm text-black/70">
                  Respaldo institucional (logos como placeholders, se reemplazan al recibir los archivos finales).
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <div className="rounded-xl border border-black/10 bg-white p-3">
                    <Image src="/logo-acobir.svg" alt="Logo ACOBIR (placeholder)" width={160} height={44} />
                  </div>
                  <div className="rounded-xl border border-black/10 bg-white p-3">
                    <Image src="/logo-mls.svg" alt="Logo MLS (placeholder)" width={160} height={44} />
                  </div>
                </div>

                <p className="mt-4 text-xs text-black/60">
                  TODO: Reemplazar <code className="font-mono">/public/logo-acobir.svg</code> y{" "}
                  <code className="font-mono">/public/logo-mls.svg</code> por los logos reales.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <Reveal>
            <h2 className="text-2xl font-extrabold text-brand-black md:text-3xl">Preguntas frecuentes</h2>
          </Reveal>

          <div className="mt-10 space-y-3">
            <FaqItem
              q="¿Cuál es el proceso para comprar una propiedad en Panamá?"
              a="Primero definimos objetivo, presupuesto y ubicación. Luego preseleccionamos opciones, coordinamos visitas y revisamos documentación clave. Te acompañamos en cada paso para que avances con claridad, tiempos definidos y comunicación constante."
            />
            <FaqItem
              q="¿Cuál es el proceso para alquilar en Panamá?"
              a="Alineamos requisitos (zona, presupuesto, tipo de propiedad), filtramos opciones y coordinamos visitas. Después revisamos condiciones del contrato, fechas y requisitos de ingreso. El objetivo es un proceso ágil, ordenado y con seguimiento."
            />
            <FaqItem
              q="¿Qué contempla el servicio de administración?"
              a="Gestión y seguimiento del inmueble: coordinación de mantenimiento preventivo, control de incidencias, apoyo en comunicación con inquilinos y reportes según se acuerde. El enfoque es mantener el inmueble bien cuidado y el proceso bien gestionado."
            />
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="scroll-mt-24 bg-black/[0.02]">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <Reveal>
            <h2 className="text-2xl font-extrabold text-brand-black md:text-3xl">Contáctanos</h2>
          </Reveal>
          <Reveal delayMs={80}>
            <p className="mt-3 max-w-2xl text-black/70">
              Cuéntanos lo que buscas. Al enviar, se abrirá WhatsApp con un mensaje prellenado para atenderte más rápido.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:items-start">
            <Reveal delayMs={120}>
              <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-soft">
                <ContactForm />
              </div>
            </Reveal>

            <Reveal delayMs={160}>
              <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-soft">
                <p className="text-sm font-extrabold text-brand-black">CTA secundario</p>
                <p className="mt-2 text-black/70">
                  ¿Prefieres ir directo? Escríbenos por WhatsApp y te guiamos con procesos claros.
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#contacto"
                    className="inline-flex items-center justify-center rounded-xl bg-brand-red px-5 py-3 text-sm font-extrabold text-white shadow-soft transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-brand-red/40"
                  >
                    Escribir por WhatsApp
                  </a>
                  <Link
                    href="/terminos"
                    className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white px-5 py-3 text-sm font-extrabold text-brand-black transition hover:bg-black/[0.03] focus:outline-none focus:ring-2 focus:ring-brand-red/40"
                  >
                    Ver Términos
                  </Link>
                </div>

                <div className="mt-6 rounded-xl border border-black/10 bg-black/[0.02] p-4">
                  <p className="text-xs font-semibold text-black/60">Recordatorio</p>
                  <p className="mt-1 text-sm text-black/70">
                    TODO: Cambiar redes y WhatsApp en <code className="font-mono">/src/lib/site.ts</code> para que todo quede listo.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

function ServiceCard({
  icon,
  title,
  desc
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <Reveal>
      <div className="group rounded-2xl border border-black/10 bg-white p-6 shadow-soft transition hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(0,0,0,.12)]">
        <div className="flex items-center gap-3">
          <div className="rounded-xl border border-black/10 bg-black/[0.02] p-2">{icon}</div>
          <p className="text-base font-extrabold text-brand-black">{title}</p>
        </div>
        <p className="mt-3 text-sm text-black/70">{desc}</p>
      </div>
    </Reveal>
  );
}

function StepCard({ step, title, desc }: { step: string; title: string; desc: string }) {
  return (
    <Reveal>
      <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-soft">
        <p className="text-xs font-extrabold text-brand-red">{step}</p>
        <p className="mt-2 text-base font-extrabold text-brand-black">{title}</p>
        <p className="mt-2 text-sm text-black/70">{desc}</p>
      </div>
    </Reveal>
  );
}

function TipCard({ n, title, desc }: { n: string; title: string; desc: string }) {
  return (
    <Reveal>
      <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-soft">
        <div className="flex items-start gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-red text-sm font-extrabold text-white">
            {n}
          </span>
          <div>
            <p className="text-base font-extrabold text-brand-black">{title}</p>
            <p className="mt-1 text-sm text-black/70">{desc}</p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group rounded-2xl border border-black/10 bg-white p-5 shadow-soft">
      <summary className="cursor-pointer list-none font-extrabold text-brand-black outline-none">
        <span className="align-middle">{q}</span>
        <span className="float-right ml-4 inline-flex h-7 w-7 items-center justify-center rounded-lg border border-black/10 bg-black/[0.02] text-brand-black">
          <span className="group-open:hidden" aria-hidden="true">+</span>
          <span className="hidden group-open:inline" aria-hidden="true">–</span>
        </span>
      </summary>
      <p className="mt-3 text-sm text-black/70">{a}</p>
    </details>
  );
}
