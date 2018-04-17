module.exports = {
    env: {
        node: true,
        es6: true,
    },
    extends: ["eslint:recommended", "google", "prettier"],
    parserOptions: {
        ecmaVersion: 6,
        sourceType: "module",
    },
    rules: {
        "comma-dangle": ["error", "always-multiline"],
        "no-console": "off",
        "no-invalid-this": "off",
        "no-var": "off",
        "require-jsdoc": "off",
    },
};
