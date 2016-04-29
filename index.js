module.exports = {
  extends: 'eslint-config-airbnb',
  env: {
    es6:   true,
    node:  true,
    mocha: true
  },
  rules: {

    // http://eslint.org/docs/rules/no-use-before-define
    no-use-before-define: [
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
    ]

  }
};
