const { sondage } = require("../models");

// * Get all datas of sondage
exports.getSondage = (req, res) => {
	sondage
		.findAll({
			order: [["pseudo", "ASC"]],
		})
		.then((obj) => {
			res.send(obj);
		});
};

//* save a line of sondage
exports.saveSondage = (req, res) => {
	const newSondage = new sondage({
		...req.body,
	});
	newSondage
		.save()
		.then((sondage) => {
			res.status(200).send(sondage);
		})
		.catch((err) => {
			res.status(401).send(err);
		});
};
