const app			= require('../../../app')
const express 		= require('express')

const ClassRegister = new (require('../../../lib/register/classRegister.js'))()
const ControllerRegister = new (require('../../../lib/register/controllerRegister.js'))()
const MiddlewareRegister = new (require('../../../lib/register/middlewareRegister.js'))()

const RouteGroup = ClassRegister.use('routeGroup')
const AuthMiddleware = MiddlewareRegister.use('_auth/auth')
const LoginController = ControllerRegister.use('_auth/loginController')
const UserController = ControllerRegister.use('_auth/userController')

module.exports = [
  new RouteGroup({
    prefix: '/api'
  })
    .post('/login', LoginController.store),

  new RouteGroup({
    prefix: '/api/user',
    middleware: [
      AuthMiddleware.verifyToken
    ]
  })
    .get('/', UserController.index)
    .post('/', UserController.store)
    .get('/:id', UserController.show)
    .delete('/:id', UserController.delete)
]
