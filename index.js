module.exports = {
  extends: 'eslint-config-airbnb',
  rules: {
    no-use-before-define: [2, { functions: false }],
    quotes: [2, "single", {"avoidEscape": true, "allowTemplateLiterals": true}]
  }
}
