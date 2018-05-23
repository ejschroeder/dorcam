"use strict";

const Register = require('./_register');

module.exports = class RouteRegister extends Register {

	default_path () {
		return '../../src/routes/';
	}

}

