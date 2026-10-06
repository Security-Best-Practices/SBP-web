# Security Best Practices, Inc. Website

Source for [www.securitybestpractices.com](https://www.securitybestpractices.com). The site is built with [Eleventy](https://www.11ty.dev/) and hosted on Firebase Hosting (project `sbp-web`).

## How it deploys

- **Pull request:** GitHub Actions builds the site and posts a temporary Firebase preview URL on the PR.
- **Merge to `main`:** GitHub Actions builds and deploys to the live site.

No manual `firebase deploy` is needed.

## Local development

```bash
npm install
npm start          # http://localhost:8080 (published posts only)
npm run drafts     # same, but also shows posts marked draft: true
npm run build      # outputs to _site/
```

## Project layout

```
src/
├── index.njk                 # Home page
├── insights/                 # Articles (one Markdown file per post)
├── _includes/layouts/        # Page and post templates
├── _includes/partials/       # Header, footer, contact form, icons
├── _data/site.json           # Site name, URL, SEO description
├── css/styles.css
├── js/site.js
└── img/                      # Logos, favicons, client logos
```

`feed.xml` (RSS), `sitemap.xml` and `robots.txt` are generated automatically.

## Publishing a new Insights article

1. Create `src/insights/your-article-slug.md`. The file name becomes the URL (`/insights/your-article-slug/`).
2. Start it with this front matter:

   ```markdown
   ---
   title: "Your Headline Here"
   description: "One or two sentences. This appears on the article card, in Google results and in social previews."
   date: 2026-10-20
   category: Compliance
   tags: [CMMC, NIST SP 800-171]
   draft: true
   ---

   Article body in Markdown...
   ```

3. Preview it with `npm run drafts`.
4. When it's ready, delete the `draft: true` line, commit, open a PR, check the preview link, and merge.

Suggested categories: **Compliance**, **Network Security**, **Risk & Governance**, **Incident Response**, **AI Security**.

See [docs/content-plan.md](docs/content-plan.md) for the editorial calendar.

## Contact form

The contact form is a MailerLite embedded form (`src/_includes/partials/contact-form.njk`). Keep its `ml-*` classes and field names, because MailerLite's script depends on them.
