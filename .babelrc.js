const isDev = process.env.NODE_ENV !== 'production';

const presets = [
  [
    'next/babel',
    {
      'preset-env': {
        debug: isDev,
      },
      'preset-react': {
        development: isDev,
      },
      'preset-typescript': {
        isTSX: true,
        allExtensions: true,
      },
    },
  ],
];
const plugins = ['preval'];

/**
 * Configuration for production.
 */
if (!isDev) {
  plugins.push('transform-remove-debugger');
  plugins.push('transform-node-env-inline');
  plugins.push('transform-remove-console');
}

module.exports = {
  presets,
  plugins,
};
