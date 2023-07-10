/* eslint-env node */

module.exports = {
  trailingComma: "all",
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  printWidth: 120,
  bracketSpacing: true,
  endOfLine: "lf",
  plugins: [require("prettier-plugin-tailwindcss")],
};
