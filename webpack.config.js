const path = require('path');

module.exports = {
    entry: './src/index.js', // Entry point for JS
    output: {
      path: path.resolve(__dirname, 'dist'), // Output directory
      filename: 'bundle.js', // JS file name
    },
    devServer: {
      static: {
        directory: path.resolve(__dirname, 'src'), // Serve static files from "src"
      },
      hot: true, // Enable hot module replacement
      open: true, // Open browser automatically
      port: 3000, // Optional: Set a custom port
    },
    module: {
      rules: [
        {
          test: /\.html$/, // Process HTML files
          use: ['html-loader'],
        },
      ],
    },
    mode: 'development', // Development mode for better debugging
  };