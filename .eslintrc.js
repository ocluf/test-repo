module.exports = {
  env: {
    node: true,
    es6: true,
    jest: true,
    browser: true
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module'
  },
  rules: {
    'indent': ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
    'no-unused-vars': ['warn', { 'argsIgnorePattern': '^_' }],
    'no-trailing-spaces': 'error',
    'eol-last': ['error', 'always'],
    'arrow-spacing': 'error',
    'no-var': 'error',
    'prefer-const': 'warn',
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    'comma-dangle': ['error', 'never'],
    'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 1 }]
  }
};
