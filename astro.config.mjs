import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      //applyBaseStyles: false,
    }),
  ],
  markdown: {
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: "monokai",
      // Add custom languages
      // Note: Shiki has countless langs built-in, including .astro!
      // https://github.com/shikijs/shiki/blob/main/docs/languages.md
      langs: [
        "astro",
        "css",
        "sass",
        "scss",
        "ts",
        "js",
        "json",
        "html",
        "php",
        "python",
        "twig",
        "md",
        "mdx",
      ],
      // Enable word wrap to prevent horizontal scrolling
      wrap: false,
    },
  },
});
