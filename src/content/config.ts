import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
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
