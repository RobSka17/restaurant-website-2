/** @type {import('jest').Config} */
const config = {
  verbose: true,
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    "\\.(css)$": "<rootDir>/src/css-mock.js",
    "\\.(jpg)$": "<rootDir>/src/jpg-mock.js",
  }
};

module.exports = config;