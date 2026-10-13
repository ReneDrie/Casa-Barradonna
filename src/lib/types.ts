export type Locale = 'en' | 'nl';
export type PageKey = 'home' | 'apartment' | 'area' | 'about' | 'request';

export type Section =
  | { _type: 'hero'; eyebrow?: string; heading: string; text: string; imageUrl?: string; imageNote?: string; buttonLabel?: string; buttonHref?: string }
  | { _type: 'facts'; items: { value: string; label: string }[] }
  | { _type: 'intro'; eyebrow?: string; heading: string; text: string; align?: 'left' | 'center' }
  | { _type: 'imageText'; eyebrow?: string; heading: string; text: string; imageUrl?: string; imageAlt?: string; buttonLabel?: string; buttonHref?: string; reverse?: boolean }
  | { _type: 'featureGrid'; eyebrow?: string; heading: string; items: { icon?: string; title: string; text: string }[] }
  | { _type: 'gallery'; eyebrow?: string; heading: string; text?: string; items: { imageUrl?: string; alt?: string; label: string }[] }
  | { _type: 'quote'; text: string; credit?: string }
  | { _type: 'faq'; eyebrow?: string; heading: string; items: { question: string; answer: string }[] }
  | { _type: 'callout'; eyebrow?: string; heading: string; text: string; buttonLabel?: string; buttonHref?: string }
  | { _type: 'bookingForm'; eyebrow?: string; heading: string; text: string };

export interface PageContent {
  pageKey: string;
  locale: Locale;
  slug: string;
  title: string;
  description: string;
  sections: Section[];
}
