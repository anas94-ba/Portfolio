# Anas Baba — Portfolio

Personal portfolio site for **Anas Baba**, AI Engineer & Data Analyst.

🔗 **Live site:** _add your Netlify link here after deploying_

## Sections

- **AI** — computer vision & applied machine learning projects
- **Software Development** — full-stack websites and desktop applications
- **Data Analysis** — dashboards and dataset exploration across Excel, SQL, Tableau, and Power BI

## Tech stack

Plain HTML, CSS, and JavaScript — no framework, no build step. All content (sections, projects, descriptions, links, images) is driven by a single data array in `script.js`, so adding a new project is a matter of adding one object to that array.

## Project structure

```
.
├── index.html      # page shell
├── styles.css      # all styling
├── script.js       # data (CONFIG / SECTIONS / PROJECTS) + routing + rendering
└── images/         # cover images for sections and projects
```

## Running locally

No build tools needed — just open `index.html` in a browser, or serve the folder with any static server, e.g.:

```
npx serve .
```

## Editing content

All editable content lives near the top of `script.js`:

- `CONFIG` — name, title, photo, GitHub link
- `SECTIONS` — the three main categories and their cover images
- `PROJECTS` — each project's title, tag, description, link, cover image, and gallery images

## Deployment

This is a fully static site — it deploys as-is on Netlify, GitHub Pages, Vercel, or any static host, with no build command required.
