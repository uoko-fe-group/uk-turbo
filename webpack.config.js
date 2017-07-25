const path = require('path');

function resolve(p){
  return path.resolve(__dirname,p);
}

module.exports = env => {
  return {
    entry: './main.js',
    output: {
      filename: '[name].bundle.js'
    },
    resolve:{
      extensions:['.js','.vue','.json'],
      alias:{
        'vue$':'vue/dist/vue.esm.js',
        '@':resolve('src')
      }
    },
    module: {
      rules: [
        {
          test:/\.js$/,
          use:['babel-loader'],
          exclude:[resolve('./node_modules')]
        },
        {
          test: /\.css$/,
        }
      ]
    }
  };
};
