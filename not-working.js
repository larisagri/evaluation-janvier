//// Gulp task

gulp.task ('custom-css', function ()  {
  gulp.src ('src/*.css')
      .pipe (concat('custom.css'))
      .pipe (gulp.dest('build'));
});



//// Loader Webpack

var moduleWithOneLoader = require("my-loader!./my-awesome-module");

{
    module: {
        loaders: [
            { test: /\.coffee$/, loader: "coffee-loader" }
        ],
        preLoaders: [
            { test: /\.coffee$/, loader: "coffee-hint-loader" }
        ]
    }
};


//// React module
