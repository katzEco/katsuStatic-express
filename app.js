let exp = require('express')

let { middleRun } = require('./src/middleware')
let { pageRun } = require('./src/page')
let { portRun } = require('./src/port')

let app = exp();

middleRun(exp, app, __dirname)
pageRun(app, __dirname)
portRun(app, 1980)