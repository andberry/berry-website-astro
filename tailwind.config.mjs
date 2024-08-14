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
      gray: "#aaa",
      darkgray: "#1e1e1e",
      purpledark: "#371370",
      pink: "#FF10F0", // 255,16,240
      lime: "#90FF5D", // 144,255,93
      black: "#151515",

      //
      ultraviolet: "#52489C",
      lightgreen: "#90EE90",
      pink2: "#EC058E",
      green: "#77FF94",
      greenyellow: "#ABFF67",
      raisingBlack: "#2D2931",

      // gradients
      pink3: "#FA66FF",
      purple: "#5b21b6", // 91,22,182
      grassGreen: "#7CFC00",
      grassGreenLight: "#75FF67",
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
      "screen-sm": "640px",
      "screen-md": "768px",
      "screen-lg": "1024px",
      "screen-xl": "1280px",
      "screen-2xl": "1440px",
      "screen-3xl": "1680px",
    },
    fontFamily: {
      exo2: ['"Exo 2"', "sans-serif"],
      mono: ['"JetBrains Mono"', "monospace"],
    },
    containers: {
      "3xs": "320px",
      "2xs": "384px",
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "1680px",
      "4xl": "1920px",
    },
    extend: {
      fontSize: {
        clamphero: "clamp(3.5rem, -1.75rem + 10vw, 7rem)",
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
      transitionTimingFunction: {
        outCubic: "cubic-bezier(0.33, 1, 0.68, 1)",
        outExpo: "cubic-bezier(0.16, 1, 0.3, 1)",
        outQuart: "cubic-bezier(0.25, 1, 0.5, 1)",
        outQuint: "cubic-bezier(0.22, 1, 0.36, 1)",
        inOutCubic: "cubic-bezier(0.65, 0, 0.35, 1)",
        inOutQuart: "cubic-bezier(0.76, 0, 0.24, 1)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/container-queries"),
  ],
};
