import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { SITE } from "./consts";

const docs = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/docs" }),
  schema: z.object({
    title: z.string().default(SITE.title),
    sidebarLabel: z.string().optional(),
    description: z.string().default(SITE.description),
    dir: z.union([z.literal("ltr"), z.literal("rtl")]).default("ltr"),
    image: z
      .object({
        src: z.string(),
        alt: z.string(),
      })
      .optional(),
    ogLocale: z.string().optional(),
  }),
});

export const collections = { docs };
