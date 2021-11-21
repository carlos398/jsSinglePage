const HTMLWebpackPlugin = require('html-webpack-plugin')


module.exports ={
    mode: 'production',
    entry: './src/main.js',
    output:{
        path: __dirname + '/dist',
        filename:'bundle.js'
    },

    module: {
        rules:[
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],

            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader', 
                    'css-loader', 
                    'sass-loader'
                ],
            },
            {
                test: /\.html$/i,
                use: ['html-loader'],
            },
        ]
    },

    plugins: [
        new HTMLWebpackPlugin({
            template:'./src/index.html'
        })
    ]
}