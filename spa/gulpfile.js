const gulp = require('gulp')
const { series, parallel } = require('gulp')

const { appHTML, appCSS, appJS, appIMG} = require('./gulpTasks/app')
const { dependeciesCSS, dependenciesFonts} = require('./gulpTasks/dependencies')
const { monitorarArquivos, server} = require('./gulpTasks/server')


module.exports.default = series(
  parallel(
    series(appHTML, appCSS, appJS, appIMG),  
    series(dependeciesCSS, dependenciesFonts)
  ),
  server,
  monitorarArquivos
)