import Image from "next/image";
import Link from "next/link";
import { TECHNICAL_BINDER_URL } from "@/lib/site";

const LINKS = [
  { href: "/#nosotros", label: "Quiénes somos" },
  { href: "/#identidad", label: "Identidad" },
  { href: "/projects", label: "Áreas" },
  { href: "https://aztech-17626-our-impact.vercel.app", label: "Impacto", external: true },
  { href: "/#contacto", label: "Contacto" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-b from-background/85 to-transparent backdrop-blur-[2px]">
      <nav className="mx-auto flex h-20 max-w-binder items-center gap-6 px-6">
        {/* Textmark del Technical Binder (arriba-izquierda) */}
        <Link href="/" className="shrink-0">
          <Image
            src="/brand/wordmark.png"
            alt="Aztech II"
            width={180}
            height={30}
            className="h-7 w-auto sm:h-8"
            priority
          />
        </Link>

        {/* Links centrados */}
        <ul className="mx-auto hidden items-center gap-7 lg:flex">
          {LINKS.map((l) =>
            l.external ? (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm font-medium tracking-wide text-foreground/85 transition-colors hover:text-accent"
                >
                  {l.label}
                </a>
              </li>
            ) : (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm font-medium tracking-wide text-foreground/85 transition-colors hover:text-accent"
                >
                  {l.label}
                </Link>
              </li>
            )
          )}
          <li>
            <a
              href={TECHNICAL_BINDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium tracking-wide text-accent transition-colors hover:text-foreground"
            >
              Technical Binder ↗
            </a>
          </li>
        </ul>

        {/* Acciones derecha: Instagram + lupa */}
        <div className="ml-auto flex items-center gap-4 lg:ml-0">
          <a
            href="https://www.instagram.com/aztech_2_17626/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden text-sm font-medium text-foreground/85 transition-colors hover:text-accent sm:inline lg:hidden xl:inline"
          >
            Síguenos
          </a>
          <span
            aria-hidden
            className="grid h-9 w-9 place-items-center rounded-full border border-border text-foreground/80 transition-colors hover:border-accent hover:text-accent"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </span>
        </div>
      </nav>
    </header>
  );
}
