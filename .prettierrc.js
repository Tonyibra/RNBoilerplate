module.exports = {
  bracketSpacing: true,
  bracketSameLine: false,
  singleQuote: false,
  trailingComma: "all",
  tabWidth: 2,
  semi: true,
  importOrder: [
    "^@core/(.*)$",
    "<THIRD_PARTY_MODULES>",
    "^@server/(.*)$",
    "^@ui/(.*)$",
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  printWidth: 80,
};
