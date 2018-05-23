const app		= require('../../../app');
const User 		= require('../../models/user');
const jwt    	= require('jsonwebtoken');

module.exports = {
	/**
	  * Login and authenicate user. Will return JWT token if user is authorized.
	  */
    store: function (req, res) {
		User.findOne({
		  username: req.body.username
		}, function(err, user) {
		  if (err) throw err;

		  if (!user) {
		    res.json({ success: false, message: 'Authentication failed. User not found.' });
		  } else if (user) {

		      if (user.password != req.body.password) {
		        res.json({ success: false, message: 'Authentication failed. Wrong password.' });
		      } else {

		        var token = jwt.sign(user, app.get('superSecret'), {
		          expiresIn: 1440 // expires in 24 hours
		        });

		        res.json({
		          success: true,
		          message: 'Enjoy your token!',
		          token: token,
		          user: {
		            id: user._id,
		            username: user.username
		          }
		        });
		      }
		  }
		});
    }
};
