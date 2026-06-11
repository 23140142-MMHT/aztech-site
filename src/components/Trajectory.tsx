"use client";

import { useState } from "react";
import type { Season } from "@/lib/site";

function SeasonImage({ season }: { season: Season }) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="grid h-24 w-24 place-items-center rounded-md border border-accent/30 bg-gradient-to-br from-surface to-surface-2 text-center text-[10px] text-muted-foreground">
        Imagen
        <br />
        próximamente
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={season.image}
      alt={season.label}
      className="h-24 w-24 rounded-md border border-accent/30 object-cover"
      onError={() => setError(true)}
    />
  );
}

function EventList({ season }: { season: Season }) {
  if (season.events.length === 0) {
    return (
      <p className="text-[11px] leading-snug text-muted-foreground">
        Participación en temporada — sin resultados destacados registrados.
      </p>
    );
  }

  return (
    <ul className="space-y-1.5">
      {season.events.map((e) => (
        <li key={e.name} className="leading-snug">
          <span className="text-[11px] text-foreground/90">{e.name}</span>
          {e.award && (
            <span className="ml-1.5 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 px-2 py-0.5 text-[10px] font-semibold text-accent ring-1 ring-accent/40">
              🏆 {e.award}
            </span>
          )}
          {e.soon && (
            <span className="ml-1.5 inline-flex items-center gap-1 rounded-full bg-foreground/5 px-2 py-0.5 text-[10px] font-semibold text-muted-foreground ring-1 ring-border">
              ⏳ Coming soon
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}

function SeasonRow({
  season,
  index,
  isLast,
}: {
  season: Season;
  index: number;
  isLast: boolean;
}) {
  return (
    <li className="group relative flex items-center gap-3">
      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gradient-to-br from-primary to-accent text-xs font-bold text-white">
        {index + 1}
      </span>
      <span
        className={`cursor-default transition-colors group-hover:text-accent ${
          isLast ? "font-semibold text-foreground" : "text-muted-foreground"
        }`}
      >
        {season.label}
      </span>
      <span className="font-mono text-xs text-muted-foreground/70">
        {season.year}
      </span>

      {/* Menú flotante: imagen + eventos/premios al lado (aparece al hacer hover) */}
      <div className="pointer-events-none absolute bottom-full left-8 z-30 mb-2 w-[24rem] max-w-[80vw] origin-bottom-left scale-95 opacity-0 transition-all duration-200 group-hover:scale-100 group-hover:opacity-100">
        <div className="flex gap-3 rounded-lg border border-accent/40 bg-surface p-3 shadow-glow">
          <div className="shrink-0">
            <SeasonImage season={season} />
            <div className="mt-1 text-center text-[11px] font-medium text-foreground/85">
              {season.label}
            </div>
            <div className="text-center font-mono text-[10px] text-muted-foreground">
              {season.year}
            </div>
          </div>
          <div className="min-w-0 flex-1 self-center">
            <EventList season={season} />
          </div>
        </div>
      </div>
    </li>
  );
}

export default function Trajectory({ seasons }: { seasons: Season[] }) {
  return (
    <ol className="mt-4 space-y-3">
      {seasons.map((s, i) => (
        <SeasonRow
          key={s.label}
          season={s}
          index={i}
          isLast={i === seasons.length - 1}
        />
      ))}
    </ol>
  );
}
