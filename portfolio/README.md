# Trupti Lone — ML & AI Portfolio

A project-first portfolio built with React, TypeScript, and Vinext. The cream-and-serif layout presents eight public projects, their scope, technologies, and repository links.

## Content

Academic projects appear before featured work; all cards link directly to their GitHub repositories.

- AI Mock Interview: job-specific behavioral interview practice with NLP and speech.
- Data-Driven Airbnb: listing analysis, visualization, regression, and classification.

- California Housing: historical district-value regression and held-out evaluation.
- Technical Knowledge Assistant: retrieval comparisons and a documented generation baseline.
- AI Realtor Voice Assistant: team practicum; backend and AI pipeline contribution.
- Multi-Framework Agent Orchestrator: adapted prototype with MCP integration and notebooks.
- SmartHealth: team MLOps architecture and delivery-planning case study.
- Studentlytics: student analytics dashboard prototype.

Project descriptions and links live in `app/page.tsx`; shared cards in `app/components/ProjectCard.tsx`. Only the housing card shows model metrics, sourced from its committed experiment report. Prototype status and team contributions are explicit. Contact: lonetrupti@gmail.com.

## Development

```sh
npm install
npm run dev -- --host 127.0.0.1 --port 5173
npm run lint
npm test
```

The rendered HTML test checks project links, contact details, and removal of placeholder claims. Preserve the existing `.openai/hosting.json` project identity when publishing through Sites. Site access is managed separately from repository visibility.

## GitHub homepage export

After `npm run build`, run `node scripts/export-static.mjs <output-directory>` to generate the static homepage, favicon, and social image. The export contains the same eight project cards and inline production CSS; native navigation and repository links work without a JavaScript runtime. In the GitHub repository, editable source lives under `portfolio/` and the exported homepage lives at the repository root. GitHub Pages availability and access settings are separate from pushing the code.
