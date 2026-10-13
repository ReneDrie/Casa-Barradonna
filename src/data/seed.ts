import type { Locale, PageContent, PageKey } from '../lib/types';
import { slugs } from '../lib/routes';

const hero = '/images/coastal-hero.webp';
const stillLife = '/images/coastal-still-life.webp';
const eveningPool = '/images/development-evening-pool.webp';
const daytimePool = '/images/development-daytime-pool.webp';
const gardenWalkway = '/images/development-garden-walkway.webp';
const poolFront = '/images/development-pool-front.webp';
const aerialView = '/images/development-aerial-view.webp';

const content: Record<Locale, Record<PageKey, Omit<PageContent, 'locale' | 'slug' | 'pageKey'>>> = {
  en: {
    home: {
      title: 'Casa Barradonna | A sunny stay in Los Alcázares',
      description: 'A warm, family-owned two-bedroom apartment in Los Alcázares, with a shared pool and the beach less than a kilometre away.',
      sections: [
        { _type: 'hero', eyebrow: 'A little place in the sun · Los Alcázares', heading: 'A slower kind of sunshine.', text: 'Come for the warm days, stay for the easy rhythm. Casa Barradonna is our soon-to-be holiday home by the Mar Menor — a place to settle in, head out, and make the days your own.', imageUrl: eveningPool, imageNote: 'Artist’s impression · final appearance may differ', buttonLabel: 'Explore the apartment', buttonHref: '/en/apartment/' },
        { _type: 'facts', items: [{ value: '02', label: 'bedrooms' }, { value: '< 1 km', label: 'to the beach' }, { value: '01', label: 'shared pool' }, { value: '2027', label: 'planned opening' }] },
        { _type: 'intro', eyebrow: 'Welcome to Casa Barradonna', heading: 'The best days are the unhurried ones.', text: 'Morning coffee, an afternoon dip, and an evening stroll towards the water. We are creating a comfortable base for the kind of holiday that leaves room for the unexpected.', align: 'center' },
        { _type: 'imageText', eyebrow: 'Make yourself at home', heading: 'Easy living, inside and out.', text: 'Two bedrooms, Wi-Fi, parking, and access to the apartment complex pool. The beach is less than a kilometre away. We will share the full room details and fresh photography as the apartment takes shape.', imageUrl: stillLife, imageAlt: 'Illustrated Mediterranean holiday still life', buttonLabel: 'Discover the apartment', buttonHref: '/en/apartment/' },
        { _type: 'featureGrid', eyebrow: 'At your own pace', heading: 'A good day starts here.', items: [{ icon: 'sun', title: 'Slow mornings', text: 'Leave room for coffee, sunshine, and deciding what the day might bring.' }, { icon: 'wave', title: 'Beach days', text: 'The shore is within a kilometre for a swim, a walk, or simply a change of view.' }, { icon: 'pool', title: 'Pool afternoons', text: 'Come back for a refreshing dip in the apartment complex pool.' }] },
        { _type: 'quote', text: 'Casa is our home. Barra is a little nod to Bart. Donna is for our daughter. Put together, it is a place with a story of its own.', credit: 'The name behind the door' },
        { _type: 'callout', eyebrow: 'A sunny chapter ahead', heading: 'Your next little escape starts here.', text: 'The apartment is expected to be ready after its handover at the end of Q1 2027. Send us your preferred dates when requests open.', buttonLabel: 'Plan your stay', buttonHref: '/en/request/' },
      ],
    },
    apartment: {
      title: 'The apartment | Casa Barradonna',
      description: 'Get to know the two-bedroom Casa Barradonna apartment in Los Alcázares: shared pool, Wi-Fi, parking, and a beach less than a kilometre away.',
      sections: [
        { _type: 'hero', eyebrow: 'A comfortable base for sunny days', heading: 'Room to feel right at home.', text: 'A two-bedroom apartment for easy days in Los Alcázares. Some finishing details are still on their way, and we will keep this page updated as the keys arrive.', imageUrl: daytimePool, imageNote: 'Artist’s impression · final appearance may differ' },
        { _type: 'facts', items: [{ value: '02', label: 'bedrooms' }, { value: 'Yes', label: 'Wi-Fi' }, { value: 'Yes', label: 'parking' }, { value: 'Yes', label: 'pool access' }] },
        { _type: 'intro', eyebrow: 'The essentials', heading: 'Everything you need for an easy stay.', text: 'The apartment has two bedrooms, Wi-Fi and parking. Guests can use the apartment complex pool, and the beach is less than a kilometre away. Bed configuration, occupancy, kitchen details, accessibility and the full amenities list will be confirmed after handover.' },
        { _type: 'floorPlan', eyebrow: 'A place to picture yourself', heading: 'How the apartment is planned.', text: 'Step from the open living and kitchen area towards the terrace, with two bedrooms and two bathrooms alongside. This illustrated plan gives you a first feel for the space before the apartment is complete.', note: 'Illustrative layout based on the reservation plan. Areas and dimensions may change during construction; the drawing is not to scale.' },
        { _type: 'gallery', eyebrow: 'A first look', heading: 'A glimpse of the planned complex.', text: 'These artist’s impressions show the shared pool and grounds as planned. The finished result may differ; real apartment photos will follow after handover.', items: [{ imageUrl: gardenWalkway, alt: 'Artist’s impression of the landscaped walkway beside the apartments and shared pool', label: 'Planned garden walkway' }, { imageUrl: poolFront, alt: 'Artist’s impression looking along the planned shared swimming pool', label: 'Planned shared pool' }, { imageUrl: aerialView, alt: 'Artist’s impression of the planned apartment complex and shared pool from above', label: 'View across the complex' }] },
        { _type: 'featureGrid', eyebrow: 'Good to know', heading: 'The practical bits.', items: [{ icon: 'bed', title: 'Two bedrooms', text: 'Final bed setup and maximum guest count will be published before bookings open.' }, { icon: 'pool', title: 'Pool access', text: 'Access to the shared swimming pool is included. Seasonal opening details will be confirmed.' }, { icon: 'car', title: 'Parking and Wi-Fi', text: 'Both are available. We will add practical instructions closer to opening.' }] },
        { _type: 'callout', heading: 'Dreaming of a stay?', text: 'Tell us which dates you have in mind. Requests are planned to open once the apartment and booking details are confirmed.', buttonLabel: 'Request your dates', buttonHref: '/en/request/' },
      ],
    },
    area: {
      title: 'Los Alcázares | Casa Barradonna',
      description: 'Discover the easy coastal rhythm around Casa Barradonna in Los Alcázares, close to the Mar Menor beach.',
      sections: [
        { _type: 'hero', eyebrow: 'A place to wander', heading: 'Meet Los Alcázares.', text: 'A little sunshine, a stretch of water, and the freedom to fill your days however you like. Our neighbourhood guide will grow as we get to know the area better.', imageUrl: hero },
        { _type: 'intro', eyebrow: 'By the water', heading: 'The Mar Menor at your feet.', text: 'Casa Barradonna is less than a kilometre from the beach in Los Alcázares. The town stretches along the Mar Menor, with a seafront promenade made for an unhurried walk and a stop for something to eat.' },
        { _type: 'featureGrid', eyebrow: 'Ideas for your days', heading: 'Choose your own rhythm.', items: [{ icon: 'wave', title: 'Follow the shore', text: 'Start with the nearby beach, then take a wander along the promenade.' }, { icon: 'sun', title: 'Get out on the water', text: 'Los Alcázares has options for sailing, kayaking and other water sports when you feel like a more active day.' }, { icon: 'heart', title: 'Stay on dry land', text: 'Make time for cafés, restaurants and a round of golf in the area. Our personally checked favourites will follow.' }] },
        { _type: 'imageText', eyebrow: 'Stay a little longer', heading: 'A base for more than beach days.', text: 'Explore Los Alcázares and the surrounding region at your own pace, then come back for an easy evening at Casa Barradonna. We will add practical local tips and personally checked recommendations before launch.', imageUrl: stillLife, imageAlt: 'Illustrated Mediterranean holiday still life', buttonLabel: 'Explore the local tourism guide', buttonHref: 'https://turismo.losalcazares.es/' },
        { _type: 'callout', heading: 'Find your sunny days.', text: 'Take a look at the apartment and keep your favourite dates in mind.', buttonLabel: 'See the apartment', buttonHref: '/en/apartment/' },
      ],
    },
    about: {
      title: 'Our story | Casa Barradonna',
      description: 'The family story behind Casa Barradonna and their new holiday home in Los Alcázares.',
      sections: [
        { _type: 'hero', eyebrow: 'A home with a story', heading: 'Hello from our family.', text: 'We are Ricardo and Nancy. Casa Barradonna began with an idea: to make a sunny place of our own and, for much of the year, share it with others.', imageUrl: stillLife },
        { _type: 'intro', eyebrow: 'What is in a name?', heading: 'Casa. Barra. Donna.', text: 'Casa means home. Barra is our playful nod to our son Bart, and Donna is our daughter. Together they make a name that feels like us: personal, warm, and ready for new memories.', align: 'center' },
        { _type: 'imageText', eyebrow: 'A new chapter', heading: 'From first look to first guests.', text: 'We are following the apartment from purchase to handover, making plans as we go. The expected handover is at the end of Q1 2027. Until then, this site is a little window into the place we hope to share.', imageUrl: hero, imageAlt: 'Illustrated coastal scene' },
        { _type: 'quote', text: 'We hope it becomes the sort of place where you feel at home from the first morning.', credit: 'Ricardo & Nancy' },
        { _type: 'callout', heading: 'Come along for the journey.', text: 'We are sharing updates as the apartment gets ready.', buttonLabel: 'Follow on Instagram', buttonHref: 'https://www.instagram.com/casabarradonna/' },
      ],
    },
    request: {
      title: 'Request a stay | Casa Barradonna',
      description: 'Plan a stay at Casa Barradonna in Los Alcázares. Booking requests are expected to open after handover in spring 2027.',
      sections: [
        { _type: 'hero', eyebrow: 'Your stay starts here', heading: 'Let us know when you would love to come.', text: 'Choose your preferred dates and tell us a little about your trip. Once bookings open, we will check availability and reply personally before anything is confirmed.', imageUrl: hero },
        { _type: 'bookingForm', eyebrow: 'Request to book', heading: 'Send us your dates.', text: 'The apartment is expected to be handed over at the end of Q1 2027. Requests are paused while the final details and contact address are being prepared.' },
        { _type: 'faq', eyebrow: 'A few useful answers', heading: 'Before you pack your bag.', items: [{ question: 'Is my stay confirmed when I send a request?', answer: 'No. We will check the dates and send a personal confirmation before a stay is booked.' }, { question: 'When will the apartment open?', answer: 'Handover is expected at the end of Q1 2027. We will confirm the first bookable dates once the apartment is ready.' }, { question: 'What is the minimum stay?', answer: 'We are planning around a three-night minimum, but the final booking rules will be confirmed before requests open.' }] },
      ],
    },
  },
  nl: {
    home: {
      title: 'Casa Barradonna | Zonnig verblijven in Los Alcázares',
      description: 'Een warm familieappartement met twee slaapkamers in Los Alcázares, toegang tot het zwembad en het strand op minder dan een kilometer.',
      sections: [
        { _type: 'hero', eyebrow: 'Een plekje in de zon · Los Alcázares', heading: 'Zon op een rustiger tempo.', text: 'Kom voor de warme dagen en blijf voor het ontspannen ritme. Casa Barradonna wordt ons vakantiehuis vlak bij de Mar Menor — een plek om thuis te komen, eropuit te gaan en de dag vanzelf te laten ontstaan.', imageUrl: eveningPool, imageNote: 'Artist impression · uiteindelijke uitvoering kan afwijken', buttonLabel: 'Bekijk het appartement', buttonHref: '/nl/appartement/' },
        { _type: 'facts', items: [{ value: '02', label: 'slaapkamers' }, { value: '< 1 km', label: 'naar het strand' }, { value: '01', label: 'gedeeld zwembad' }, { value: '2027', label: 'verwachte opening' }] },
        { _type: 'intro', eyebrow: 'Welkom bij Casa Barradonna', heading: 'De fijnste dagen hoeven nergens heen.', text: 'Koffie in de ochtend, een duik in de middag en tegen de avond nog even richting zee. We maken een fijne uitvalsbasis voor een vakantie waarin ook ruimte is voor het onverwachte.', align: 'center' },
        { _type: 'imageText', eyebrow: 'Voel je thuis', heading: 'Een fijne plek, binnen en buiten.', text: 'Twee slaapkamers, wifi, parkeergelegenheid en toegang tot het zwembad van het appartementencomplex. Het strand ligt op minder dan een kilometer. Zodra het appartement klaar is, delen we alle details en echte foto’s.', imageUrl: stillLife, imageAlt: 'Illustratie van een mediterraan vakantiemoment', buttonLabel: 'Ontdek het appartement', buttonHref: '/nl/appartement/' },
        { _type: 'featureGrid', eyebrow: 'Helemaal jouw tempo', heading: 'Een goede dag begint hier.', items: [{ icon: 'sun', title: 'Rustige ochtenden', text: 'Tijd voor koffie, zon en plannen die nog niet vast hoeven te liggen.' }, { icon: 'wave', title: 'Dagen aan zee', text: 'Het strand ligt op minder dan een kilometer voor een duik, wandeling of nieuw uitzicht.' }, { icon: 'pool', title: 'Middagen aan het zwembad', text: 'Terug bij het appartement neem je een verfrissende duik in het gedeelde zwembad.' }] },
        { _type: 'quote', text: 'Casa is ons huis. Barra is een knipoog naar Bart. Donna is onze dochter. Samen vormen ze een plek met een heel eigen verhaal.', credit: 'Het verhaal achter de naam' },
        { _type: 'callout', eyebrow: 'Een zonnig hoofdstuk komt eraan', heading: 'Je volgende kleine avontuur begint hier.', text: 'De oplevering van het appartement wordt eind Q1 2027 verwacht. Zodra aanvragen open zijn, horen we graag welke data je in gedachten hebt.', buttonLabel: 'Plan je verblijf', buttonHref: '/nl/aanvragen/' },
      ],
    },
    apartment: {
      title: 'Het appartement | Casa Barradonna',
      description: 'Ontdek Casa Barradonna in Los Alcázares: twee slaapkamers, gedeeld zwembad, wifi, parkeergelegenheid en het strand op minder dan een kilometer.',
      sections: [
        { _type: 'hero', eyebrow: 'Een fijne basis voor zonnige dagen', heading: 'Ruimte om je thuis te voelen.', text: 'Een appartement met twee slaapkamers voor ontspannen dagen in Los Alcázares. De laatste details volgen nog; na de oplevering werken we deze pagina verder bij.', imageUrl: daytimePool, imageNote: 'Artist impression · uiteindelijke uitvoering kan afwijken' },
        { _type: 'facts', items: [{ value: '02', label: 'slaapkamers' }, { value: 'Ja', label: 'wifi' }, { value: 'Ja', label: 'parkeren' }, { value: 'Ja', label: 'toegang zwembad' }] },
        { _type: 'intro', eyebrow: 'De basis', heading: 'Alles voor een ontspannen verblijf.', text: 'Het appartement heeft twee slaapkamers, wifi en parkeergelegenheid. Je kunt gebruikmaken van het zwembad van het complex en het strand ligt op minder dan een kilometer. De bedindeling, het maximumaantal gasten, de keuken, toegankelijkheid en volledige voorzieningen bevestigen we na de oplevering.' },
        { _type: 'floorPlan', eyebrow: 'Zo zou het kunnen worden', heading: 'Een eerste blik op de indeling.', text: 'Vanuit de open woonruimte met keuken loop je richting het terras. Daarnaast liggen twee slaapkamers en twee badkamers. Deze getekende plattegrond geeft alvast een gevoel bij de ruimte.', note: 'Schematische weergave op basis van de reserveringsplattegrond. Oppervlakten en afmetingen kunnen tijdens de bouw veranderen; de tekening is niet op schaal.' },
        { _type: 'gallery', eyebrow: 'Een eerste indruk', heading: 'Een kijkje in het geplande complex.', text: 'Deze artist impressions tonen het gedeelde zwembad en de buitenruimte zoals gepland. De uiteindelijke uitvoering kan afwijken; echte foto’s van het appartement volgen na de oplevering.', items: [{ imageUrl: gardenWalkway, alt: 'Artist impression van het wandelpad langs de appartementen en het gedeelde zwembad', label: 'Gepland tuinpad' }, { imageUrl: poolFront, alt: 'Artist impression van het geplande gedeelde zwembad', label: 'Gepland gedeeld zwembad' }, { imageUrl: aerialView, alt: 'Artist impression van het geplande appartementencomplex en zwembad van bovenaf', label: 'Overzicht van het complex' }] },
        { _type: 'featureGrid', eyebrow: 'Goed om te weten', heading: 'De praktische dingen.', items: [{ icon: 'bed', title: 'Twee slaapkamers', text: 'De bedindeling en het maximumaantal gasten publiceren we voordat aanvragen open gaan.' }, { icon: 'pool', title: 'Toegang tot het zwembad', text: 'Het gedeelde zwembad is inbegrepen. Seizoensgebonden openingstijden volgen nog.' }, { icon: 'car', title: 'Parkeren en wifi', text: 'Beide zijn aanwezig. Praktische instructies voegen we later toe.' }] },
        { _type: 'callout', heading: 'Droom je al van een verblijf?', text: 'Vertel ons welke data je in gedachten hebt zodra de aanvragen open zijn.', buttonLabel: 'Vraag je data aan', buttonHref: '/nl/aanvragen/' },
      ],
    },
    area: {
      title: 'Los Alcázares | Casa Barradonna',
      description: 'Ontdek het ontspannen leven aan de kust rond Casa Barradonna in Los Alcázares, vlak bij het strand van de Mar Menor.',
      sections: [
        { _type: 'hero', eyebrow: 'Een plek om op pad te gaan', heading: 'Ontdek Los Alcázares.', text: 'Een beetje zon, water dichtbij en alle vrijheid om de dag zelf in te vullen. Onze tips voor de omgeving groeien mee terwijl we de buurt beter leren kennen.', imageUrl: hero },
        { _type: 'intro', eyebrow: 'Vlak bij het water', heading: 'De Mar Menor dichtbij.', text: 'Casa Barradonna ligt op minder dan een kilometer van het strand in Los Alcázares. Langs de Mar Menor loopt een boulevard waar je rustig kunt wandelen en onderweg iets kunt eten.' },
        { _type: 'featureGrid', eyebrow: 'Ideeën voor je dag', heading: 'Kies je eigen ritme.', items: [{ icon: 'wave', title: 'Volg de kust', text: 'Begin bij het strand vlakbij en wandel daarna een stuk over de boulevard.' }, { icon: 'sun', title: 'Het water op', text: 'In Los Alcázares kun je onder meer zeilen en kajakken als je zin hebt in een actieve dag.' }, { icon: 'heart', title: 'Aan wal', text: 'Neem tijd voor terrasjes, restaurants of een rondje golf in de omgeving. Onze eigen favoriete plekken volgen nog.' }] },
        { _type: 'imageText', eyebrow: 'Blijf nog even', heading: 'Meer dan alleen stranddagen.', text: 'Ontdek Los Alcázares en de omgeving in je eigen tempo en kom daarna terug voor een ontspannen avond bij Casa Barradonna. Praktische tips en persoonlijk uitgeprobeerde adressen volgen voor de opening.', imageUrl: stillLife, imageAlt: 'Illustratie van een mediterraan vakantiemoment', buttonLabel: 'Bekijk de toeristische gids', buttonHref: 'https://turismo.losalcazares.es/' },
        { _type: 'callout', heading: 'Vind jouw zonnige dagen.', text: 'Bekijk het appartement en onthoud alvast je favoriete data.', buttonLabel: 'Bekijk het appartement', buttonHref: '/nl/appartement/' },
      ],
    },
    about: {
      title: 'Ons verhaal | Casa Barradonna',
      description: 'Het familieverhaal achter Casa Barradonna en hun nieuwe vakantiehuis in Los Alcázares.',
      sections: [
        { _type: 'hero', eyebrow: 'Een huis met een verhaal', heading: 'Hallo van onze familie.', text: 'Wij zijn Ricardo en Nancy. Casa Barradonna begon met een idee: een zonnige plek voor onszelf maken en die een groot deel van het jaar met anderen delen.', imageUrl: stillLife },
        { _type: 'intro', eyebrow: 'Wat zit er in een naam?', heading: 'Casa. Barra. Donna.', text: 'Casa betekent huis. Barra is onze speelse knipoog naar onze zoon Bart, en Donna is onze dochter. Samen is het een naam die bij ons past: persoonlijk, warm en klaar voor nieuwe herinneringen.', align: 'center' },
        { _type: 'imageText', eyebrow: 'Een nieuw hoofdstuk', heading: 'Van eerste kijkje tot eerste gasten.', text: 'We volgen het appartement vanaf de aankoop tot de oplevering en maken onderweg plannen. Die oplevering verwachten we eind Q1 2027. Tot die tijd is deze website alvast een inkijkje in de plek die we straks willen delen.', imageUrl: hero, imageAlt: 'Illustratie van een kustlandschap' },
        { _type: 'quote', text: 'We hopen dat het zo’n plek wordt waar je je vanaf de eerste ochtend thuis voelt.', credit: 'Ricardo & Nancy' },
        { _type: 'callout', heading: 'Reis je met ons mee?', text: 'Op Instagram delen we updates terwijl het appartement vorm krijgt.', buttonLabel: 'Volg ons op Instagram', buttonHref: 'https://www.instagram.com/casabarradonna/' },
      ],
    },
    request: {
      title: 'Verblijf aanvragen | Casa Barradonna',
      description: 'Plan je verblijf bij Casa Barradonna in Los Alcázares. Aanvragen openen naar verwachting na de oplevering in het voorjaar van 2027.',
      sections: [
        { _type: 'hero', eyebrow: 'Hier begint je verblijf', heading: 'Laat ons weten wanneer je wilt komen.', text: 'Kies je voorkeursdata en vertel iets over je reis. Zodra aanvragen open zijn, controleren we de beschikbaarheid en reageren we persoonlijk. Pas daarna is een verblijf bevestigd.', imageUrl: hero },
        { _type: 'bookingForm', eyebrow: 'Verblijf aanvragen', heading: 'Stuur ons je data.', text: 'De oplevering wordt eind Q1 2027 verwacht. Aanvragen zijn tijdelijk gesloten terwijl we de laatste details en het contactadres voorbereiden.' },
        { _type: 'faq', eyebrow: 'Handig om te weten', heading: 'Voordat je je koffer pakt.', items: [{ question: 'Is mijn verblijf bevestigd na het versturen?', answer: 'Nee. We controleren eerst de data en sturen je persoonlijk bericht voordat een verblijf vaststaat.' }, { question: 'Wanneer opent het appartement?', answer: 'De oplevering wordt eind Q1 2027 verwacht. De eerste beschikbare data bevestigen we zodra het appartement klaar is.' }, { question: 'Wat is het minimale verblijf?', answer: 'We denken voorlopig aan minimaal drie nachten. De definitieve regels bevestigen we voordat aanvragen open gaan.' }] },
      ],
    },
  },
};

export function seedPage(locale: Locale, pageKey: PageKey): PageContent {
  return { ...content[locale][pageKey], locale, pageKey, slug: slugs[locale][pageKey] };
}
