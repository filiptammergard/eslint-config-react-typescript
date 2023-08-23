module.exports = {
	extends: [
		"eslint-config-airbnb",
		"plugin:eslint-plugin-react/jsx-runtime",
		"@tammergard/eslint-config-base",
		"plugin:@typescript-eslint/eslint-plugin/recommended-type-checked",
		"plugin:@typescript-eslint/eslint-plugin/stylistic-type-checked",
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		project: true,
	},
	rules: {
		"@typescript-eslint/explicit-module-boundary-types": "off",
		"react/jsx-filename-extension": ["error", { extensions: [".tsx"] }],
		"react/jsx-props-no-spreading": "off",
		"react/require-default-props": "off",
	},
}
