import js from '@eslint/js';
import importPlugin from 'eslint-plugin-import';

export default [
  js.configs.recommended,
  {
    files: ['**/*.ts'],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json'
      }
    },
    plugins: {
      import: importPlugin
    },
    rules: {
      'import/order': ['error', { 'newlines-between': 'always' }]
    }
  }
];