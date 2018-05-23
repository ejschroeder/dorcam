"use strict";

const Register = require('./_register');

module.exports = class ControllerRegister extends Register {

	default_path () {
		return '../../src/controllers/';
	}

}

