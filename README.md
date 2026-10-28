# Soufiane Mouzakki · Portfolio

A responsive Next.js portfolio with an original violet visual identity, server-rendered content, selective Motion animation, and accessible navigation.

## Run locally

Requires Node.js 20.9+ and pnpm (the package manager version is pinned in package.json).

```sh
pnpm install
pnpm dev
```

Open http://localhost:3000. For production: `pnpm build` then `pnpm start`.

## Edit content

- `src/data/profile.ts`: identity, email, verified social links, optional CV.
- `src/data/content.ts`: introduction, about, work, and contact copy.
- `src/data/experience.ts`: professional timeline.
- `src/data/skills.ts`: expertise and technology groups.
- `src/data/education.ts`: education.
- `src/data/projects.ts`: verified public projects and full case studies.

Projects start empty intentionally. The homepage shows an honest message about private professional work. Add only publicly shareable projects, with original screenshots under `public/images/`. Project pages are automatically available at `/projects/[slug]`; unknown slugs return 404. Local image paths are recommended; remote images require an explicit Next.js image host allowlist.

## Before publishing

- Supply a real CV PDF under `public/cv/`, then set `profile.cv` to its public path. The download action is hidden while the value is null.
- Set `NEXT_PUBLIC_SITE_URL` to the real HTTPS domain before building, using `.env.example` as a guide. Canonical URLs and the sitemap use that value. Without it, no domain is invented and the sitemap is empty.
- Add verified public projects when available. No sample projects or employer assets are published.
- Check the built site on the deployment host. Publishing is a separate step.

The contact section uses real mailto, LinkedIn, and GitHub links; there is no backend or form. Content is in English. The footer year is generated during rendering; static deployments should rebuild annually.

## Checks

```sh
pnpm lint
pnpm typecheck
pnpm build
pnpm exec playwright install chromium
pnpm test:e2e
```

Browser tests use the production build on port 3005. They cover 320/390/768/1024/1440px, overflow, WCAG automated checks, dialog focus and Escape handling, navigation, missing projects, and server-rendered content without JavaScript. Screenshots are written to `test-results/` and excluded from Git.

## Structure

`src/app` contains routes and metadata. `src/components` contains layout, homepage sections, shared primitives, project cards, and animation boundaries. `src/data` contains typed editable content. `src/app/globals.css` contains the design tokens, original CSS artwork, and responsive styles. Tests live in `tests/`.
