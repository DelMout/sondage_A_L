const { Sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
	const sondage = sequelize.define(
		"sondage",
		{
			pseudo: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			interet: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			frequence: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			jour: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			heure: {
				type: DataTypes.TINYINT,
			},
			participants: {
				type: DataTypes.TINYINT,
			},
			jeux: {
				type: DataTypes.STRING,
			},
			nouveau: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			suggestions: {
				type: DataTypes.STRING,
			},
			commentaires: {
				type: DataTypes.STRING,
			},
		},
		{
			timestamps: true,
			updatedAt: false,
			createdAt: "date",
			defaultValue: DataTypes.NOW,
		}
	);
	return sondage;
};
