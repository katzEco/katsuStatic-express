let serveIndex = require('serve-index')

function middleRun(exp, app, root) {
  app.use(exp.static('static'))

  app.use('/', serveIndex('static/files', {'template': root + '/static/staticPage/fileServe.html'}))
}

module.exports = {
  middleRun
}