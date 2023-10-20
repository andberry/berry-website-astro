import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      abstract: z.string(),
      createdAt: z.number(),
      createdAtDisplay: z.string(),
      published: z.boolean().default(true),
      tags: z.array(z.string()),
      heroImage: z.object({
        src: z.string(),
        alt: z.string(),
      }),
    }),
});

export const collections = {
  blog: blogCollection,
};
