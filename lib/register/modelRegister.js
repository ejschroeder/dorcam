"use strict";

const Register = require('./_register');

module.exports = class ModelRegister extends Register {

	default_path () {
		return '../../src/models/';
	}

}

