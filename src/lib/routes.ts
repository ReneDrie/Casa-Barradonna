import type { Locale, PageKey } from './types';

export const locales: Locale[] = ['en', 'nl'];
export const pageKeys: PageKey[] = ['home', 'apartment', 'area', 'about', 'request'];

export const slugs: Record<Locale, Record<PageKey, string>> = {
  en: { home: '', apartment: 'apartment', area: 'los-alcazares', about: 'about', request: 'request' },
  nl: { home: '', apartment: 'appartement', area: 'los-alcazares', about: 'over-ons', request: 'aanvragen' },
};

export function pathFor(locale: Locale, key: PageKey): string {
  const slug = slugs[locale][key];
  return `/${locale}/${slug ? `${slug}/` : ''}`;
}

export function keyFromSlug(locale: Locale, slug: string): PageKey | undefined {
  return pageKeys.find((key) => slugs[locale][key] === slug);
}

export const navigation: Record<Locale, { key: PageKey; label: string }[]> = {
  en: [
    { key: 'apartment', label: 'The apartment' },
    { key: 'area', label: 'Los Alcázares' },
    { key: 'about', label: 'Our story' },
  ],
  nl: [
    { key: 'apartment', label: 'Het appartement' },
    { key: 'area', label: 'Los Alcázares' },
    { key: 'about', label: 'Ons verhaal' },
  ],
};
