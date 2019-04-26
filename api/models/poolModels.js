const mongoose = require("mongoose");

var Schema = mongoose.Schema;

var poolSchema = new Schema({
	name: {
		type: String,
		required: "Act like you know"
	},
	minedBlock: {
		type: Number
	}
});

module.exports = mongoose.model("Pool", poolSchema);
