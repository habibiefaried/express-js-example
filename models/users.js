const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Users = new Schema({
	username: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	poin: {
		type: Number,
		required: true
	}
});

module.exports = mongoose.model('Users', Users)
