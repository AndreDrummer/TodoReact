const path = require('path');

module.exports = {
    mode: 'development', // Modo de execução da aplicação
    entry: './src/index.jsx', // Arquivo de entrada do webpack
    output: {
        filename: 'bundle.js', // nome do arquivo
        path: path.resolve(__dirname + 'dist'), // caminho da pasta de saida dos arquivos gerados pelo webpack durante o build
        publicPath: '',
    },
    devtool: 'inline-source-map',
    devServer: {
        historyApiFallback: true,
        port: 8080, // Porta do servidor de desenvolvimento
        contentBase: './public', // nome da pasta de onde ler os arquivos para servir
    },
    resolve: {
        extensions: ['.js', '.jsx'], // As extensões que o webpack por padrão não resolve, mas neste app deve resolver 
        alias: {
            modules: __dirname + '/node_modules' // apelido para a pasta node_modules
        }
    },
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
                use: ['style-loader', 'css-loader'] // loaders css
            },
            {
                test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/, // extensões para arquivos
                use: ['file-loader'] // loader de arquivos
            }
        ]
    }
}