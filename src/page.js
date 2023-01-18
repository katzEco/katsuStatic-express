function pageRun(app, root) {
  app.get('/mainCSS', (req, res) => {
    res.sendFile(root + '/static/staticPage/main.css')
  })
}

module.exports = {
  pageRun
}
