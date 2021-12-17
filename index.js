module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "@tammergard/eslint-config-base",
    "eslint-config-airbnb",
    "plugin:@typescript-eslint/eslint-plugin/recommended",
    "plugin:eslint-plugin-prettier/recommdended",
    "plugin:eslint-plugin-react/jsx-runtime",
  ],
  rules: {
    "react/require-default-props": "off",
    "react/jsx-filename-extension": ["error", { extensions: [".tsx"] }],
    "@typescript-eslint/explicit-module-boundary-types": "off",
  },
}
