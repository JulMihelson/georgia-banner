import { defineCollection, z } from "astro:content";

const social = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      url: z.string(),
      icon: image(),
    }),
});
export const collections = {
  social,
};
