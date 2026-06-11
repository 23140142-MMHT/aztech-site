/**
 * ┌─────────────────────────────────────────────────────────────────────┐
 * │  CONTENIDO DEL SITIO AZTECH II — carta de presentación del equipo     │
 * │  Datos extraídos del portafolio/manual (FTC 17626). SIN robot:        │
 * │  la parte técnica/robot vive en el Technical Binder (solo enlazada).  │
 * └─────────────────────────────────────────────────────────────────────┘
 */

/** Technical Binder (documentación técnica/robot). Solo se enlaza, no se describe aquí. */
export const TECHNICAL_BINDER_URL = "https://purple-technical-17626.vercel.app";

export const team = {
  number: 17626,
  name: "Aztech II",
  program: "FIRST Tech Challenge",
  founded: 2019,
  location: "Ciudad de México, MX",
  tagline: "Tecnología accesible como herramienta de cambio social.",
  intro:
    "Somos Aztech II, equipo 17626 de FIRST Tech Challenge en México, apasionados por la innovación, la inclusión y el uso con propósito de la tecnología.",
  email: "17626.aztech2@gmail.com",
  instagram: "https://www.instagram.com/aztech_2_17626/",
  tiktok: "https://www.tiktok.com/@aztech_ll_17626",
} as const;

/** Stats de impacto (de la temporada — Season Impact Report). */
export const stats = [
  { value: "2019", label: "Año de fundación" },
  { value: "+3,360", label: "Personas alcanzadas" },
  { value: "8,472", label: "Árboles plantados" },
  { value: "200 t", label: "CO₂ compensado" },
] as const;

/** Misión, visión y propósito (identidad del equipo). */
export const identity = {
  mission:
    "Formar líderes integrales en robótica, ingeniería y trabajo en equipo, capaces de desarrollar soluciones innovadoras y proyectos sociales de alto impacto que atiendan problemas reales de nuestra comunidad.",
  vision:
    "Lograrlo a través de un modelo de formación integral basado en FIRST y STEAM, que promueve la excelencia técnica, la innovación constante, el trabajo colaborativo y el compromiso social, inspirando a más jóvenes a transformar su entorno mediante la ciencia y la tecnología.",
  purpose:
    "Porque creemos en el poder de la robótica y la educación como herramientas para transformar vidas, derribar barreras y generar un cambio positivo, sostenible y significativo en la sociedad.",
} as const;

/** Por qué somos embajadores FIRST. */
export const ambassadors = {
  text: "Llevamos los valores de FIRST más allá de la competencia: promovemos la colaboración, la inclusión, el impacto social y el aprendizaje continuo en cada proyecto e iniciativa, dentro y fuera de la comunidad.",
  programs: ["FIRST Ambassadors", "FIRST Like a Girl", "FIRST Menstrual Equality"],
} as const;

/** Historia y trayectoria por temporadas FIRST. */
export const history = {
  blurb:
    "Aztech II surgió en 2019 dentro del programa FIRST Tech Challenge con la meta de formar jóvenes líderes capaces de transformar su entorno. Desde entonces operamos bajo una filosofía de crecimiento constante, colaboración y aprendizaje continuo.",
  seasons: [
    "Ultimate Goal",
    "Freight Frenzy",
    "Power Play",
    "Center Stage",
    "Into the Deep",
    "Decode (2026)",
  ],
};

/** Logros destacados. */
export const achievements = [
  { name: "Inspire Award", note: "El máximo reconocimiento de FTC" },
  { name: "Think Award", note: "Obtenido en dos ocasiones" },
];

/** Lo que nos distingue como equipo. */
export const distinctives = [
  {
    title: "Inclusión",
    body: "Integramos a personas de orígenes diversos —niñas y niños, adolescentes, mujeres, migrantes y personas con discapacidad o en rehabilitación— dándoles la oportunidad de desarrollarse en STEM a través de la robótica.",
  },
  {
    title: "Mujeres en STEM",
    body: "Adoptamos el morado como color insignia, reflejando nuestro compromiso de inspirar a niñas y mujeres a seguir carreras en campos STEM.",
  },
  {
    title: "Cambio social",
    body: "Creemos que la tecnología debe ser accesible para todas las personas y usarse como herramienta de cambio social, no solo como un fin técnico en sí mismo.",
  },
];

/** Estructura del equipo (organigrama). */
export const structure = {
  leads: [
    { name: "Jhonathan Tenorio", role: "Coordinator" },
    { name: "Santiago García García", role: "Head Coach" },
    { name: "Uriel Rayna Estrada", role: "Coach" },
  ],
  businessMentors: ["Ahtziri", "Regina", "Ana"],
  engineeringMentors: ["Many", "Diego Yael", "Dany"],
  memberCount: 8,
};

/**
 * PILARES DE PROYECTOS (Our Projects) — TODO lo no-robot.
 * Las fotos van en public/projects/<archivo>; mientras tanto se ven marcos
 * "Foto próximamente" (sácalas de tu portafolio).
 */
export type Pillar = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  points: string[];
  metrics?: { value: string; label: string }[];
  photos?: { src: string; caption: string }[];
};

export const pillars: Pillar[] = [
  {
    id: "outreach",
    title: "Outreach & STEAM",
    tagline: "Acercamos la ciencia y la tecnología a más jóvenes",
    description:
      "Llevamos talleres, mentorías y actividades prácticas a escuelas y organizaciones, ampliando el acceso a STEAM en comunidades poco atendidas.",
    points: [
      "Talleres y sesiones de mentoría con actividades prácticas",
      "Colaboración con escuelas y organizaciones especializadas",
      "Metas de alcance y participación documentadas con evidencia y testimonios",
    ],
    metrics: [
      { value: "8", label: "Instituciones aliadas" },
      { value: "19", label: "Talleres impartidos" },
      { value: "331", label: "Niñas y niños formados" },
      { value: "+3,360", label: "Personas alcanzadas" },
    ],
    photos: [
      { src: "/projects/outreach-1.jpg", caption: "Taller en comunidad" },
      { src: "/projects/outreach-2.jpg", caption: "Mentoría STEAM" },
    ],
  },
  {
    id: "inclusion",
    title: "Inclusión & Diversidad",
    tagline: "Tecnología accesible para todas las personas",
    description:
      "Creamos espacios inclusivos para niñas y mujeres, migrantes y personas con discapacidad o en rehabilitación, derribando barreras para entrar a STEM.",
    points: [
      "Espacios inclusivos para personas con discapacidad",
      "Impulso a niñas y mujeres en carreras STEM",
      "Embajadores FIRST: Like a Girl y Menstrual Equality",
    ],
    photos: [
      { src: "/projects/inclusion-1.jpg", caption: "Niñas en robótica" },
    ],
  },
  {
    id: "environment",
    title: "Sustentabilidad & Medio Ambiente",
    tagline: "Robótica con conciencia del planeta",
    description:
      "Usamos la robótica para generar conciencia social sobre la reducción de la huella de carbono y llevamos a cabo iniciativas ambientales concretas.",
    points: [
      "Concientización sobre reducción de huella de carbono",
      "Eventos de reforestación comunitaria",
      "Prácticas de reutilización y reducción de residuos",
    ],
    metrics: [
      { value: "8,472", label: "Árboles plantados" },
      { value: "200 t", label: "CO₂ compensado" },
      { value: "1", label: "Evento de reforestación" },
    ],
    photos: [
      { src: "/projects/environment-1.jpg", caption: "Reforestación" },
    ],
  },
  {
    id: "leadership",
    title: "Liderazgo & Formación",
    tagline: "El Aztech Warrior Cycle: FTC → FRC → Mentores",
    description:
      "Formamos agentes de cambio mediante un modelo progresivo: cada integrante crece técnica y personalmente hasta regresar como mentor de nuevas generaciones.",
    points: [
      "Inducción, rotación de áreas y crecimiento técnico y personal",
      "Integración a proyectos reales y roles de liderazgo",
      "Ciclo FTC → FRC → Mentores / FIRST Alumni",
    ],
    photos: [
      { src: "/projects/leadership-1.jpg", caption: "Equipo en acción" },
    ],
  },
  {
    id: "business",
    title: "Negocios & Sustentabilidad financiera",
    tagline: "Lo que hace posible cada temporada",
    description:
      "Nuestro plan financiero combina el apoyo de patrocinadores con el esfuerzo interno de fundraising, sosteniendo al equipo durante toda la temporada.",
    points: [
      "Relación recíproca con patrocinadores (p. ej. Ensamblika Summer Camps)",
      "Fundraising: venta de donas, chocolates y rosas",
      "Propuestas profesionales y seguimiento a empresas aliadas",
    ],
    metrics: [
      { value: "$27,000", label: "MXN en fundraising" },
      { value: "$110,000", label: "MXN en patrocinios" },
      { value: "7", label: "Patrocinadores" },
    ],
    photos: [
      { src: "/projects/business-1.jpg", caption: "Actividad de fundraising" },
    ],
  },
];

/** Patrocinadores reales (orden: fila de 4 + fila de 3 centrada). */
export const sponsors = [
  { name: "Grupo Salinas", logo: "/sponsors/grupo-salinas.png" },
  { name: "Fundación Azteca", logo: "/sponsors/fundacion-azteca.png" },
  { name: "Plantel Azteca", logo: "/sponsors/plantel-azteca.png" },
  { name: "Grupo Elektra", logo: "/sponsors/grupo-elektra.png" },
  { name: "Banco Azteca", logo: "/sponsors/banco-azteca.png" },
  { name: "Italika", logo: "/sponsors/italika.png" },
  { name: "Grupo Tierton", logo: "/sponsors/grupo-tierton.png" },
];
