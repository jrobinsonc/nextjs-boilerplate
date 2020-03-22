module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
  moduleNameMapper: {
    '^.+\\.(scss)$': 'babel-jest',
  },
  testRegex: '/.*\\.test\\.tsx?$',
};
