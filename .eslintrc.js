/**
 * Typescript configs
 * https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/src/configs.
 */

const prettierOptions = require('./.prettierrc.js');

module.exports = {
  root: true,

  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2019,
    ecmaFeatures: {
      impliedStrict: true,
    },
  },

  env: {
    jest: true,
    browser: true,
    es6: true,
  },

  plugins: ['babel', 'prettier', 'promise', 'jsdoc'],

  extends: [
    'airbnb',
    'plugin:promise/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier',
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    'prettier/babel',
  ],

  ignorePatterns: ['!/.*.js'],

  /**
   * Only rules that can break the app should be marked as 'error'.
   * See: <https://eslint.org/docs/user-guide/configuring#configuring-rules>.
   */
  rules: {
    // These rules are defined as 'warn' becuase they're automatically
    // removed when building for production thru babel plugins.
    // See the file `.babelrc.js`.
    'no-console': 'warn',
    'no-debugger': 'warn',

    // Defined as 'warn' because it doesn't cause any problems when
    // the app is running.
    'no-unused-vars': 'warn',
    'no-warning-comments': 'warn',
    'prefer-const': 'warn',

    // https://github.com/gajus/eslint-plugin-jsdoc
    'jsdoc/check-param-names': 'warn',
    'jsdoc/check-tag-names': 'warn',
    'jsdoc/check-types': 'warn',
    'jsdoc/newline-after-description': 'warn',
    'jsdoc/no-undefined-types': 'warn',
    'jsdoc/require-description-complete-sentence': 'warn',
    'jsdoc/require-description': 'off',
    'jsdoc/require-jsdoc': 'off',
    'jsdoc/require-param-description': 'warn',
    'jsdoc/require-param-name': 'warn',
    'jsdoc/require-param-type': 'warn',
    'jsdoc/require-param': 'warn',
    'jsdoc/require-returns-check': 'warn',
    'jsdoc/require-returns-type': 'warn',
    'jsdoc/require-returns': 'warn',
    'jsdoc/valid-types': 'warn',

    'prettier/prettier': ['warn', prettierOptions],

    'promise/always-return': 'warn',
    'promise/catch-or-return': 'warn',

    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.test.tsx', '**/*.js', '!src/**/*.js'],
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        tsx: 'never',
        ts: 'never',
      },
    ],
  },

  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      alias: {
        map: [['@app', './src']],
        extensions: ['.ts', '.tsx'],
      },
    },
  },

  overrides: [
    {
      files: ['*.js'],
      rules: {
        'no-param-reassign': 'off',
      },
    },
    {
      files: ['src/**/*.tsx', 'src/**/*.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
      },
      plugins: ['@typescript-eslint'],
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
      ],
      rules: {
        'no-use-before-define': 'off', // Disable this rule in favor of @typescript-eslint/no-use-before-define
        '@typescript-eslint/no-use-before-define': 'error',
        
        'no-shadow': 'off', // Disable this rule in favor of @typescript-eslint/no-shadow
        '@typescript-eslint/no-shadow': 'error',
        
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-empty-function': 'warn',
      },
    },
    {
      files: ['src/**/*.tsx'],
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      plugins: ['react', 'jsx-a11y', 'react-hooks'],
      extends: [
        'plugin:jsx-a11y/recommended',
        'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
        'prettier/react',
      ],
      rules: {
        'jsx-a11y/anchor-is-valid': 'off', // This should not be validated because we are using the next/link component.
        'jsx-a11y/label-has-associated-control': [
          'warn',
          {
            labelComponents: ['label'],
            labelAttributes: ['htmlFor'],
            controlComponents: ['input'],
            depth: 3,
          },
        ],
        'jsx-a11y/no-static-element-interactions': 'warn',

        // React-specific rules.
        'react/destructuring-assignment': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/react-in-jsx-scope': 'off', // NextJS doesn't require to import React into each component.
        'react/jsx-filename-extension': [
          'error',
          {
            extensions: ['.tsx'],
          },
        ],
        'react/prop-types': 'off', // This is done with TypeScript.

        // React Hooks
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
      },
    },
  ],
};
