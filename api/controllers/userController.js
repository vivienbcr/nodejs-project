const jwt = require('jsonwebtoken');
const User = require('../models/userModels');
const config = require('../../config/secrets');
const bcrypt = require('bcrypt');

exports.user_register = function(req, res) {
	let new_user = new User(req.body);

	new_user.save(function(err, user) {
		if (err) res.send(err);
		res.json(user);
	});
};

exports.user_login = function(req, res) {
	User.findOne({ email: req.body.email }, function(err, user) {
		if (err) res.send(err);
		if (user.email === req.body.email && bcrypt.compareSync(req.body.password, user.password) == true) {
			jwt.sign(
				{ user: user },
				config.secrets.jwt_key,
				{
					expiresIn: '30 days'
				},
				(err, token) => {
					if (err) res.send(err);
					res.json({ token });
				}
			);
		} else {
			res.sendStatus(400);
		}
	});
};
