module.exports = {
  extends: 'eslint-config-airbnb',
  env: {
    es6:   true,
    node:  true,
    mocha: true
  },
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
        'avoidEscape': true,
        'allowTemplateLiterals': true
      }
    ],

    // http://eslint.org/docs/rules/comma-dangle
    'comma-dangle': [
      2, 'never'
    ],

    // http://eslint.org/docs/rules/no-shadow
    "no-shadow": [
      0
    ],

    // http://eslint.org/docs/rules/no-param-reassign
    "no-param-reassign": [
      2, { "props": false }
    ],

    // http://eslint.org/docs/rules/strict
    'strict': [
      0
    ]
  }
};
