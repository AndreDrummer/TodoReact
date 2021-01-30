const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development', // Modo de execução da aplicação
    entry: './src/index.jsx', // Arquivo de entrada do webpack
    output: {
        publicPath: '',
        path: path.resolve(__dirname + 'dist'), // caminho da pasta de saida dos arquivos gerados pelo webpack durante o build
        filename: 'bundle.js' // nome do arquivo
    },
    devtool: 'inline-source-map',
    devServer: {
        port: 8080, // Porta do servidor de desenvolvimento
        contentBase: './public', // nome da pasta de onde ler os arquivos para servir
    },
    resolve: {
        extensions: ['.js', '.jsx'], // As extensões que o webpack por padrão não resolve, mas neste app deve resolver 
        alias: {
            modules: __dirname + '/node_modules' // apelido para a pasta node_modules
        }
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: 'app.css' }),
    ],
    module: {
        rules: [
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.css$/i, // extensoes de css para loader
                use: [MiniCssExtractPlugin.loader, 'css-loader'] // loaders css
            },
            {
                test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/, // extensões para arquivos
                use: ['file-loader'] // loader de arquivos
            }
        ]
    }
}