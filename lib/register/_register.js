"use strict";

module.exports = class Register {

	default_path () {
		return '../../src/';
	}

	use (file_path) {
		return require(this.default_path() + file_path);
	}

}

