# Astro Portfolio Forge

A configurable static portfolio template built with Astro, Tailwind CSS, Markdown content collections, Decap CMS, and build-time GitHub project data.

## Features

- Astro static output, no server-side rendering
- Tailwind 4 through the official Vite plugin
- Central non-developer configuration in `src/config.ts`
- `/insights` writing system powered by Astro Content Collections
- Decap CMS admin at `/admin`
- Featured GitHub repositories fetched at build time
- SEO component, sitemap, and RSS feed
- GitHub Pages deployment workflow

## Quick Start

```bash
npm install
npm run dev
```

Update these files first:

- `src/config.ts` for name, bio, links, featured repos, template badge, and SEO defaults
- `astro.config.mjs` for `site` and `base`
- `src/config.ts` -> `themeConfig.colors.accent` for link color
- `public/admin/config.yml` for the GitHub repository and CMS auth provider
- `public/robots.txt` for the production sitemap URL

## Content

Blog posts live in `src/content/blog/*.md`.

Each post uses this frontmatter:

```yaml
---
title: "Post title"
description: "Short post summary."
publishDate: 2026-07-13
tags:
  - Astro
heroImage: /uploads/example.jpg
---
```

Reading time is calculated at build time.

## Decap CMS on GitHub Pages

GitHub Pages is static, so Decap CMS needs an external OAuth authenticator for GitHub commits.

1. Create a GitHub OAuth App.
2. Set the Homepage URL to your published site, for example `https://your-github-username.github.io`.
3. Set the Authorization callback URL to your authenticator callback URL.
4. Deploy or configure a GitHub OAuth proxy such as `decap-cms-oauth-provider-node`, Cloudflare Workers, Vercel, Netlify, or another trusted provider.
5. Set `backend.repo`, `backend.branch`, and `backend.base_url` in `public/admin/config.yml`.

The CMS collection fields match the Astro schema exactly: `title`, `description`, `publishDate`, `tags`, `heroImage`, and `body`.

### Local CMS Editing

For local editing, run Astro and the Decap local backend in two terminals:

```bash
npm run dev
npx decap-server
```

Then open:

```text
http://localhost:4321/admin/
```

The `local_backend: true` setting in `public/admin/config.yml` lets Decap use the local proxy during development. Production still uses the GitHub backend.

## GitHub Projects

The Projects page fetches public repositories from:

```text
https://api.github.com/users/{username}/repos?sort=updated
```

Only repositories listed in `siteConfig.featuredRepos` are rendered. If GitHub rate-limits or the network fails, the page renders `projectConfig.fallbackProjects` so the build can still complete.

## GitHub Pages

This template includes `.github/workflows/deploy.yml`.

In your repository settings:

1. Go to Settings -> Pages.
2. Set Source to GitHub Actions.
3. Push to `main`.

For a user site such as `https://username.github.io`, keep:

```js
site: "https://username.github.io",
base: "/",
```

For a project page such as `https://username.github.io/template-portfolio`, use:

```js
site: "https://username.github.io",
base: "/template-portfolio",
```

This repository uses environment variables in `astro.config.mjs`, so the workflow can deploy this template demo at `/astro-portfolio-forge/` while consumers can still use `/` for a user site.

## Analytics

Analytics are intentionally not included. Add your preferred static analytics or data workflow in `src/data/analytics.json` when you need it.
