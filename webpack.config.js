module.exports = {
  entry: {
    bundle: './src/index.js',
  },
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js',
  },
  mode: 'development',
  resolve: {
    extensions: ['.js'],
  },
  devServer: {
    static: {
      directory: `${__dirname}/dist`,
    },
    open: true
  },
};
