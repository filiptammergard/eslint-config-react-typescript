module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint-config-airbnb",
    "plugin:@typescript-eslint/eslint-plugin/recommended",
    "plugin:eslint-plugin-react/jsx-runtime",
    "@tammergard/eslint-config-base", // keep last to override rules from other configs and plugins
  ],
  rules: {
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "react/jsx-filename-extension": ["error", { extensions: [".tsx"] }],
    "react/require-default-props": "off",
  },
}
