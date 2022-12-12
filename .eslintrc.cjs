module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'prettier',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  rules: {
    quotes: ['error', 'single', { avoidEscape: true }],
    semi: ['error', 'never'],
    curly: 'error',
    'comma-dangle': ['error', 'only-multiline'],
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-extra-semi': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'no-unused-vars': 'off',
  },
  parserOptions: {
    sourceType: 'module',
    project: './tsconfig.json',
    ecmaVersion: 2021,
  },
}
