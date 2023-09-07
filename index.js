/** @typedef {import('prettier').Config} PrettierConfig */
/** @typedef {{ tailwindConfig: string }} TailwindConfig */

/** @type {PrettierConfig | TailwindConfig} */
const config = {
  arrowParens: 'always',
  bracketSpacing: true,
  insertPragma: false,
  bracketSameLine: false,
  jsxSingleQuote: false,
  printWidth: 100,
  proseWrap: 'preserve',
  quoteProps: 'as-needed',
  requirePragma: false,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,
  endOfLine: 'auto',
  plugins: ['prettier-plugin-jsdoc', 'prettier-plugin-tailwindcss'],
  tailwindFunctions: ['cx', 'cva'],
};

export default config;
