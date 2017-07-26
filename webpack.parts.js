//devserver
exprots.devServer = (
  { host, port } = {
    host: 'localhost',
    port: 8080
  }
) => ({
  devServer: {
    historyApiFallback: true,
    stats: 'errors-only',
    host,
    port,
    overlay: {
      errors: true,
      warnings: true
    },
    publicPath: '/dist/',
    proxy: {
      //config proxy
    }
  }
});

//lint
exprots.lintScript = (
  { include, exclude, options } = {
    exclude: /node_modules/,
    options: {
      formatter: require('eslint-friendly-formatter')
    }
  }
) => ({
  module: {
    rules: [
      {
        test: /.\js$/,
        include,
        exclude,
        enforce: 'pre',
        loader: 'eslint-loader',
        options
      }
    ]
  }
});
