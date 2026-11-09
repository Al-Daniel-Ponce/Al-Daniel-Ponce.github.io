# Al Daniel — Multimedia Portfolio

A React conversion of the original static GitHub Pages portfolio. The layout,
design, content, and interactions are preserved, but the site is now built with
reusable React components and React Router.

## Tech stack

- [React 19](https://react.dev/)
- [Vite](https://vite.dev/)
- [React Router](https://reactrouter.com/)
- The original hand-written CSS (kept in `src/styles/portfolio.css`)

## Routes

| Route | Page |
| --- | --- |
| `/` | Home / hero |
| `/about` | About me |
| `/skills` | Skills and tools |
| `/work` | All projects |
| `/work?category=web` | Web development projects |
| `/work?category=game` | Game development projects |
| `/work?category=mobile` | Mobile app projects |
| `/contact` | Contact information |

The “My Work” dropdown in the navbar links to the category routes.

## Getting started

```bash
npm install
npm run dev
```

The dev server prints a local URL (usually `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview
```

The production build is written to `dist/`.

## Project structure

```text
src/
  components/     Reusable UI pieces (Navbar, Hero, Footer, cards, etc.)
  data/           Portfolio content (projects, skills, links)
  hooks/          useScrolled, useInView, useDocumentTitle
  pages/          Route-level pages
  styles/         Original portfolio CSS
public/
  assets/         Images and background GIFs
  404.html        GitHub Pages SPA fallback
```

## Deployment

This repository is a GitHub user site (`Al-Daniel-Ponce.github.io`), so it is
served from the domain root.

### GitHub Actions (recommended)

1. Push the source to `main`.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` will build and deploy the
   site automatically on every push to `main`.

The site will be available at <https://al-daniel-ponce.github.io/>.

### How direct links work on GitHub Pages

GitHub Pages does not rewrite unknown paths to `index.html`. The
`public/404.html` file stores the requested path in `sessionStorage`, redirects
to `/`, and the small script in `index.html` restores the path before React
Router loads. This makes direct visits and refreshes work for routes such as
`/about` and `/work?category=web`.

## Notes

- The design uses the original Outfit font and the existing dark gradient theme.
- The navbar, dropdown, mobile menu, scroll reveals, and skill-bar animations
  are implemented with React state and hooks.
- `prefers-reduced-motion` is respected.
