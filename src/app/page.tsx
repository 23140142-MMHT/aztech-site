import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Trajectory from "@/components/Trajectory";
import {
  team,
  identity,
  ambassadors,
  history,
  achievements,
  distinctives,
  structure,
  pillars,
  sponsors,
} from "@/lib/site";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* ───────────────── Hero (estilo Hypebirds) ───────────────── */}
      <section className="relative -mt-20 flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
        {/* Glows de fondo */}
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(60rem 40rem at 50% 30%, rgb(var(--primary) / 0.22), transparent 60%), radial-gradient(40rem 30rem at 80% 80%, rgb(var(--accent) / 0.12), transparent 60%)",
          }}
        />

        {/* Degradado de cierre: funde el hero hacia el negro del fondo */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-72 bg-gradient-to-b from-transparent to-background" />

        {/* Programa, vertical al costado */}
        <span className="absolute left-5 top-1/2 hidden -translate-y-1/2 font-mono text-xs tracking-[0.5em] text-muted-foreground [writing-mode:vertical-rl] md:block">
          FIRST TECH CHALLENGE
        </span>

        {/* Logo gigante (sin sombra) */}
        <Image
          src="/brand/hero-logo.png"
          alt="Aztech II"
          width={1000}
          height={840}
          priority
          className="mx-auto mt-28 w-full max-w-2xl animate-fade-up sm:mt-44"
        />

        {/* Número de equipo 17626, centrado respecto al logo */}
        <Image
          src="/brand/hero-art.png"
          alt="17626"
          width={490}
          height={130}
          priority
          className="mx-auto -mt-12 w-full max-w-xs animate-fade-up sm:-mt-24 sm:max-w-sm"
        />

        <div className="mt-8 flex flex-wrap justify-center gap-3 animate-fade-up">
          <a href="#nosotros" className="btn btn-accent">
            Conócenos
          </a>
          <Link href="/projects" className="btn btn-outline">
            Nuestras Áreas
          </Link>
        </div>

        {/* Scroll cue */}
        <a
          href="#nosotros"
          aria-label="Bajar"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground transition-colors hover:text-accent"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="animate-pulse-glow">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </a>
      </section>

      {/* ───────────────── Nosotros / Historia ───────────────── */}
      <section id="nosotros" className="mx-auto max-w-binder px-6 py-20">
        {/* Texto (2/3) + trayectoria (1/3) */}
        <div className="grid gap-10 md:grid-cols-3 md:items-start">
          <div className="md:col-span-2">
            <span className="badge">Nosotros</span>
            <h2 className="mt-4 text-3xl sm:text-4xl">
              Más que un equipo de robótica
            </h2>
            <p className="mt-4 text-muted-foreground">{history.blurb}</p>
            <p className="mt-4 text-muted-foreground">
              Creemos que la tecnología debe ser{" "}
              <strong className="text-foreground">
                accesible para todos y una herramienta de cambio social
              </strong>
              , no solo un fin técnico. Nacimos en 2019 dentro de FTC para formar
              jóvenes líderes capaces de transformar su entorno, bajo una
              filosofía de crecimiento constante, colaboración y aprendizaje
              continuo.
            </p>
            <p className="mt-4 text-muted-foreground">
              Hemos evolucionado temporada a temporada: en Ultimate Goal
              consolidamos nuestra identidad, y hoy, en Decode (2026), acumulamos
              logros como el Inspire Award y el Think Award (en dos ocasiones),
              reflejo de la solidez de nuestra ingeniería y nuestro impacto en la
              comunidad.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {achievements.map((a) => (
                <span key={a.name} className="badge" title={a.note}>
                  🏆 {a.name}
                </span>
              ))}
            </div>
          </div>
          <div className="card overflow-visible">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
              Nuestra trayectoria FIRST
            </h3>
            <p className="mt-1 text-xs text-muted-foreground">
              Pasa el cursor sobre cada temporada para ver su imagen, eventos y
              premios.
            </p>
            <Trajectory seasons={history.seasons} />
          </div>
        </div>

        {/* Foto del equipo (a un costado) + Misión / Visión / Propósito */}
        <div className="mt-12 grid gap-10 md:grid-cols-2 md:items-stretch">
          <div className="overflow-hidden rounded-2xl border border-border shadow-glow">
            <Image
              src="/brand/team.png"
              alt="Equipo Aztech II 17626"
              width={2000}
              height={1545}
              className="h-full min-h-[18rem] w-full object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
          <div className="grid gap-6">
            {[
              { t: "Misión", d: identity.mission },
              { t: "Visión", d: identity.vision },
              { t: "Propósito", d: identity.purpose },
            ].map((c) => (
              <div key={c.t} className="card">
                <h3 className="text-xl text-accent">{c.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────── Identidad / Inclusión ───────────────── */}
      <section id="identidad" className="mx-auto max-w-binder px-6 py-20">
        <span className="badge">Identidad</span>
        <h2 className="mt-4 max-w-2xl text-3xl sm:text-4xl">
          Lo que nos hace Guerreros Aztecas
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {distinctives.map((c) => (
            <div key={c.title} className="card">
              <h3 className="text-xl">{c.title}</h3>
              <p className="mt-3 text-muted-foreground">{c.body}</p>
            </div>
          ))}
        </div>

        {/* Embajadores FIRST */}
        <div className="card mt-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-center">
            <div className="md:flex-1">
              <h3 className="text-xl">Embajadores FIRST</h3>
              <p className="mt-3 text-muted-foreground">{ambassadors.text}</p>
            </div>
            <div className="flex flex-wrap gap-2 md:justify-end">
              {ambassadors.programs.map((p) => (
                <span key={p} className="badge">
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────── Our Projects (preview) ───────────────── */}
      <section className="mx-auto max-w-binder px-6 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="badge">Our Projects</span>
            <h2 className="mt-4 text-3xl sm:text-4xl">Nuestros pilares</h2>
            <p className="mt-3 max-w-xl text-muted-foreground">
              Cinco pilares que sostienen al equipo dentro y fuera de la cancha.
            </p>
          </div>
          <Link href="/projects" className="btn btn-outline">
            Ver todos →
          </Link>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {pillars.map((p) => (
            <Link
              key={p.id}
              href={`/projects#${p.id}`}
              className="card flex flex-col gap-2"
            >
              <h3 className="text-base">{p.title}</h3>
              <p className="text-sm text-muted-foreground">{p.tagline}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ───────────────── Equipo (estructura) ───────────────── */}
      <section className="mx-auto max-w-binder px-6 py-20">
        <span className="badge">Equipo</span>
        <h2 className="mt-4 text-3xl sm:text-4xl">Una estructura con roles claros</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {structure.leads.map((l) => (
            <div key={l.name} className="card text-center">
              <div className="text-lg font-semibold">{l.name}</div>
              <div className="mt-1 text-sm text-accent">{l.role}</div>
            </div>
          ))}
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="card">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
              Business Mentors
            </h3>
            <p className="mt-2 text-muted-foreground">
              {structure.businessMentors.join(" · ")}
            </p>
          </div>
          <div className="card">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
              Engineering Mentors
            </h3>
            <p className="mt-2 text-muted-foreground">
              {structure.engineeringMentors.join(" · ")}
            </p>
          </div>
        </div>
      </section>

      {/* ───────────────── Sponsors ───────────────── */}
      <section id="sponsors" className="mx-auto max-w-binder px-6 py-20 text-center">
        <span className="badge">Patrocinadores</span>
        <h2 className="mt-4 text-3xl sm:text-4xl">Quienes nos impulsan</h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Nuestros patrocinadores creen en la misión del equipo y en el impacto
          de FIRST. Buscamos relaciones recíprocas y de largo plazo.
        </p>
        <div className="mx-auto mt-10 max-w-5xl rounded-2xl border border-border bg-black px-6 py-10 shadow-glow-sm">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-6">
            {sponsors.map((s) => (
              <div
                key={s.name}
                title={s.name}
                className="flex w-[calc(50%-2rem)] items-center justify-center sm:w-[calc(25%-2rem)]"
              >
                <Image
                  src={s.logo}
                  alt={s.name}
                  width={260}
                  height={160}
                  className="h-24 w-auto object-contain transition-transform hover:scale-105 sm:h-28"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
