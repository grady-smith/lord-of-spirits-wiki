import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const transcriptsCollection = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/transcripts" }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
  }),
});

export const collections = {
  'transcripts': transcriptsCollection,
};
