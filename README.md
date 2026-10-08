# Trupti Lone — Software, Machine Learning & AI Portfolio

The updated portfolio presents academic and featured projects with direct GitHub links.

## Projects

**Academic:** AI Realtor Voice Assistant, AI Mock Interview, Data-Driven Airbnb, and SmartHealth MLOps Case Study.

**Featured:** California Housing — End-to-End ML, Multi-Framework Agent Orchestrator, and Technical Knowledge Assistant.

**More:** Studentlytics student analytics dashboard.

## Repository layout

- `index.html`: generated static homepage with inline production styles.
- `portfolio/`: editable React, TypeScript, and Vinext source, plus tests and export script.
- `favicon.svg`, `og.png`, `.nojekyll`: static homepage assets.
- Earlier images, styles, scripts, and resume files remain for reference; the new homepage does not use the legacy site assets.

## Update the homepage

```sh
cd portfolio
npm ci
npm run lint
npm test
node scripts/export-static.mjs ..
```

The homepage requires no server or client JavaScript runtime. Serve the repository root with a static server to preview it. Pushing source does not enable GitHub Pages or change repository visibility.

The Sites-hosted version is managed separately through the existing Site identity in `portfolio/.openai/hosting.json`.
