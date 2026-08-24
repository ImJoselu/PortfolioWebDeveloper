# Portfolio — Jose Luis Tórtola Cervera

Portfolio profesional construido con [Astro](https://astro.build), TypeScript y Tailwind CSS. Contenido bilingüe (ES/EN), sin dependencias de runtime más allá de las necesarias.

## Desarrollo local

Requiere [Node.js](https://nodejs.org) 22.12+ (versión mínima exigida por Astro 7).

```bash
npm install
npm run dev
```

El servidor arranca en `http://localhost:4321/PortfolioWebDeveloper` (la ruta incluye el `base` configurado en `astro.config.mjs` para que coincida con GitHub Pages).

Otros comandos:

```bash
npm run build    # genera el sitio estático en dist/
npm run preview  # sirve dist/ localmente para comprobar la build de producción
npm run check    # comprueba tipos de TypeScript/Astro
```

## Contenido

Los datos reales (empresas, fechas, enlaces, proyectos, stack) están centralizados en [`src/data/profile.ts`](src/data/profile.ts) — no dependen del idioma. Los textos traducidos (resúmenes, listas de logros, etiquetas de la interfaz) están en [`src/i18n/es.ts`](src/i18n/es.ts) y [`src/i18n/en.ts`](src/i18n/en.ts). Para actualizar el CV, edita esos ficheros; no hace falta tocar los componentes.

## Despliegue (GitHub Pages vía GitHub Actions)

El despliegue es automático: [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) construye el sitio (`npm ci && npm run build`) y lo publica en GitHub Pages en cada push a `main`.

**Paso único manual, la primera vez:** en el repositorio de GitHub, ve a **Settings → Pages → Build and deployment → Source** y selecciona **"GitHub Actions"** (en vez de "Deploy from a branch"). Sin este cambio, el workflow se ejecutará pero Pages no publicará su resultado.

Una vez configurado, cualquier `git push` a `main` despliega automáticamente. Puedes seguir el progreso en la pestaña **Actions** del repositorio.

Si el repositorio cambia de nombre o se sirve desde un dominio propio, actualiza `site` y `base` en [`astro.config.mjs`](astro.config.mjs) para que coincidan con la nueva URL.
