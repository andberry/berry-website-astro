/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    colors: {
      white: "#FFFFFF",
      black0: "#000",
      lightgray: "#f2f3f6",
      mediumgray: "#d9dadd",
      darkgray: "#aaa",
      purple: "#5b21b6",
      pink: "#FF10F0",
      lime: "#90FF5D",
      black: "#1f1f1f",

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
      mono: ['"JetBrains Mono"', "monospace"],
      literata: ["Literata", "serif"],
      montserrat: ["Montserrat", "sans-serif"],
    },
    extend: {
      fontSize: {
        clamphero: "clamp(4rem, -1.75rem + 10vw, 7rem)",
        // clamph1: "clamp(3.2rem, -1.786rem + 9.762vw, 7rem)",
        clamph1: "clamp(2.625rem, 1.225rem + 3.5vw, 4.375rem)",
        // clamph2: "clamp(2.6rem, -1.714rem + 8.571vw, 6rem)",
        clamph2: "clamp(2.5rem, 1.1rem + 3.5vw, 4.25rem)",
        //clamph3: "clamp(2.2rem, -1.036rem + 6.429vw, 4.75rem)",
        clamph3: "clamp(1.5rem, 0.9rem + 1.5vw, 2.25rem)",
      },
      backgroundImage: {
        rgpointwhite: "radial-gradient(#aaaaaa 1px, transparent 0)",
        rgpointgreen: "radial-gradient(#7CFC00 1px, transparent 0)",
        rgpointpink: "radial-gradient(#EC058E 1px, transparent 0)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
