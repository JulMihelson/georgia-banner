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

const contactsge = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      url: z.string(),
      icon: image(),
      text: z.string(),
    }),
});

const contactsaz = defineCollection({
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
  contactsge,
  contactsaz,
};
