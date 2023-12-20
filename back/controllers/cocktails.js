const Cocktails = require('../models/cocktails');

exports.getAllCocktails = (req, res, next) => {
	Cocktails.find()
		.then((cocktails) => res.status(200).json(cocktails))
		.catch((err) => res.status(400).json({ error: err }));
};

exports.getOneCocktails = (req, res, next) => {
	Cocktails.findById(req.params.id)
	.then((cocktail)=>res.status(200).json(cocktail))
	.catch((err)=>res.status(400).json({error: err}));
};
