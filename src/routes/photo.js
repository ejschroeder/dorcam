const app			= require('../../app')
const express = require('express')

const ClassRegister = new (require('../../lib/register/classRegister.js'))()
const ControllerRegister = new (require('../../lib/register/controllerRegister.js'))()
const MiddlewareRegister = new (require('../../lib/register/middlewareRegister.js'))()

const RouteGroup = ClassRegister.use('routeGroup')
const PhotoController = ControllerRegister.use('photoController')

module.exports = [
  new RouteGroup({
    prefix: '/api'
  })
    .get('/photo', PhotoController.photo),
]
