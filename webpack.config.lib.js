
module.exports = {
    entry: __dirname + '/src/index.js',
    devtool: 'inline-source-map',
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
    externals: {
        'react': 'react'
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        library: 'react-punch',
        libraryTarget: 'umd',
        filename: 'index.js',
    },
};