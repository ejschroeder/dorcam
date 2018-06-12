"use strict"

const express       = require('express')
const bodyParser    = require('body-parser')
const mongoose      = require('mongoose')
const config        = require('./config/config')
const middleware    = require('./src/middleware/_common/header')
const fs            = require('fs');

// App Configuration
const app = module.exports = express()

const Routes        = new (require('./lib/build/routes'))(app)
const RouteRegister = new (require('./lib/register/routeRegister.js'))()

if (!fs.existsSync(config.staticsDirectory)){
  fs.mkdirSync(config.staticsDirectory);
  fs.mkdirSync(config.staticsDirectory + '/images');
}

app.use(middleware.adjustHeaders)
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static(config.staticsDirectory))
app.set('superSecret', config.secret)

// register route files
Routes.build(
  RouteRegister.use('photo').concat(
    // RouteRegister.use('timelapse')  - additional routes
  )
)

// app.listen(process.env.PORT || 3000)
app.listen(3000)