import { defineCollection, z } from "astro:content";

const social = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      url: z.string(),
      icon: image(),
    }),
});

const contacts = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      url: z.string(),
      icon: image(),
      text: z.string(),
    }),
});

export const collections = {
  social,
  contacts,
};
