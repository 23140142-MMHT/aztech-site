/**
 * Marco para fotos del portafolio. Mientras no exista la imagen, muestra un
 * placeholder elegante con el caption. Para usar una foto real:
 *   1. Coloca el archivo en public/projects/<nombre>.jpg
 *   2. Descomenta el bloque <Image> de abajo y borra el placeholder.
 */
export default function PhotoFrame({
  caption,
  className = "",
}: {
  src?: string;
  caption?: string;
  className?: string;
}) {
  return (
    <figure
      className={`group relative grid aspect-[4/3] place-items-center overflow-hidden rounded-lg border border-dashed border-border bg-gradient-to-br from-surface to-surface-2 ${className}`}
    >
      {/* Placeholder — reemplaza por <Image src={src} .../> cuando tengas la foto */}
      <div className="flex flex-col items-center gap-2 text-center text-muted-foreground">
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          className="opacity-60"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="M21 15l-5-5L5 21" />
        </svg>
        <span className="text-xs">Foto próximamente</span>
      </div>
      {caption && (
        <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent px-3 py-2 text-xs text-foreground/80">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
