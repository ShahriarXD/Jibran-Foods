# Jibran Food Website

Luxury minimalist marketing website for Jibran Food, built with Next.js.

## Live Site

GitHub Pages URL:

https://shahriarxd.github.io/Jibran-Foods/

## Download and Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/ShahriarXD/Jibran-Foods.git
cd Jibran-Foods
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start development server

```bash
npm run dev
```

Open this in your browser:

http://localhost:3000

## Build for Production

```bash
npm run build
```

The static export is generated in the out folder.

## GitHub Pages Hosting

This repository is configured for GitHub Pages with:

- Next.js static export settings in [next.config.ts](next.config.ts)
- GitHub Actions workflow in [.github/workflows/deploy-pages.yml](.github/workflows/deploy-pages.yml)

Deployment steps:

1. Push your changes to the main branch.
2. Go to your repository on GitHub.
3. Open Settings > Pages.
4. Under Build and deployment, set Source to GitHub Actions.
5. Wait for the Deploy Next.js site to GitHub Pages workflow to complete.

After deployment, your site will be available at:

https://shahriarxd.github.io/Jibran-Foods/
