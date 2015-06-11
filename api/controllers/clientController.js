var Client = require('../models/clientModel');

module.exports = {
	create: function(req, res) {
		console.log("clientController req.body: ", req.body)
		var newClient = new Client(req.body);
		newClient.save(function(err, result) {
			if (err) {
				return res.status(500).send(err);
			} else {
				return res.send(result);
			}
		});
	},

	read: function(req, res) {
		Client
		.find(req.query)
		.exec(function(err, result) {
			if (err) {
				return res.status(500).send(err);
			} else {
				return res.send(result);
			}
		});
	},

	update: function(req, res) {
		Client.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
			if (err) {
				return res.status(500).send(err);
			} else {
				return res.send(result);
			}
		});		
	},

	delete: function(req, res) {
		Client.findByIdAndRemove(req.params.id, function(err, result) {
			if (err) {
				return res.status(500).send(err);
			} else {
				return res.send(result);
			}
		});
	}	
};