const { series } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function transformacaoJS(callback) {

  gulp.src('src/**/*.js')
    .pipe(babel({
      comments: false,
      presets: ['@babel/preset-env']
    }))
    .pipe(uglify())
    .pipe(concat('codigo.min.js'))
    .pipe(gulp.dest('build'))

  return callback()
}

function fim(cb) {
  console.log('Fim!')
  return cb()
}


exports.default = series(transformacaoJS, fim)
