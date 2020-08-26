/*
👋 Hi! This file was autogenerated by tslint-to-eslint-config.
https://github.com/typescript-eslint/tslint-to-eslint-config

It represents the closest reasonable ESLint configuration to this
project's original TSLint configuration.

We recommend eventually switching this configuration to extend from
the recommended rulesets in typescript-eslint. 
https://github.com/typescript-eslint/tslint-to-eslint-config/blob/master/docs/FAQs.md

Happy linting! 💖
*/
module.exports = {
    "env": {
        "es6": true
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "tsconfig.json",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        'import',
    ],
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking"
    ],
    "rules": {
        // rules turned off in upstream project (also required when recommended-requiring-type-checking is extended)
        '@typescript-eslint/explicit-function-return-type': "off",
        '@typescript-eslint/no-unsafe-assignment': "off",
        '@typescript-eslint/no-unsafe-call': "off",
        '@typescript-eslint/no-unsafe-member-access': "off",
        '@typescript-eslint/no-unsafe-return': "off",
        '@typescript-eslint/no-unnecessary-type-assertion': "off",
        '@typescript-eslint/restrict-plus-operands': "off",
        '@typescript-eslint/restrict-template-expressions': "off",
        // Support recommended-requiring-type-checking (specific to this project) set them as warning
        '@typescript-eslint/unbound-method': "warn",
        '@typescript-eslint/no-floating-promises': "warn",
        // Making affected recommended types as warning for now
        "@typescript-eslint/explicit-module-boundary-types": "warn",
        "@typescript-eslint/no-explicit-any": "warn",
        "@typescript-eslint/no-var-requires": "warn",
        "@typescript-eslint/no-unused-vars": "warn",
        "@typescript-eslint/ban-ts-comment": "warn",
        "@typescript-eslint/ban-types": "warn",
        "@typescript-eslint/no-inferrable-types": "warn",
        "@typescript-eslint/await-thenable": "error",
        "@typescript-eslint/dot-notation": "error",
        "@typescript-eslint/explicit-member-accessibility": [
            "error",
            {
                "accessibility": "no-public"
            }
        ],
        // "@typescript-eslint/member-ordering": "error",
        // "@typescript-eslint/naming-convention": "error",
        // "@typescript-eslint/no-param-reassign": "error",
        "@typescript-eslint/promise-function-async": "error",
        // "arrow-body-style": "error",
        "complexity": "error",
        "curly": [
            "error",
            "multi-line"
        ],
        "default-case": "error",
        "eqeqeq": [
            "error",
            "always"
        ],
        "import/no-extraneous-dependencies": "off",
        "import/order": "error",
        "no-console": "error",
        "no-duplicate-imports": "error",
        // "no-magic-numbers": "error",
        "no-return-await": "error",
        "no-undef-init": "error",
        "prefer-template": "error",
        "use-isnan": "error"
    }
};