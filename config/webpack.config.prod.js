const path = require('path');
module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: 'prod.js',
        path: path.resolve(__dirname, '../', 'build')
    }
}