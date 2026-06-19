/**
 * Build absolute, base-aware URLs for internal links and public assets.
 *
 * GitHub Pages "project page" hosting serves the site from a sub-path
 * (e.g. `/portfolio-cv/`). Astro exposes that prefix as `import.meta.env.BASE_URL`
 * (driven by `base` in astro.config.mjs). Astro automatically prefixes the assets
 * it manages (CSS, optimized images), but hand-written links to `/public` files
 * and to other pages must be prefixed too — that's what this helper is for.
 *
 * Examples (BASE_URL = "/portfolio-cv/"):
 *   withBase()                 -> "/portfolio-cv/"
 *   withBase("es/")            -> "/portfolio-cv/es/"
 *   withBase("/favicon.svg")   -> "/portfolio-cv/favicon.svg"
 *
 * With BASE_URL = "/" the same calls return "/", "/es/", "/favicon.svg".
 */
const BASE = import.meta.env.BASE_URL; // always begins and ends with "/"

export function withBase(path = ""): string {
  return `${BASE}${path.replace(/^\//, "")}`.replace(/\/{2,}/g, "/");
}
