/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const prettierConfig = {
  bracketSpacing: true,
  bracketSameLine: false,
  endOfLine: 'lf',
  printWidth: 80,
  tabWidth: 2,
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'always',
  semi: false,
  plugins: ['prettier-plugin-tailwindcss'],
}

export default prettierConfig
