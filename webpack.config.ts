
import path from 'path';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const WebpackMessages = require('webpack-messages');

module.exports = {
  
  mode: 'development',
  entry: {
    main: './src/index.ts',
    style: './src/css/style.scss',
  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new WebpackMessages({
      name: 'client',
      logger: (str:string) => console.log(`>> ${str}`)
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
    new CopyPlugin({
      patterns: [
        {from: "src/images", to: "images"},
        {from: "src/fonts", to: "fonts"},
        {from: "src/sections", to: "sections"},
        {from: "src/templates", to: "templates"},
        {from: "src/fields.json", to: "fields.json"},
        {from: "src/theme.json", to: "theme.json"},
        {from: "src/css/*.css", to: "css/[name].css"},
      ]
    })
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin({
          exclude: [
            'css/theme-overrides.css',
          ]
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        include: path.resolve(__dirname, 'src/css'),
        exclude: '/node_modules/',
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },

};
