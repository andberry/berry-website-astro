/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      white: "#FFFFFF",
      black0: "#000",
      lightgray: "#f2f3f6",
      purple: "#5b21b6",
      pink: "#FF10F0",
      lime: "#90FF5D",

      //
      ultraviolet: "#52489C",
      teal: "#3891A6",
      black: "#000807",
      lightgreen: "#90EE90",
      yellow: "#FCFF4B",

      //
      pink2: "#EC058E",
      green: "#77FF94",
      greenyellow: "##ABFF67",
      raisingBlack: "##2D2931",
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
    extend: {},
  },
  plugins: [],
};
