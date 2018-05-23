const express 	= require('express')
const config		= require('../../../config/config')

module.exports = {
	adjustHeaders: function(req, res, next) {
		
		var allowedOrigins = (process.env.NODE_ENV === 'production')
			? config.prod.origins
			: config.dev.origins

		var origin = req.headers.origin

		if (allowedOrigins.indexOf(origin) > -1) {
	  	res.setHeader('Access-Control-Allow-Origin', origin)
		}

	  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
	  res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS")
	  next()
	}
}
