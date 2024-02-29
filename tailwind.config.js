/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        "open-sans": ["Open Sans", "sans-serif"],
      },
      lineHeight: {
        140: "140%",
      },
      spacing: {
        17: "4.25rem",
        13: "3.25rem",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        accentRed: "#ff0000c4",
        redWine: "#2B0000",
      },
      padding: {
        15: "60px",
      },
      maxWidth: {
        container: "1280px",
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [
    // require("@tailwindcss/forms"),
    // require("tailwind-hamburgers"),
    require("@tailwindcss/typography"),
  ],
};
