# Pallavi Wagh — Portfolio (v5)

Editorial portfolio inspired by Pradnya Mohite's Framer site. Built with Next.js 15.3.6, Tailwind CSS, and Framer Motion.

---

## Quick start

```bash
# 1. Install
npm install

# 2. Add your fonts (see below)

# 3. Develop
npm run dev        # → http://localhost:3000

# 4. Build for production
npm run build
npm run start
```

---

## Font setup — PP Neue York

Place your OTF files inside `public/fonts/` with these exact filenames:

```
public/
  fonts/
    PPNeueYork-Regular.otf
    PPNeueYork-Medium.otf
```

The `@font-face` rules in `src/app/globals.css` already point to these paths.  
If your files are named differently, update the `src:` lines in `globals.css`.

**Fallback:** If the font files aren't present, the site falls back to Georgia serif — everything still looks good, just without PP Neue York's specific character.

---

## Multilingual name animation

The navbar logo cycles through "Pallavi" in 7 languages with a smooth fade:

| Language   | Text     |
|------------|----------|
| English    | Pallavi  |
| Marathi    | पल्लवी    |
| Spanish    | Pallavi  |
| German     | Pallavi  |
| French     | Pallavi  |
| Portuguese | Pallavi  |
| Russian    | Паллави  |

To edit the cycle, open `src/components/Navbar.tsx` and update `NAME_VARIANTS`.

---

## Design system

All colors are CSS variables defined in `src/app/globals.css`:

| Token        | Light           | Dark            | Usage                    |
|--------------|-----------------|-----------------|--------------------------|
| `--ink`      | `#0a0a0a`       | `#f0ece4`       | Primary text             |
| `--ink-2`    | `#1c1c1c`       | `#d4cfc5`       | Secondary text           |
| `--paper`    | `#f5f3ef`       | `#111010`       | Page background          |
| `--paper-2`  | `#edeae3`       | `#1a1917`       | Section backgrounds      |
| `--muted`    | `#6b6560`       | `#8a857e`       | Subdued text             |
| `--border`   | `#dcd9d3`       | `#2a2826`       | Borders, dividers        |
| `--accent`   | `#c8a96e`       | `#c8a96e`       | Warm gold — highlights   |
| `--accent-h` | `#b8924f`       | `#e0c080`       | Hover state for accent   |

---

## Content

All editable content lives in one place:

```
src/lib/data.ts
```

Update projects, experience, skills, books, social links, and resume URL here.

---

## Deploy to Vercel

```bash
git add .
git commit -m "redesign: editorial layout v5"
git push
```

Vercel auto-deploys from `master`. No additional config needed.

---

## File map

```
src/
  app/
    page.tsx              ← Home (server component)
    about/page.tsx        ← About (server component)
    work/
      page.tsx            ← Work listing (server component)
      [slug]/
        page.tsx          ← Case study shell (server, awaits params)
        CaseStudyClient.tsx ← Case study UI (client component)
    layout.tsx            ← Root layout, metadata, fonts
    globals.css           ← Design tokens, @font-face, animations
    sitemap.ts            ← Auto-generated sitemap
    not-found.tsx         ← 404 page
    loading.tsx           ← Page loading state
  components/
    Navbar.tsx            ← Navigation + multilingual name cycle
    Footer.tsx            ← Footer with CTA + links list
    HomeClient.tsx        ← Scroll reveal for home (client)
    WorkGrid.tsx          ← Filterable project list (client)
    ContactForm.tsx       ← Accessible contact form (client)
    ThemeProvider.tsx     ← Dark/light mode context (client)
  lib/
    data.ts               ← All content data + TypeScript types
    utils.ts              ← cn() class helper
public/
  fonts/                  ← Place PP Neue York OTF files here
  robots.txt              ← Search engine directives
```
