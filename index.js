module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint-config-airbnb",
    "@tammergard/eslint-config-base",
    "plugin:@typescript-eslint/eslint-plugin/recommended",
    "plugin:eslint-plugin-prettier/recommended",
    "plugin:eslint-plugin-react/jsx-runtime",
  ],
  rules: {
    "react/require-default-props": "off",
    "react/jsx-filename-extension": ["error", { extensions: [".tsx"] }],
    "@typescript-eslint/explicit-module-boundary-types": "off",
  },
}
