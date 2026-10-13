import { build } from 'esbuild';
import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const source = fileURLToPath(new URL('../src/data/seed.ts', import.meta.url));
const output = fileURLToPath(new URL('../studio/seed.ndjson', import.meta.url));
const bundle = await build({ entryPoints: [source], bundle: true, platform: 'node', format: 'esm', write: false });
const encoded = Buffer.from(bundle.outputFiles[0].text).toString('base64');
const { seedPage } = await import(`data:text/javascript;base64,${encoded}`);
const locales = ['en', 'nl'];
const keys = ['home', 'apartment', 'area', 'about', 'request'];

function withArrayKeys(section, sectionIndex, sections) {
  const existingSectionIndex = sectionIndex - sections.slice(0, sectionIndex).filter((item) => item._type === 'floorPlan').length;
  return {
    ...section,
    _key: section._type === 'floorPlan' ? 'floor-plan' : `section-${existingSectionIndex}`,
    ...(section.items ? { items: section.items.map((item, itemIndex) => ({ ...item, _type: 'object', _key: `item-${itemIndex}` })) } : {}),
  };
}

const documents = locales.flatMap((locale) => keys.map((pageKey) => {
  const page = seedPage(locale, pageKey);
  return {
    _id: `page.${locale}.${pageKey}`,
    _type: 'page',
    ...page,
    sections: page.sections.map(withArrayKeys),
  };
}));

await writeFile(output, `${documents.map((document) => JSON.stringify(document)).join('\n')}\n`);
console.log(`Wrote ${documents.length} editable page documents to ${output}`);
