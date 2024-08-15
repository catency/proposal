/** @type {import('prettier').Config} */
const prettierConfig = {
  trailingComma: "all",
  tabWidth: 2,
  printWidth: 120,
  singleQuote: true,
  semi: true,
  bracketSpacing: true,
  bracketSameLine: false,
  endOfLine: "lf",
  plugins: ["prettier-plugin-tailwindcss"],
};

export default prettierConfig;