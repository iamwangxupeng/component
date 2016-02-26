var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {

        app:path.join(__dirname, 'src'),
        vendors: ['react','reflux','react-mixin','jquery','bootstrap','swiper']
    },
    output: {
        
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test:/\.js?$/,
                exclude:/node_modules/,
                loader:'babel',
                query:{
                    presets:['react','es2015']
                },
            },
            { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
            { test: /\.css$/, loader: "style!css" },
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
        ]
    },
    //写死swiper的css引进路径
    resolve: {
        root: __dirname, //绝对路径
        extensions: ['', '.js', '.json', '.scss','css'],
        alias: {
            SwiCss : 'node_modules/swiper/dist/css/swiper.css',
        }
    },
    plugins: [
        // kills the compilation upon an error.
        // this keeps the outputed bundle **always** valid
        //先扫描jquery，否则引进bootstrap会出现问题
        new webpack.ProvidePlugin({
            css : 'SwiCss',
        }),
        new webpack.ProvidePlugin({
           $: "jquery",
           jQuery: "jquery"
       }),
        new webpack.NoErrorsPlugin(),
        //这个使用uglifyJs压缩你的js代码
        //new webpack.optimize.UglifyJsPlugin({minimize: true}),
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
    ]
};
