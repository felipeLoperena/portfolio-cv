# Luis Felipe Cortés — Portfolio & Online CV

A fast, accessible, SEO-friendly personal portfolio and online CV built with
[Astro](https://astro.build) and TypeScript. Static, bilingual (English /
Spanish), and zero-JavaScript by default (a tiny progressive-enhancement script
only powers the mobile menu).

## ✨ Features

- **Bilingual** — English (`/`) and Spanish (`/es/`) with a language toggle and
  `hreflang` alternates.
- **Strong, responsive hero** with an optimized profile photo (AVIF/WebP,
  responsive `srcset` generated at build time).
- Sections: Hero · About · Technical skills · Experience timeline · Projects ·
  Education & certifications · Contact.
- **SEO**: per-page meta, Open Graph, Twitter cards, JSON-LD `Person` schema,
  `sitemap-index.xml`, `robots.txt`, canonical + `hreflang` links.
- **Accessible**: semantic landmarks, skip link, visible focus states, keyboard
  friendly nav, respectful of `prefers-reduced-motion`, AA-contrast palette.
- **Maintainable**: all content lives in one typed file — `src/data/profile.ts`.

## 🧰 Tech stack

| Concern        | Choice                                  |
| -------------- | --------------------------------------- |
| Framework      | Astro 5 (static output)                 |
| Language       | TypeScript                              |
| Styling        | Hand-written CSS + design tokens        |
| Images         | `astro:assets` (sharp) — AVIF/WebP      |
| SEO            | `@astrojs/sitemap`, JSON-LD, OG/Twitter |

## 🚀 Run locally

Requires **Node.js 18.20+, 20.3+, or 22+**.

```bash
npm install      # install dependencies
npm run dev      # start the dev server → http://localhost:4321/portfolio-cv/
```

> The site is configured with a `base` of `/portfolio-cv/` for GitHub Pages, so
> the dev server serves it under that path (the root `/` will 404). If you deploy
> to a custom domain or user page, set `BASE = "/"` in `astro.config.mjs` and the
> dev URL becomes `http://localhost:4321/`.

Other scripts:

```bash
npm run build    # production build into dist/
npm run preview  # preview the production build locally
```

## ✏️ Editing the content

Almost everything you'll want to change is in **`src/data/profile.ts`**
(personal info, skills, experience, projects, education, contact). UI labels and
section titles are in **`src/data/i18n.ts`**. Both files hold English + Spanish
side by side.

Look for items marked **`EDITABLE`** / **`TODO`** — these are placeholders to
fill in. In particular, before publishing:

1. **`src/data/profile.ts → contact`** — set your real `linkedin` and `github`
   URLs (they default to `"#"` placeholders shown as _Editable_ in the UI).
2. **Projects** — the three project cards are clearly marked _Editable_; replace
   the copy with real write-ups (no clients/confidential details).
3. **`astro.config.mjs → SITE` / `BASE`** and **`public/robots.txt`** — set your
   real GitHub username / repo (drives canonical URLs, the sitemap, hreflang,
   Open Graph and every internal link). See _Deploy_ below.

### Replacing the photo or CV

- **Photo**: replace `src/assets/profile-photo.jpg`. Astro re-optimizes it
  automatically — no manual resizing needed.
- **CV PDF**: replace `public/Luis-Felipe-Cortes-CV.pdf` (the "Download CV"
  buttons link to it; update `contact.cvUrl` if you rename the file).

## 📦 Deploy to GitHub Pages

A GitHub Actions workflow (`.github/workflows/deploy.yml`) builds and publishes
the site automatically on every push to `main`. It's preconfigured for a
**project page** at `https://<username>.github.io/portfolio-cv/`.

**One-time setup:**

1. **Set your account** in `astro.config.mjs`:
   ```js
   const SITE = "https://<your-username>.github.io"; // your GitHub username
   const BASE = "/portfolio-cv/";                    // your repo name
   ```
   Also update the `Sitemap:` line in `public/robots.txt` to the matching URL.
2. **Push** the project to a GitHub repo named `portfolio-cv` (the repo name must
   match `BASE`), on the `main` branch.
3. In the repo, go to **Settings → Pages → Build and deployment** and set
   **Source: GitHub Actions**.
4. Push to `main` (or run the workflow manually from the **Actions** tab). The
   site goes live at `https://<your-username>.github.io/portfolio-cv/`.

**Other hosting targets** (Netlify, Vercel, Cloudflare Pages, or a GitHub user
page / custom domain): set `BASE = "/"` in `astro.config.mjs`, then build with
`npm run build` and serve the `dist/` directory. For a custom domain, also add a
`public/CNAME` file containing your domain.

> `public/.nojekyll` is included so GitHub Pages serves Astro's `_astro/` assets
> (Jekyll would otherwise skip underscore-prefixed folders).

## 🔒 Accuracy & privacy

All content is drawn from the provided CV and LinkedIn profile — no invented
experience, employers, metrics or skills. Location is shown at city/country
level only; no full address is published.
