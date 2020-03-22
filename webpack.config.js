/**
 * Webpack configuration for NextJS.
 *
 * @see https://nextjs.org/docs#customizing-webpack-config
 */

const path = require('path');

const rootDir = __dirname;

module.exports = ({ config }) => {
  config.resolve.alias = {
    ...config.resolve.alias,
    '@app': path.join(rootDir, '.', 'src'),
  };

  return config;
};
