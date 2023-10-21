/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      exo2: ['"Exo 2"', "sans-serif"],
      domine: ["Domine", "serif"],
      playfairDisplay: ['"Playfair Display"', "serif"],
      titillium: ["Titillium Web", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
