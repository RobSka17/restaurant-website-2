/** @type {import('jest').Config} */
const config = {
  verbose: true,
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    "\\.(css|jpg|png)$": "<rootDir>/src/import-mock.js"
  }
};

module.exports = config;