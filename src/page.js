function pageRun(app, root) {
  app.get('/mainCSS', (req, res) => {
    res.sendFile(root + '/static/staticPage/css/main.css')
  })
  app.get('/mobileCSS', (req, res) => {
    res.sendFile(root + '/static/staticPage/css/mobile.css')
  })

  app.get('/about', (req, res) => {
    res.sendFile(root + '/static/staticPage/about.html')
  })
}

module.exports = {
  pageRun
}