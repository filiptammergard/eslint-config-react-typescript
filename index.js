module.exports = {
	parser: "@typescript-eslint/parser",
	extends: [
		"eslint-config-airbnb",
		"plugin:eslint-plugin-react/jsx-runtime",
		"@tammergard/eslint-config-base",
		"plugin:@typescript-eslint/eslint-plugin/recommended",
	],
	rules: {
		"@typescript-eslint/explicit-module-boundary-types": "off",
		"react/jsx-filename-extension": ["error", { extensions: [".tsx"] }],
		"react/jsx-props-no-spreading": "off",
		"react/require-default-props": "off",
	},
}
