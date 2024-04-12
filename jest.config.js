module.exports = {
  preset: 'react-native',
  transform: {
    '^.+\\.tsx?$': 'ts-jest', // This line tells Jest to use ts-jest for tsx and ts files
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testMatch: ['**/__tests__/**/*.tsx', '**/?(*.)+(spec|test).tsx'], // Make sure this includes tsx files
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'], // Optional, for setting up testing library assertions
  globals: {
    'ts-jest': {
      babelConfig: true, // This option can use Babel alongside TypeScript
      diagnostics: false, // This can help if you have types in your tests that ts-jest considers errors
    },
  },
};
