let serveIndex = require('serve-index')

function middleRun(exp, app, root) {
  app.use(exp.static('static'))

  app.use(app.use('/', serveIndex('static/files', {'template': root + 'static/fileServe.html'})))
}