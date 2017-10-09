module.exports = {
  env: {
    es6: true,
    node: true,
    mocha: true
  },
  plugins: ['mocha', 'prettier'],
  extends: ['eslint-config-airbnb', 'prettier'],
  rules: {
    // http://eslint.org/docs/rules/no-use-before-define
    'no-use-before-define': [
      2,
      {
        functions: false
      }
    ],

    // http://eslint.org/docs/rules/quotes
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],

    // http://eslint.org/docs/rules/comma-dangle
    'comma-dangle': [2, 'never'],

    // http://eslint.org/docs/rules/no-shadow
    'no-shadow': [0],

    // http://eslint.org/docs/rules/no-param-reassign
    'no-param-reassign': [2, { props: false }],

    // http://eslint.org/docs/rules/strict
    strict: [0],

    'mocha/no-exclusive-tests': 'error',

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
    'react/prefer-stateless-function': [1],

    'react/require-extension': 'off',

    'generator-star-spacing': [
      'error',
      {
        before: true,
        after: false
      }
    ],

    'jsx-a11y/href-no-hash': 'off',

    'no-await-in-loop': 'off',
    'no-multi-assign': 'off',
    'arrow-parens': 'off',
    'no-plusplus': 'off',
    'func-names': 0,

    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        printWidth: 100
      }
    ],
    'max-len': [
      'error',
      {
        code: 100,
        comments: 80,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true
      }
    ]
  }
};
