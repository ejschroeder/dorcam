const User = require('../../models/user');

module.exports = {
    /**
      * Display list of users.
      */
    index: function (req, res) {
        User.find({}, function(err, users) {
            res.json(users);
        });
    },

    /**
      * Display user by _id
      */
    show: function (req, res) {
        if (! req.params.id) {
            return res.json({
                success: false,
                message: 'Missing user id. User could not be found.'
            });
        }

        User.findOne({
            _id: req.params.id
        }, function(err, user) {
            if (err) throw err;

            if (user == null) {
                res.json({
                    success: false,
                    message: 'User could not be found.'
                })
            }

            res.json({
                success: true,
                user: {
                    username: user.username,
                    admin: user.admin
                }
            })
        })
    },

    /**
      * Create new user.
      */
    store: function (req, res) {
        if (! req.body.username || ! req.body.password || req.body.admin == null) {
            return res.json({
                success: false,
                message: 'Missing user information. User could not be created.'
            });
        }

        new User({
            username: req.body.username,
            password: req.body.password,
            admin: req.body.admin
        }).save(function(err) {
            if (err) throw err;

            res.json({
                success: true,
                message: 'New user has been created with username: ' + req.body.username
            });
        });
    },

    /**
      * Delete an existing user.
      */
    delete: function (req, res) {
        if (! req.params.id) {
            return res.json({
                success: false,
                message: 'Missing user id. User could not be deleted.'
            });
        }

        User.findOne({
            _id: req.params.id
        }, function(err, user) {
            if (err) throw err;

            if (user == null) {
                res.json({
                    success: false,
                    message: 'User could not be found.'
                })
            }

            new User(user).remove(function(err) {
                if (err) throw err;

                res.json({
                    success: true,
                    message: 'User has been removed.'
                })
            })
        });
    }
};
