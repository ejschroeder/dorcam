const app			= require('../../app')
const express 		= require('express')

const ClassRegister = new (require('../../lib/register/classRegister.js'))()
const ControllerRegister = new (require('../../lib/register/controllerRegister.js'))()
const MiddlewareRegister = new (require('../../lib/register/middlewareRegister.js'))()

const RouteGroup = ClassRegister.use('routeGroup')
const AuthMiddleware = MiddlewareRegister.use('_auth/auth')
const BaseController = ControllerRegister.use('baseController')

module.exports = [
  new RouteGroup({
    prefix: '/api/'
  })
    .get('/', BaseController.index),

  new RouteGroup({
    prefix: '/api/protected',
    middleware: [
      AuthMiddleware.verifyToken
    ]
  })
    .get('/', BaseController.protected)
]
