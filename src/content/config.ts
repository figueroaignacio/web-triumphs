import { defineCollection, z } from "astro:content";

const challenges = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    lang: z.string(),
  }),
});

export const collections = { challenges };
