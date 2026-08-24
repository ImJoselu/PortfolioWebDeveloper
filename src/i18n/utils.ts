import { es } from './es';
import { en } from './en';
import type { Dictionary } from './types';

export const dictionaries = { es, en };
export type Lang = keyof typeof dictionaries;

export function getDictionary(lang: Lang): Dictionary {
  return dictionaries[lang];
}

/** Prefixes a root-relative path with the site's base path (e.g. GitHub Pages project subpath). */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const normalized = path.startsWith('/') ? path : `/${path}`;
  // The site root ("/") must resolve to the base itself with no trailing
  // slash, matching the `trailingSlash: 'never'` build config — otherwise
  // the base-only URL 404s (e.g. "/PortfolioWebDeveloper/" vs the real
  // "/PortfolioWebDeveloper").
  if (normalized === '/') {
    return base || '/';
  }
  return `${base}${normalized}`;
}

/** Path to the same page in the other supported language, e.g. "/" <-> "/en". */
export function otherLangPath(lang: Lang): string {
  return lang === 'es' ? '/en' : '/';
}

export function formatPeriod(
  period: { start: string; end: string | null },
  presentLabel: string,
): string {
  return `${period.start} — ${period.end ?? presentLabel}`;
}
