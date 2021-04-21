var config = require("./gulp/config.js");
var gulp = require("gulp");
var load = require("require-dir");
var development, production;

load("./gulp/tasks", { recurse: true });

development = [
  "copy-third_party",
  "copy-images",
  "copy-javascripts",
  "compile-sass"
];

production = [
  "copy-third_party",
  "copy-images",
  "minify-javascripts",
  "compile-sass"
];

// gulp.task("default", (callback) => {
//   console.log(process.env.NODE_ENV);
//   callback();
// });

gulp.task("default", gulp.parallel(config.env.IS_DEVELOPMENT ? development : production));