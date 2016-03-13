module.exports = {
    entry: "./app/entry.tsx",
    output: {
        path: "./dist",
        filename: "index.js"
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,             
                loader: 'ts-loader'
            }
        ]
    }
};