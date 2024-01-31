import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import icon from "astro-icon";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://wiki.ultramarine-linux.org",
  integrations: [
    // Enable Preact to support Preact JSX components.
    preact(),
    icon(),
    mdx(),
  ],
});
