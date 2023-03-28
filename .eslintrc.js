module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  env: {
    node: true,
    es2021: true,
  },
  parserOptions: {
    project: ['./tsconfig.eslint.json'],
    ecmaVersion: '6',
    sourceType: 'module',
  },
  rules: {
    '@typescript-eslint/no-namespace': 'off',
  },
};
