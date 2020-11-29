/**
 * NextJS configuration file.
 *
 * @see https://nextjs.org/docs#usage
 */

const withSass = require('@zeit/next-sass');
const withSourceMaps = require('@zeit/next-source-maps');
const webpackConfig = require('./webpack.config');
const packageJson = require('./package.json');

const date = new Date();

module.exports = withSourceMaps(
  withSass({
    env: {
      BUILD_TIME: date.toString(),
      BUILD_TIMESTAMP: +date,
      APP_NAME: packageJson.name,
      APP_VERSION: packageJson.version,
    },

    // We can ignore Typescript issues detected by NextJS because we are
    // using ESLint to do the validation.
    typescript: {
      ignoreDevErrors: false,
      ignoreBuildErrors: false,
    },

    webpack(config, options) {
      return webpackConfig({ config, options });
    },
  }),
);
