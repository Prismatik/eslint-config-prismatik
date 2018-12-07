module.exports = {
  env: {
    es6: true,
    node: true,
    mocha: true,
  },
  plugins: ['mocha', 'prettier'],
  extends: ['airbnb', 'prettier'],
  rules: {
    // http://eslint.org/docs/rules/quotes
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],

    // http://eslint.org/docs/rules/comma-dangle
    'comma-dangle': [2, 'always-multiline'],

    // http://eslint.org/docs/rules/strict
    strict: [0],

    'mocha/no-exclusive-tests': 'error',

    'generator-star-spacing': [
      'error',
      {
        before: true,
        after: false,
      },
    ],

    // http://eslint.org/docs/rules/no-shadow
    // http://eslint.org/docs/rules/no-param-reassign
    // http://eslint.org/docs/rules/no-use-before-define
    'no-use-before-define': [
      2,
      {
        functions: false,
      },
    ],
    'no-param-reassign': [2, { props: false }],
    'no-unused-expressions': 'off',
    'no-mixed-operators': 'off',
    'no-confusing-arrow': 'off',
    'no-nested-ternary': 'off',
    'no-await-in-loop': 'off',
    'no-multi-assign': 'off',
    'no-else-return': 'off',
    'no-plusplus': 'off',
    'no-shadow': [0],

    'arrow-parens': 'off',
    'func-names': 0,

    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        singleQuote: true,
        printWidth: 100,
      },
    ],
    'max-len': [
      'error',
      {
        code: 100,
        comments: 100,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
  },
};
