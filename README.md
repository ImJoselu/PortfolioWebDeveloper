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
