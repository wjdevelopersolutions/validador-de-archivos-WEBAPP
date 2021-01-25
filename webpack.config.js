const path = require('path');

module.exports = {

    entry: [
        `${__dirname}/src/assets/js/index.js`,
        `${__dirname}/src/assets/scss/style.scss`
    ],
    output: {
        path: path.resolve(__dirname, 'src/public/js'),
        filename: 'bundle.js'
    },
    mode: 'development',
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ]
    }
      
}