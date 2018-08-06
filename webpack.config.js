var path = require('path');
var root = __dirname;

const config = {
    entry: path.resolve(root, 'app/main.js'),
    output: {
        path: path.resolve(root, 'dist'),
        filename:'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        alias: {
            Vue: 'vue/dist/vue.js'
        }
    },
};

module.exports=config;