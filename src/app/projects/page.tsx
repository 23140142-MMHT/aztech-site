import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PhotoFrame from "@/components/PhotoFrame";
import { pillars, TECHNICAL_BINDER_URL, team } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Projects · Aztech II",
  description:
    "Los pilares de proyectos de Aztech II: outreach, inclusión, sustentabilidad, liderazgo y sustentabilidad financiera.",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Encabezado */}
      <section className="mx-auto max-w-binder px-6 pt-16 pb-10 text-center md:pt-24">
        <span className="badge animate-fade-up">Our Projects</span>
        <h1 className="mx-auto mt-6 max-w-3xl text-4xl leading-tight animate-fade-up sm:text-5xl">
          Los pilares de{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Aztech II
          </span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground animate-fade-up">
          El equipo es mucho más que la competencia. Estos son los pilares con
          los que generamos impacto social, ambiental y educativo en nuestra
          comunidad.
        </p>

        {/* Índice de anclas */}
        <nav className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2">
          {pillars.map((p) => (
            <a key={p.id} href={`#${p.id}`} className="badge hover:border-accent">
              {p.title}
            </a>
          ))}
        </nav>
      </section>

      {/* Pilares */}
      <section className="mx-auto max-w-binder px-6 py-8">
        <div className="space-y-6">
          {pillars.map((p, i) => (
            <article
              key={p.id}
              id={p.id}
              className="card scroll-mt-24 grid gap-8 md:grid-cols-2"
            >
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <h2 className="text-2xl sm:text-3xl">{p.title}</h2>
                <p className="mt-1 text-sm text-accent/80">{p.tagline}</p>
                <p className="mt-4 text-muted-foreground">{p.description}</p>
                <ul className="mt-5 space-y-2">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex gap-3 text-foreground/90">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {pt}
                    </li>
                  ))}
                </ul>
                {p.metrics && (
                  <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {p.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="rounded-md border border-border bg-background/40 p-3 text-center"
                      >
                        <div className="font-heading text-xl text-accent">
                          {m.value}
                        </div>
                        <div className="mt-0.5 text-[11px] leading-tight text-muted-foreground">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div
                className={`grid gap-4 ${
                  (p.photos?.length ?? 0) > 1 ? "sm:grid-cols-2" : ""
                } ${i % 2 === 1 ? "md:order-1" : ""}`}
              >
                {(p.photos ?? [{ src: "", caption: "" }]).map((ph, j) => (
                  <PhotoFrame key={j} src={ph.src} caption={ph.caption} />
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Technical Binder (ingeniería — solo enlace) */}
      <section className="mx-auto max-w-binder px-6 py-12">
        <a
          href={TECHNICAL_BINDER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="card group flex flex-col items-start gap-4 transition-all hover:border-accent hover:shadow-glow sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">
              Ingeniería
            </span>
            <h2 className="mt-2 text-2xl">Documentación técnica</h2>
            <p className="mt-2 max-w-xl text-muted-foreground">
              Todo el proceso de ingeniería, diseño y desarrollo está documentado
              a detalle en nuestro Technical Binder.
            </p>
          </div>
          <span className="btn btn-accent shrink-0">
            Abrir Technical Binder
            <span className="transition-transform group-hover:translate-x-1">↗</span>
          </span>
        </a>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-binder px-6 py-16 text-center">
        <h2 className="text-2xl sm:text-3xl">¿Quieres ser parte?</h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          Patrocina al equipo {team.number}, colabora con nosotros o invítanos a
          tu evento.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link href="/#contacto" className="btn btn-accent">
            Contáctanos
          </Link>
          <a
            href={team.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            Síguenos en Instagram
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
