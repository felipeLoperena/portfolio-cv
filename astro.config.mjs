// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// ─── GitHub Pages settings ──────────────────────────────────────────────────
// EDITABLE: set these two values for your account, then everything else
// (canonical URLs, sitemap, hreflang, asset paths, internal links) follows.
//
//  Project page  →  SITE = "https://<username>.github.io", BASE = "/portfolio-cv/"
//  User page     →  SITE = "https://<username>.github.io", BASE = "/"
//  Custom domain →  SITE = "https://your-domain.com",       BASE = "/"
//
// Currently configured for a PROJECT PAGE at <username>.github.io/portfolio-cv.
const SITE = "https://USERNAME.github.io"; // EDITABLE: your GitHub username
const BASE = "/portfolio-cv/"; // EDITABLE: repo name (project page) or "/" otherwise
// ─────────────────────────────────────────────────────────────────────────────

// https://astro.build/config
export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: "always",
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en-US",
          es: "es-MX",
        },
      },
    }),
  ],
  image: {
    // Generated responsive formats are handled per-image in components.
    responsiveStyles: true,
  },
});
