"use strict";

const Register = require('./_register');

module.exports = class MiddlewareRegister extends Register {

	default_path () {
		return '../../src/middleware/';
	}

}

