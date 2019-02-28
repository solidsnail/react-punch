
const path = require('path');
module.exports = {
    entry: __dirname + '/src/docs/index.js',
    output: {
        path: __dirname + '/docs',
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    resolve: {
        alias: {
            react: path.resolve('./node_modules/react'),
            "copycat-ui": path.resolve(__dirname, 'src/lib')
        }
    },
    devServer: {
        contentBase: './docs',
        open: true,
        // host: '0.0.0.0',
        port: 3000
    }
};