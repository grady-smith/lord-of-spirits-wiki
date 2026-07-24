// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import remarkWikiLink from 'remark-wiki-link';

import vercel from '@astrojs/vercel';

export default defineConfig({
  integrations: [
    mdx({
      remarkPlugins: [
        [remarkWikiLink, {
          pageResolver: (name) => [name.replace(/ /g, '-').toLowerCase()],
          hrefTemplate: (permalink) => `/topics/${permalink}`,
          aliasDivider: '|'
        }]
      ]
    })
  ],

  vite: {
    // plugins: []
  },

  adapter: vercel()
});