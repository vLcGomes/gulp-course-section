const gulp = require('gulp')
const series = gulp.series

function copiar(cb) {
  console.log('Tarefa de copiar!')
  return cb()
}

exports.default = series(copiar)