const mongoose = require('mongoose');
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

module.exports = mongoose.model('User', userschema);
