# Repository Guidelines

## Project Structure & Module Organization

This is a Next.js 16 portfolio built with the App Router, React 19, TypeScript, and Tailwind CSS 4.

- `src/app/` contains routes, layouts, and global styles. Dynamic demo pages live under `src/app/projects/[slug]/demo/`.
- `src/components/` contains reusable UI components; keep client-only state in files marked with `"use client"`.
- `src/lib/site-data.ts` is the central source for navigation, project, certificate, and contact content.
- `public/` contains deployed PDFs, posters, videos, and the favicon. Raw demo footage belongs in `assets/demo-sources/`.
- `.github/workflows/nextjs.yml` builds and deploys the static export to GitHub Pages from `master`.

## Build, Test, and Development Commands

- `npm ci`: install the exact dependencies recorded in `package-lock.json`.
- `npm run dev`: start the development server at `http://localhost:3000`.
- `npm run build`: run the production build and TypeScript validation.
- `npm start`: serve a completed non-static production build locally.
- `GITHUB_PAGES=true npm run build`: reproduce the CI static export in `out/`. Set `NEXT_PUBLIC_BASE_PATH` when testing a repository subpath.

## Coding Style & Naming Conventions

Use strict TypeScript, two-space indentation, double quotes, semicolons, and the existing `@/*` import alias. Name React components and exported types in PascalCase, functions and data in camelCase, and files/routes in kebab-case. Follow the existing App Router conventions (`page.tsx`, `layout.tsx`). Prefer Tailwind utilities in components; add reusable theme rules and CSS variables to `src/app/globals.css`. Preserve accessibility attributes, visible focus states, and `lang="zh-CN"` on Chinese copy.

## Testing Guidelines

No automated test framework or coverage threshold is currently configured. Treat `npm run build` as the required pre-commit check. Manually verify changed routes at mobile and desktop widths, keyboard interaction, external links, base-path navigation, PDFs, posters, and video playback. If tests are introduced, colocate them as `*.test.ts` or `*.test.tsx` near the code under test and add the runner to `package.json`.

## Commit & Pull Request Guidelines

Recent commits use short, outcome-focused Chinese subjects (for example, `项目描述微调`) and scoped maintenance messages such as `chore: sync public resume`. Keep each commit focused and use the same concise style. Pull requests should explain the user-visible change, list validation performed, link related issues, and include before/after screenshots for visual changes. Call out new or replaced binary assets and confirm `npm run build` passes.
