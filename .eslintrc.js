module.exports = {
  env: {
    jest: true,
    'cypress/globals': true,
  },
  rules: {
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
    'cypress/no-assigning-return-values': 'error',
    'cypress/no-unnecessary-waiting': 'warn',
    'cypress/assertion-before-screenshot': 'warn',
    'cypress/no-force': 'warn',
  },
};
