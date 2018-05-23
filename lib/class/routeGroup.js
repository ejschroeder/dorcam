"use strict"

const express = require('express')

class RouteGroup {
	/**
	 * Create new instance of RouteGroup class
	 */
	constructor (options) {
		this.expressRouter = express.Router()
		this.options = Object.assign({
			prefix: '/',
			middleware: []
		}, options ? options : {})

		this.useMiddleware()
		
		return this
	}

	getExpressRouter () {
		return this.expressRouter
	}

	useMiddleware () {
		this.getMiddleware().forEach(function (middleware) {
			this.expressRouter.use(middleware)
		}.bind(this))
	}

	/**
	 * Get an array of all middleware for route group
	 */
	getMiddleware () {
		return this.options.middleware
	}

	/**
	 * Get the prefix for route group
	 */
	getPrefix () {
		return this.options.prefix
	}

	/**
	 * Create route with method GET
	 * @param  {String} route              		Route string
	 * @param  {Function} controllerFunction 	Callback to be applied to route
	 * @return {Route}                    		Self
	 */
	get (route, controllerFunction) {
		this.expressRouter.get(route, controllerFunction)
		return this
	}

	/**
	 * Create route with method POST
	 * @param  {String} route              		Route string
	 * @param  {Function} controllerFunction 	Callback to be applied to route
	 * @return {Route}                    		Self
	 */
	post (route, controllerFunction) {
		this.expressRouter.post(route, controllerFunction)
		return this
	}

	/**
	 * Create route with method PUT
	 * @param  {String} route              		Route string
	 * @param  {Function} controllerFunction 	Callback to be applied to route
	 * @return {Route}                    		Self
	 */
	put (route, controllerFunction) {
		this.expressRouter.put(route, controllerFunction)
		return this
	}

	/**
	 * Create route with method PATCH
	 * @param  {String} route              		Route string
	 * @param  {Function} controllerFunction 	Callback to be applied to route
	 * @return {Route}                    		Self
	 */
	patch (route, controllerFunction) {
		this.expressRouter.patch(route, controllerFunction)
		return this
	}

	/**
	 * Create route with method DELETE
	 * @param  {String} route              		Route string
	 * @param  {Function} controllerFunction 	Callback to be applied to route
	 * @return {Route}                    		Self
	 */
	delete (route, controllerFunction) {
		this.expressRouter.delete(route, controllerFunction)
		return this
	}
}

module.exports = RouteGroup
