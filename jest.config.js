module.exports = {
  automock: true,
  transform: {
    '^.+\\.js$': 'babel-jest'
  },

  setupFiles: [
    '<rootDir>/jest.setup.js'
  ]
}
