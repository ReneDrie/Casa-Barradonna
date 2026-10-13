import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './studio/schemaTypes';

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || process.env.PUBLIC_SANITY_PROJECT_ID;
if (!projectId) {
  throw new Error('Set SANITY_STUDIO_PROJECT_ID before starting Sanity Studio. See .env.example.');
}

export default defineConfig({
  name: 'casa-barradonna',
  title: 'Casa Barradonna',
  projectId,
  dataset: process.env.SANITY_STUDIO_DATASET || process.env.PUBLIC_SANITY_DATASET || 'production',
  plugins: [structureTool()],
  schema: { types: schemaTypes },
});
