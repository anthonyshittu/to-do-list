module.exports = {
  clearMocks: true,
  setupFiles: ['<rootDir>/setupTests.js'],
  moduleNameMapper: {
    '\\.(svg)$':
      '<rootDir>/__mocks__/mocks.js',
    '\\.(css|less|scss)$': '<rootDir>/__mocks__/mocks.js',
  }
};