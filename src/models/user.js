var mongoose = require('mongoose');

var User = {
    username:  String,
    password: String,
    admin: Boolean
};

module.exports = mongoose.model('User', new mongoose.Schema(User));

