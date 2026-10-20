# High Performance Web App

A fast, lightweight web application built with Vite and vanilla JavaScript, demonstrating web performance best practices.

## Performance Techniques Used

- Lazy-loading images (`loading="lazy"`, `decoding="async"`)
- Explicit image `width` and `height` to prevent layout shift
- Code splitting with dynamic `import()`
- Debounced scroll events
- Minified and bundled production build (Vite)

## Getting Started

```bash
git clone https://github.com/pratiksha0604/perf-web-app.git
cd perf-web-app
npm install
npm run dev
```

## Build and Preview

```bash
npm run build
npm run preview
```

## Performance Testing

Tested with Google Chrome Lighthouse against the production build.

## Tech Stack

HTML, CSS, JavaScript, Vite