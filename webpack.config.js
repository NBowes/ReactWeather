module.exports = {
    //start processing here
    entry: './app/app.jsx',
    output: {
        // __dirname gives you the path to the file you are in
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve:{
        root: __dirname,
        alias:{
            Main: 'app/components/Main.jsx',
            Nav: 'app/components/Nav.jsx',
            Weather: 'app/components/Weather.jsx',
            About: 'app/components/About.jsx',
            Examples: 'app/components/Examples.jsx',
            WeatherForm: 'app/components/WeatherForm.jsx',
            WeatherMessage: 'app/components/WeatherMessage.jsx',
            openWeatherMap: 'app/api/openWeatherMap.jsx'
        },
        extensions:['','.js','.jsx']
    },
    module: {
        loaders: [{
            loader: "babel-loader",
            query:{
                presets:['react', 'es2015']
            },
            test: /\.jsx?$/,
            exculde: /(node_modules|bower_components)/
        }]
    },
    devtool: 'cheap-module-eval-source-map'
};