# Takumi Kotobuki — Portfolio

Personal portfolio website for Takumi Kotobuki, a backend software engineer specializing in BIM data processing and AI integration. Built to support a job search in France.

## Tech Stack

- **Framework** — Next.js 16 (App Router)
- **Language** — TypeScript
- **Styling** — Tailwind CSS v4 + inline styles
- **Animation** — Framer Motion
- **3D Scene** — React Three Fiber + @react-three/drei + Three.js
- **Deployment** — Vercel

## Features

- Interactive 3D pagoda (五重塔) built with React Three Fiber
- Blueprint grid aesthetic with monospace panel labels
- Sections: Hero, About, Skills, Projects, Contact
- Smooth scroll animations via Framer Motion `whileInView`

## Project Structure

```
components/
  Hero.tsx       # Landing section with 3D scene
  BIMScene.tsx   # React Three Fiber pagoda renderer
  About.tsx      # Profile table + prose
  Skills.tsx     # Tech stack grouped by category
  Projects.tsx   # Work and personal projects table
  Contact.tsx    # Email, LinkedIn, GitHub links
app/
  page.tsx       # Root page assembling all sections
  layout.tsx     # Global layout and metadata
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build & Deploy

```bash
npm run build   # production build
npm run start   # run production build locally
```

Deployed on [Vercel](https://vercel.com). Push to `main` triggers automatic deployment.
