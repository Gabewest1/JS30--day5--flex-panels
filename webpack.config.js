let path = require("path")

module.exports = {
    entry: "./scripts/index.js",
    output: {
        path: "/",
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                enforce: "pre",
                enforce: "post",
                // flags to apply these rules, even if they are overridden (advanced option)
                
                loader: "babel-loader",
                // the loader which should be applied, it'll be resolved relative to the context
                // -loader suffix is no longer optional in webpack2 for clarity reasons
                // see webpack 1 upgrade guide
                include: [
                    path.resolve(__dirname, "scripts")
                  ],
                options: {
                  presets: ["es2015"]
                },
                // options for the loader
              },
        ]
    }
}