# Sitio Aztech II

Landing del equipo de robótica FRC **Aztech II**, construida con **Next.js 15 + TypeScript + Tailwind CSS**.

Reutiliza la estética del *Technical Binder CANADA*: dark-mode first, paleta morada Aztech II (`#8f00ff` / `#a361ff`), glows, gradientes de marca y tipografía Space Grotesk / Inter.

## Desarrollo

```bash
npm install
npm run dev
```

Abre http://localhost:3000.

## Re-tematizar

Toda la identidad visual vive en las variables CSS de [`src/app/globals.css`](src/app/globals.css) (`:root`).
Cambia `--primary` y `--accent` para ajustar la marca; el resto del sitio se adapta solo.

## Estructura

- `src/app/layout.tsx` — fuentes, metadata, `<html>` dark.
- `src/app/page.tsx` — secciones de la landing (hero, nosotros, robot, logros, sponsors, contacto).
- `src/app/globals.css` — tokens de color, componentes (`.btn`, `.badge`, `.card`).
- `tailwind.config.ts` — mapeo de variables CSS a clases de Tailwind.
