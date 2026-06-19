/**
 * UI strings (section titles, button labels, etc.) in both languages.
 * Content data lives in `profile.ts`; this file is only chrome/labels.
 */
import type { Locale } from "./profile";

export const ui = {
  nav: {
    about: { en: "About", es: "Perfil" },
    skills: { en: "Skills", es: "Habilidades" },
    experience: { en: "Experience", es: "Experiencia" },
    projects: { en: "Projects", es: "Proyectos" },
    education: { en: "Education", es: "Educación" },
    contact: { en: "Contact", es: "Contacto" },
  },
  hero: {
    contact: { en: "Contact me", es: "Contáctame" },
    viewExperience: { en: "View experience", es: "Ver experiencia" },
    downloadCv: { en: "Download CV", es: "Descargar CV" },
    available: {
      en: "Open to backend opportunities",
      es: "Abierto a oportunidades backend",
    },
  },
  sections: {
    about: { en: "About me", es: "Sobre mí" },
    skills: { en: "Technical skills", es: "Habilidades técnicas" },
    experience: { en: "Experience", es: "Experiencia" },
    projects: { en: "Projects", es: "Proyectos" },
    education: {
      en: "Education & certifications",
      es: "Educación y certificaciones",
    },
    contact: { en: "Get in touch", es: "Hablemos" },
  },
  sectionLead: {
    skills: {
      en: "Tools and practices I work with day to day.",
      es: "Herramientas y prácticas con las que trabajo a diario.",
    },
    projects: {
      en: "Selected work derived from real responsibilities. Cards marked “editable” are placeholders to expand.",
      es: "Trabajo seleccionado a partir de responsabilidades reales. Las tarjetas marcadas como “editable” son plantillas por ampliar.",
    },
    contact: {
      en: "I'm happy to talk about backend roles, collaborations or technical questions.",
      es: "Con gusto conversamos sobre roles backend, colaboraciones o preguntas técnicas.",
    },
  },
  labels: {
    education: { en: "Education", es: "Educación" },
    certifications: { en: "Certifications", es: "Certificaciones" },
    languages: { en: "Languages", es: "Idiomas" },
    technologies: { en: "Technologies", es: "Tecnologías" },
    editable: { en: "Editable", es: "Editable" },
    email: { en: "Email", es: "Correo" },
    phone: { en: "Phone", es: "Teléfono" },
    location: { en: "Location", es: "Ubicación" },
    viewProject: { en: "View project", es: "Ver proyecto" },
    present: { en: "Present", es: "Actualidad" },
    switchLang: { en: "Español", es: "English" },
  },
  footer: {
    builtWith: {
      en: "Built with Astro. Content is honest and based on my CV.",
      es: "Hecho con Astro. El contenido es honesto y se basa en mi CV.",
    },
    rights: { en: "All rights reserved.", es: "Todos los derechos reservados." },
  },
  meta: {
    title: {
      en: "Luis Felipe Cortés — Backend Java Developer",
      es: "Luis Felipe Cortés — Desarrollador Backend Java",
    },
    description: {
      en: "Backend Java developer specializing in Spring Boot and microservices. I modernize systems, build reliable services and optimize data processes for a major financial group.",
      es: "Desarrollador backend Java especializado en Spring Boot y microservicios. Modernizo sistemas, construyo servicios confiables y optimizo procesos de datos para un grupo financiero importante.",
    },
  },
} as const;

/** Helper to read a localized UI string. */
export function t(entry: Record<Locale, string>, locale: Locale): string {
  return entry[locale];
}
