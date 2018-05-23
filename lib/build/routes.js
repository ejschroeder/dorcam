"use strict"

const app = require('../../app')

class Routes {
  /**
   * Create new instance of RouteGroup class
   */
  constructor (app) {
    this.app = app
  }

  /**
   * Build routes list
   */
  build (routeGroups) {
    routeGroups.forEach(function (routeGroup) {
      this.app.use(routeGroup.getPrefix(), routeGroup.getExpressRouter())
    }.bind(this))
  }
}

module.exports = Routes