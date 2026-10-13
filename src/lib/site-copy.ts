import type { Locale } from './types';

export const siteCopy: Record<Locale, {
  request: string;
  menu: string;
  close: string;
  footer: string;
  links: string;
  note: string;
  illustration: string;
  social: string;
  bottom: string;
}> = {
  en: {
    request: 'Plan your stay',
    menu: 'Menu',
    close: 'Close',
    footer: 'A little place in the sun.',
    links: 'Explore',
    note: 'Website preview · opening planned for 2027',
    illustration: 'Artist’s impressions show the planned complex; the finished result may differ. Other artwork sets the mood.',
    social: 'Follow the story',
    bottom: 'Made for slow, sunny days.',
  },
  nl: {
    request: 'Plan je verblijf',
    menu: 'Menu',
    close: 'Sluiten',
    footer: 'Een plekje in de zon.',
    links: 'Ontdek',
    note: 'Websitevoorbeeld · verwachte opening in 2027',
    illustration: 'Artist impressions tonen het geplande complex; het eindresultaat kan afwijken. Andere illustraties geven sfeer weer.',
    social: 'Volg ons verhaal',
    bottom: 'Voor rustige, zonnige dagen.',
  },
};
