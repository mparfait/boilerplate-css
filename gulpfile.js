const gulp = require("gulp"),
      sass = require("gulp-sass"),
      postcss = require("gulp-postcss"),
      autoprefixer = require("autoprefixer"),
      cssnano = require("cssnano"),
      sassGlob = require('gulp-sass-glob'),
      sourcemaps = require("gulp-sourcemaps");

var paths = {
  styles: {
      src: "scss/styles.scss",
      dest: "css"
  }
};
	
function style() {
  return (
      gulp
          .src(paths.styles.src)
          .pipe(sourcemaps.init())
          .pipe(sassGlob())
          .pipe(sass())
          .on("error", sass.logError)
          .pipe(postcss([autoprefixer(), cssnano()]))
          .pipe(sourcemaps.write())
          .pipe(gulp.dest(paths.styles.dest))
  );
}

function watch(){
  gulp.watch(paths.styles.src, style)
}

// $ gulp watch
exports.watch = watch

// $ gulp style
exports.style = style;