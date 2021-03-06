const path = require("path");

module.exports = {
    entry: "./src/TypeScript/index.tsx",
    mode: "production",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader"
            }
        ]
    },
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "public/js"),
    },
    resolve: {
        extensions: [".js", ".ts", ".tsx"]
    }
};
