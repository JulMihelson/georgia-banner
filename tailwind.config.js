/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        "open-sans": ["Open Sans", "sans-serif"],
      },

      colors: {
        transparent: "transparent",
        current: "currentColor",
        accentRed: "#ff0000c4",
        redWine: "#2B0000",
        customRed: "#ff0000",
      },
      padding: {
        15: "60px",
      },
      maxWidth: {
        container: "1280px",
      },
      screens: {
        less: "280px",
        xxs: "374px",
        xs: "480px",
      },
      rotate: {
        45: "-45deg",
      },
      opacity: {
        77: "77%",
        55: "55%",
      },

      backdropBlur: {
        60: "60px",
      },
    },
  },
  plugins: [
    // require("@tailwindcss/forms"),
    // require("tailwind-hamburgers"),
    require("@tailwindcss/typography"),
  ],
};
