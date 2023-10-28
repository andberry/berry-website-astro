/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      white: "#FFFFFF",
      black0: "#000",
      lightgray: "#f2f3f6",
      mediumgray: "#d9dadd",
      purple: "#5b21b6",
      pink: "#FF10F0",
      lime: "#90FF5D",

      //
      ultraviolet: "#52489C",
      lightgreen: "#90EE90",

      //
      pink2: "#EC058E",
      green: "#77FF94",
      greenyellow: "#ABFF67",
      raisingBlack: "#2D2931",
      grassGreen: "#7CFC00",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "1680px",
    },
    maxWidth: {
      "screen-md": "768px",
      "screen-lg": "1024px",
      "screen-xl": "1280px",
      "screen-2xl": "1440px",
      "screen-3xl": "1680px",
    },
    fontFamily: {
      exo2: ['"Exo 2"', "sans-serif"],
      merryweather: ["Merriweather", "serif"],
    },
    extend: {
      fontSize: {
        clamphero: "clamp(4rem, -1.75rem + 10vw, 7.25rem)",
        clamph1: "clamp(3.2rem, -1.786rem + 9.762vw, 7rem)",
        clamph2: "clamp(2.6rem, -1.714rem + 8.571vw, 6rem)",
        clamph3: "clamp(2.2rem, -1.036rem + 6.429vw, 4.75rem)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
