const path = require('path')

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    mode: 'development',
    entry: './src/index.ts',
    output:{
        path: resolve('dist'),
        filename: 'RegExp.js',
        library: 'RegExp',
        libraryTarget: 'umd',
        publicPath: '/assets/'
    },
    resolve: {
        extensions: [ '.ts', '.js', '.tsx' ]
    },
    module:{
        rules:[
            {
                test: /\.tsx?$/,
                use: ['babel-loader','ts-loader'],
                include:[resolve('src'), resolve('__tests__')]
            },
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                include: [resolve('src'), resolve('__tests__')]
            }
        ]
    }
}