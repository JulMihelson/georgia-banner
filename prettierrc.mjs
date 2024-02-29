/** @type {import("prettier").Config} */
export default {
  config: {
    bracketSpacing: false,
    trailingComma: "all",
    tabWidth: 2,
    semi: false,
    singleQuote: true,
  },
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
