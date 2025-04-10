const gulp = require('gulp')
const uglifyCSS = require('gulp-uglifycss')
const concat = require('gulp-concat')


function dependeciesCSS() {
  return gulp.src('node_modules/font-awesome/css/font-awesome.css')
  .pipe(uglifyCSS({ "ugglyComments": false }))
  .pipe(concat('deps.min.css'))
  .pipe(gulp.dest('build/assets/css'))
}

function dependenciesFonts() {
  return gulp.src('node_modules/font-awesome/fonts/*.*')
  .pipe(gulp.dest('build/assets/fonts'))
}

module.exports = {
  dependeciesCSS,
  dependenciesFonts
}