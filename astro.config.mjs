// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// If you publish to https://<user>.github.io  ->  keep `site` and leave `base` out.
// If you publish to https://<user>.github.io/<repo>/  ->  also set `base: '/<repo>'`.
export default defineConfig({
  site: 'https://www-iq-helaly.github.io',
  // base: '/Hassan-Professional-Website',
  integrations: [tailwind()],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ar'],
    routing: { prefixDefaultLocale: false },
  },
  build: { inlineStylesheets: 'auto' },
  compressHTML: true,
});
