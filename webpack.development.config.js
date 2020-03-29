module.exports = {
  mode: "development",
  entry: './src/index.ts',
  output: {
    filename: 'index.js',
  },
  devServer: {},
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
};

