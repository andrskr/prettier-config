/** @typedef {import('@ianvs/prettier-plugin-sort-imports').PluginConfig} SortImportsConfig */
/** @typedef {import('prettier').Config} PrettierConfig */
/** @typedef {{ tailwindConfig: string }} TailwindConfig */

/** @type {PrettierConfig | SortImportsConfig | TailwindConfig} */
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
  plugins: [
    '@ianvs/prettier-plugin-sort-imports',
    'prettier-plugin-jsdoc',
    'prettier-plugin-tailwindcss',
  ],
  tailwindFunctions: ['cx', 'cva'],
  importOrderTypeScriptVersion: '4.4.0',
  importOrder: [
    '^(react/(.*)$)|^(react$)',
    '',
    '<THIRD_PARTY_MODULES>',
    '',
    '^~/lib/(.*)$',
    '^~/components/(.*)$',
    '^~/(.*)$',
    '',
    '^[./]',
  ],
};

export default config;
