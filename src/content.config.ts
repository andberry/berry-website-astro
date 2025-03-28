import { z, defineCollection } from "astro:content";
import { glob } from 'astro/loaders';

const blogCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/blog" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      abstract: z.string(),
      date: z.date(),
      published: z.boolean().default(true),
      tags: z.array(z.string()).optional(),
      heroImage: image().optional(),
    }),
});

export const collections = {
  blog: blogCollection,
};
