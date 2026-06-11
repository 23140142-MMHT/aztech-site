import Image from "next/image";
import { team, TECHNICAL_BINDER_URL } from "@/lib/site";

export default function Footer() {
  return (
    <footer id="contacto" className="border-t border-border">
      <div className="mx-auto max-w-binder px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="flex max-w-sm flex-col items-start gap-4">
            <Image
              src="/brand/logo.png"
              alt="Aztech II"
              width={64}
              height={64}
              className="h-16 w-auto drop-shadow-[0_0_22px_rgba(143,0,255,0.45)]"
            />
            <Image
              src="/brand/wordmark.png"
              alt="Aztech II"
              width={200}
              height={30}
              className="h-6 w-auto"
            />
            <p className="text-muted-foreground">
              Equipo {team.number} de {team.program}. Ingeniería, innovación y
              comunidad desde {team.location}.
            </p>
          </div>
          <div className="md:text-right">
            <h3 className="text-xl">¿Hablamos?</h3>
            <p className="mt-3 text-muted-foreground">
              Escríbenos para alianzas, patrocinios o demostraciones del robot.
            </p>
            <div className="mt-5 flex flex-wrap gap-3 md:justify-end">
              <a
                href="https://www.instagram.com/aztech4775/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-accent"
              >
                @aztech4775
              </a>
              <a
                href={team.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                Instagram
              </a>
              <a
                href={team.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                TikTok
              </a>
            </div>
            <div className="mt-4 md:text-right">
              <a
                href={TECHNICAL_BINDER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-accent hover:underline"
              >
                Ver Technical Binder →
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
          <span>
            © 2026 {team.name} · FTC {team.number}. Todos los derechos
            reservados.
          </span>
          <span>Hecho con 💜 por el equipo</span>
        </div>
      </div>
    </footer>
  );
}
