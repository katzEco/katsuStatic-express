function pageRun(app, root) {
  app.get('/mainCSS', (req, res) => {
    res.sendFile(root + '/static/staticPage/css/main.css')
  })
}

module.exports = {
  pageRun
}