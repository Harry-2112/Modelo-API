const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
	nomb_cliente: {
		type: String,
		require: true,
	},
	telefono: {
		type: Number,
		require: true,
	},
	ciudad: {
		type: String,
		require: true,
	},
	calle: {
		type: String,
		require: true,
	},
	numero: {
		type: Number,
		require: true,
	},
	estado: {
		type: String,
		require: true,
	},
	fecha_nacimiento: {
		type: String,
		require: true,
	},
});

module.exports = mongoose.model("User", userSchema);
