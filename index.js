module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint-config-airbnb",
    "plugin:@typescript-eslint/eslint-plugin/recommended",
    "plugin:eslint-plugin-react/jsx-runtime",
    "@tammergard/eslint-config-base", // keep last to override rules from other configs and plugins
  ],
  rules: {
    "react/require-default-props": "off",
    "react/jsx-filename-extension": ["error", { extensions: [".tsx"] }],
    "@typescript-eslint/explicit-module-boundary-types": "off",
  },
}
