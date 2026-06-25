/**
 * Single source of truth for all site content.
 *
 * Everything a recruiter reads lives here — edit this file to update the site,
 * no need to touch the layout or components.
 *
 * Anything marked `EDITABLE` / `TODO` is a placeholder you should review.
 * All facts below are drawn from the provided CV and LinkedIn profile; nothing
 * has been invented.
 */

export type Locale = "en" | "es";

/** A value that exists in both supported languages. */
export type Localized<T = string> = Record<Locale, T>;

export interface SkillGroup {
  /** Stable id used for keys / anchors. */
  id: string;
  title: Localized;
  skills: string[];
}

export interface ExperienceItem {
  company: string;
  /** City / country only — never a full address. */
  location: Localized;
  role: Localized;
  /** Human-readable period, e.g. "Aug 2023 — Present". */
  period: Localized;
  /** Machine dates for structured data (ISO yyyy-mm, or "present"). */
  startDate: string;
  endDate: string;
  summary: Localized;
  highlights: Localized<string[]>;
  tech: string[];
}

export interface ProjectItem {
  id: string;
  title: Localized;
  description: Localized;
  tech: string[];
  /** Placeholder cards are clearly flagged in the UI so they are easy to find. */
  placeholder: boolean;
  /** EDITABLE: add a real URL to show a "View" link, or leave null to hide it. */
  url: string | null;
}

export interface EducationItem {
  institution: string;
  credential: Localized;
  period: Localized;
}

export interface CertificationItem {
  title: Localized;
  issuer: Localized;
}

/* -------------------------------------------------------------------------- */
/*  Identity                                                                   */
/* -------------------------------------------------------------------------- */

export const person = {
  name: "Luis Felipe Cortés Loperena",
  /** Short name used in nav / footer. */
  shortName: "Luis Cortés",
  headline: {
    en: "Backend Java Developer",
    es: "Desarrollador Backend Java",
  } satisfies Localized,
  /** Short tagline shown under the name in the hero. */
  tagline: {
    en: "Java · Spring Boot · Microservices",
    es: "Java · Spring Boot · Microservicios",
  } satisfies Localized,
  pitch: {
    en: "I design, build and maintain reliable backend systems. At a major financial group I help modernize monoliths into Spring Boot microservices and keep critical reporting and billing services running.",
    es: "Diseño, desarrollo y mantengo sistemas backend confiables. En un grupo financiero importante ayudo a modernizar monolitos hacia microservicios con Spring Boot y a mantener servicios críticos de reportería y facturación.",
  } satisfies Localized,
  // City / country level only, per privacy requirements.
  location: {
    en: "Mexico City, Mexico",
    es: "Ciudad de México, México",
  } satisfies Localized,
} as const;

/* -------------------------------------------------------------------------- */
/*  About                                                                       */
/* -------------------------------------------------------------------------- */

export const about = {
  paragraphs: {
    en: [
      "I'm a Java developer focused on backend systems — analysis, design, development and maintenance. I care about writing clean, maintainable code and applying good engineering practices so the systems I work on stay efficient and scalable.",
      "I'm currently a Systems Analyst at Seguros Inbursa (Grupo Financiero Inbursa), where I take part in technology-modernization projects: migrating monolithic applications toward microservices, building regulatory reports and billing systems, and optimizing data processes. Before that, I built my foundations as a Java developer at Juswho.",
      "I'm motivated by continuous learning, teamwork and active listening to make solid technical decisions.",
    ],
    es: [
      "Soy desarrollador Java enfocado en sistemas backend: análisis, diseño, desarrollo y mantenimiento. Me importa escribir código limpio y mantenible, y aplicar buenas prácticas de ingeniería para que los sistemas se mantengan eficientes y escalables.",
      "Actualmente soy Analista de Sistemas en Seguros Inbursa (Grupo Financiero Inbursa), donde participo en proyectos de modernización tecnológica: migración de aplicaciones monolíticas hacia microservicios, desarrollo de reportes regulatorios y sistemas de facturación, y optimización de procesos de datos. Antes, construí mis bases como desarrollador Java en Juswho.",
      "Me motivan el aprendizaje continuo, el trabajo en equipo y la escucha activa para tomar decisiones técnicas sólidas.",
    ],
  } satisfies Localized<string[]>,
} as const;

/* -------------------------------------------------------------------------- */
/*  Skills  (only categories with real, sourced skills — no invented frontend) */
/* -------------------------------------------------------------------------- */

export const skillGroups: SkillGroup[] = [
  {
    id: "backend",
    title: { en: "Backend", es: "Backend" },
    skills: [
      "Java 8",
      "Spring Framework",
      "Spring Boot",
      "Spring Batch",
      "Maven",
      "REST APIs",
    ],
  },
  {
    id: "databases",
    title: { en: "Databases & data", es: "Bases de datos y datos" },
    skills: ["Oracle", "MySQL", "SQL", "Stored procedures", "Pentaho (ETL)"],
  },
  {
    id: "architecture",
    title: {
      en: "Architecture & practices",
      es: "Arquitectura y prácticas",
    },
    skills: [
      "Microservices",
      "Monolith decomposition",
      "Clean code",
      "Code reviews (SonarQube)",
      "Scrum / Agile",
    ],
  },
  {
    id: "tools",
    title: { en: "Tools", es: "Herramientas" },
    skills: [
      "Git / GitHub",
      "JIRA",
      "Postman",
      "WebLogic",
      "SonarQube",
      "Generative-AI tooling",
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*  Experience                                                                  */
/* -------------------------------------------------------------------------- */

export const experience: ExperienceItem[] = [
  {
    company: "Seguros Inbursa — Grupo Financiero Inbursa",
    location: { en: "Mexico City, Mexico", es: "Ciudad de México, México" },
    role: { en: "Systems Analyst", es: "Analista de Sistemas" },
    period: { en: "Aug 2023 — Present", es: "Ago 2023 — Actualidad" },
    startDate: "2023-08",
    endDate: "present",
    summary: {
      en: "Backend development within a major financial group, focused on technology modernization of the company's core systems.",
      es: "Desarrollo backend dentro de un grupo financiero importante, enfocado en la modernización tecnológica de los sistemas centrales de la compañía.",
    },
    highlights: {
      en: [
        "Help lead the migration of monolithic applications toward Spring Boot microservices, reducing coupling and easing the deployment of new features.",
        "Build regulatory reports and billing systems, implementing ETL processes with Pentaho.",
        "Reduced report-generation times by more than 40% through SQL query and stored-procedure optimization.",
        "Apply development best practices: code reviews with SonarQube, agile task management with Jira and Scrum.",
        "Collaborate with multidisciplinary teams to deliver stable, scalable technical solutions.",
      ],
      es: [
        "Apoyo en liderar la migración de aplicaciones monolíticas hacia microservicios con Spring Boot, reduciendo el acoplamiento y facilitando el despliegue de nuevas funcionalidades.",
        "Desarrollo de reportes regulatorios y sistemas de facturación, implementando procesos ETL con Pentaho.",
        "Reducción de los tiempos de generación de reportes en más del 40% mediante la optimización de consultas SQL y procedimientos almacenados.",
        "Aplicación de buenas prácticas de desarrollo: revisiones de código con SonarQube y gestión ágil de tareas con Jira y Scrum.",
        "Colaboración con equipos multidisciplinarios para entregar soluciones técnicas estables y escalables.",
      ],
    },
    tech: [
      "Java 8",
      "Spring Boot",
      "Spring Batch",
      "Maven",
      "Oracle",
      "Pentaho",
      "WebLogic",
      "SonarQube",
      "Jira",
    ],
  },
  {
    company: "Juswho Información S.A. de C.V.",
    location: { en: "Mexico", es: "México" },
    role: { en: "Java Developer", es: "Desarrollador Java" },
    period: { en: "2019 — 2022", es: "2019 — 2022" },
    startDate: "2019-02",
    endDate: "2022-06",
    summary: {
      en: "Strengthened my technical foundations and grew more autonomous in software development.",
      es: "Fortalecí mis bases técnicas y gané mayor autonomía en el desarrollo de software.",
    },
    highlights: {
      en: [
        "Developed and maintained software according to requirements and adjustments defined by the lead programmer.",
        "Took part in the analysis and design of program logic for new requirements.",
        "Implemented new features across software projects.",
        "Ran periodic code tests to ensure correct behavior, debugging when needed.",
        "Helped produce technical manuals and supporting documentation.",
      ],
      es: [
        "Desarrollo y mantenimiento de software de acuerdo con los requerimientos y ajustes definidos por el programador líder.",
        "Participación en el análisis y diseño de la lógica de programación para nuevos requerimientos.",
        "Implementación de nuevas funcionalidades en los proyectos de software.",
        "Ejecución de pruebas periódicas de código para asegurar el correcto funcionamiento, depurando cuando fue necesario.",
        "Apoyo en la elaboración de manuales técnicos y documentación de soporte.",
      ],
    },
    tech: ["Java", "Spring Framework", "Git", "Scrum"],
  },
];

/* -------------------------------------------------------------------------- */
/*  Projects                                                                    */
/*  These are EDITABLE placeholders derived from real responsibilities above.   */
/*  No companies, clients or confidential details are invented. Replace the     */
/*  copy with your own project write-ups when ready.                            */
/* -------------------------------------------------------------------------- */

export const projects: ProjectItem[] = [
  {
    id: "monolith-to-microservices",
    title: {
      en: "Monolith → Microservices migration",
      es: "Migración de monolito a microservicios",
    },
    description: {
      en: "Part of an ongoing modernization effort: decomposing a monolithic Java application into Spring Boot microservices to reduce coupling and speed up delivery. EDITABLE — add scope, your specific contribution and outcomes.",
      es: "Parte de un esfuerzo de modernización en curso: descomponer una aplicación monolítica en Java hacia microservicios con Spring Boot para reducir el acoplamiento y agilizar la entrega. EDITABLE — agrega alcance, tu contribución específica y resultados.",
    },
    tech: ["Java 8", "Spring Boot", "Maven", "Microservices"],
    placeholder: true,
    url: null,
  },
  {
    id: "regulatory-reporting",
    title: {
      en: "Regulatory reporting & ETL",
      es: "Reportería regulatoria y ETL",
    },
    description: {
      en: "Regulatory reports and billing data pipelines built with Pentaho ETL and optimized SQL — cutting report-generation time by over 40%. EDITABLE — add context and the volume/impact you can share publicly.",
      es: "Reportes regulatorios y flujos de datos de facturación construidos con ETL en Pentaho y SQL optimizado — reduciendo el tiempo de generación de reportes en más del 40%. EDITABLE — agrega contexto y el volumen/impacto que puedas compartir públicamente.",
    },
    tech: ["Pentaho", "SQL", "Oracle", "Spring Batch"],
    placeholder: true,
    url: null,
  },
  {
    id: "truman-pos",
    title: {
      en: "Truman POS — Point-of-sale system",
      es: "Truman POS — Sistema de punto de venta",
    },
    description: {
      en: "Full-stack point-of-sale built with Spring Boot, Thymeleaf and MySQL: in-browser cart and ticketing, inventory control, customer and supplier management, role-based auth (admin / cashier) and a metrics dashboard with daily and monthly charts. Includes a reporting module with date-range filters and CSV/PDF export.",
      es: "Punto de venta full-stack construido con Spring Boot, Thymeleaf y MySQL: caja con carrito en el navegador y tickets, control de inventario, gestión de clientes y proveedores, autenticación por roles (administrador / cajero) y un dashboard de métricas con gráficas diarias y mensuales. Incluye un módulo de reportes con filtros por rango de fechas y exportación a CSV/PDF.",
    },
    tech: ["Java 21", "Spring Boot", "MySQL", "Thymeleaf", "Chart.js", "Full-stack"],
    placeholder: false,
    url: "https://github.com/felipeLoperena/punto-venta",
  },
];

/* -------------------------------------------------------------------------- */
/*  Education & certifications                                                  */
/* -------------------------------------------------------------------------- */

export const education: EducationItem[] = [
  {
    institution: "Universidad Tecnológica de México (UNITEC)",
    credential: {
      en: "B.Eng. in Computer Systems Engineering (graduated, titled)",
      es: "Ingeniería en Sistemas Computacionales (titulado)",
    },
    period: { en: "", es: "" },
  },
];

export const certifications: CertificationItem[] = [
  {
    title: {
      en: "Generative AI productivity (certificate)",
      es: "Productividad con IA generativa (certificado)",
    },
    issuer: { en: "Microsoft & LinkedIn", es: "Microsoft y LinkedIn" },
  },
];

export const languages: { name: Localized; level: Localized }[] = [
  {
    name: { en: "Spanish", es: "Español" },
    level: { en: "Native", es: "Nativo" },
  },
  {
    name: { en: "English", es: "Inglés" },
    level: { en: "Intermediate (B1)", es: "Intermedio (B1)" },
  },
];

/* -------------------------------------------------------------------------- */
/*  Contact                                                                     */
/*  EDITABLE: fill in the real LinkedIn / GitHub URLs (none were in the source).*/
/* -------------------------------------------------------------------------- */

export const contact = {
  email: "lfelipe_gamez@hotmail.com",
  // Present in the CV and approved for public display.
  phone: "+52 55 2673 8948",
  phoneHref: "tel:+525526738948",
  // EDITABLE placeholders — replace "#" with your real profile URLs.
  linkedin: "https://www.linkedin.com/in/luis-felipe-cort%C3%A9s-loperena-64790a17b/", // e.g. https://www.linkedin.com/in/your-handle
  github: "https://github.com/felipeLoperena", // e.g. https://github.com/your-handle
  // Served from /public — see public/Luis-Felipe-Cortes-CV.pdf
  cvUrl: "/Luis-Felipe-Cortes-CV.pdf",
} as const;
