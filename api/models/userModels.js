const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;

var Schema = mongoose.Schema;
var userschema = new Schema({
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		require: true
	}
});

userschema.pre('save', function(next) {
	console.log(this)
  hashedPassword = bcrypt.hashSync(this.password, saltRounds);
  this.password = hashedPassword;
  next();
});

module.exports = mongoose.model('User', userschema);
