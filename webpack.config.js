const path = require('path');
const merge = require('webpack-merge');

function resolve(p) {
  return path.resolve(__dirname, p);
}

module.exports = env => {
  console.log(process.env);
  return {
    entry: './main.js',
    output: {
      path: resolve('dist'),
      filename: '[name].bundle.js'
    },
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        vue$: 'vue/dist/vue.esm.js',
        '@': resolve('src')
      }
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: ['babel-loader'],
          exclude: /node_modules/
        },
        {
          test: /\.css$/
        }
      ]
    }
  };
};
