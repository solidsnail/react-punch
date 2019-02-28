
module.exports = {
    entry: __dirname + '/src/lib/index.js',
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
        'react': 'react',
        'react-dom': 'react-dom',
        'emotion': 'emotion',
        'polished': 'polished'
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        library: 'copycat-ui',
        libraryTarget: 'umd',
        filename: 'index.js',
    },
};