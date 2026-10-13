import type { Locale, PageContent, PageKey } from './types';
import { seedPage } from '../data/seed';
import { pageKeys } from './routes';

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID;
const dataset = import.meta.env.PUBLIC_SANITY_DATASET || 'production';
const apiVersion = import.meta.env.PUBLIC_SANITY_API_VERSION || '2026-01-01';

export interface CmsRoute { locale: Locale; pageKey: string; slug: string }

export async function listCmsRoutes(): Promise<CmsRoute[]> {
  if (!projectId) return [];
  const query = '*[_type == "page" && defined(slug) && slug != ""]{locale,pageKey,slug}';
  const url = new URL(`https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}`);
  url.searchParams.set('query', query);
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Sanity route request failed: ${response.status}`);
  const { result } = await response.json() as { result?: CmsRoute[] };
  return (result || []).filter(({ locale, pageKey, slug }) =>
    (locale === 'en' || locale === 'nl') && typeof pageKey === 'string' && typeof slug === 'string' && /^[a-z0-9-]+$/.test(slug),
  );
}

export async function getPage(locale: Locale, pageKey: string): Promise<PageContent> {
  const isCorePage = pageKeys.includes(pageKey as PageKey);
  if (!projectId) {
    if (!isCorePage) throw new Error(`Missing CMS page: ${locale}/${pageKey}`);
    return seedPage(locale, pageKey as PageKey);
  }

  const query = `*[_type == "page" && pageKey == $pageKey && locale == $locale][0]{
    pageKey, locale, slug, title, description,
    sections[]{
      ...,
      "imageUrl": coalesce(image.asset->url, imageUrl),
      items[]{... , "imageUrl": coalesce(image.asset->url, imageUrl)}
    }
  }`;
  const url = new URL(`https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}`);
  url.searchParams.set('query', query);
  url.searchParams.set('$pageKey', JSON.stringify(pageKey));
  url.searchParams.set('$locale', JSON.stringify(locale));

  const response = await fetch(url, { headers: { Accept: 'application/json' } });
  if (!response.ok) throw new Error(`Sanity content request failed: ${response.status}`);
  const { result } = await response.json() as { result?: PageContent };
  if (result?.sections?.length) return result;
  if (isCorePage) return seedPage(locale, pageKey as PageKey);
  throw new Error(`Missing CMS page: ${locale}/${pageKey}`);
}
