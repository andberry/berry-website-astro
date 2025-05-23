import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  trailingSlash: 'never',
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "hover",
  },
  build: {
    format: 'file'
  },
  integrations: [
    tailwind({
      // By default, the integration imports a basic base.css file on every page of your project.
      applyBaseStyles: false,
    }),
    react(),
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
