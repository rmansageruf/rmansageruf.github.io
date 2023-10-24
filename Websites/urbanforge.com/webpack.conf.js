var webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    bail: true,
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                include: /(assets\/js|assets\\js|node_modules\/@bigcommerce\/stencil-utils|node_modules\\@bigcommerce\\stencil-utils)/,
                query: {
                    compact: false,
                    cacheDirectory: true,
                    presets: ['es2015-loose'],
                }
            },
            {
                test: /\.js$/,
                loader: 'script',
                include: /assets\/vendor/,
                exclude: /assets\/vendor\/lightbox2/
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
                include: /assets\/vendor|assets\\vendor/
            },
            {
                test: /(\.png|\.gif)$/,
                loader: 'url-loader',
                include: /assets\/vendor|assets\\vendor/
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        })
    ],
    watch: false
};
