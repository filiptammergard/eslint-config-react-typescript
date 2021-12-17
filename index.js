module.exports = {
  extends: [
    "@tammergard/eslint-config-base",
    "eslint-config-airbnb",
    "plugin:eslint-plugin-react/jsx-runtime",
    "plugin:@typescript-eslint/eslint-plugin/recommended",
  ],
  rules: {
    "react/require-default-props": "off",
    "react/jsx-filename-extension": ["error", { extensions: [".tsx"] }],
    "@typescript-eslint/explicit-module-boundary-types": "off",
  },
}
