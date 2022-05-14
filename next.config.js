/**
 * NextJS configuration file.
 *
 * @see https://nextjs.org/docs#usage
 */

const webpackConfig = require('./webpack.config.js');
const packageJson = require('./package.json');

module.exports = {
  reactStrictMode: true,

  env: {
    BUILD_TIME: new Date().toISOString(),
    APP_NAME: packageJson.name,
    APP_DESCRIPTION: packageJson.description,
    APP_VERSION: packageJson.version,
  },

  webpack(config) {
    return webpackConfig({ config });
  },
};
