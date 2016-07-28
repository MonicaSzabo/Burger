var connection = require('../config/connection.js');

var orm = {
	selectAll: function(table, cb) {
		var queryString = "SELECT * FROM " + table + ";";
		connection.query(queryString, function(err, result) {
			if(err) throw err;
			cb(result);
		});
	},
	insertOne: function(table, prop, info, cb) {
		var queryString = "INSERT INTO " + table + " (" + prop.toString() + ") VALUES ('" + info + "');";
		connection.query(queryString, function(err, result) {
			if(err) throw err;
			cb(result);
		});
	},
	updateOne: function() {

	}
}


module.exports = orm;