const cocktails = [
	{
		nom: 'Mojito',
		_id: '464165486541',
		prix: 12,
		imageUrl: '1',
		description:
			'Un rafraîchissant mélange de menthe fraîche, de sucre, de jus de citron vert, de glace pilée et de rhum blanc, créant une boisson légère et revitalisante.',
		altTxt: 'photo blabblabla',
		accessoire: ['Parasols', 'sucre glace', 'paille'],
	},
	{
		nom: 'Cosmopolitan',
		_id: '465145698656474',
		prix: 20,
		imageUrl: '2',
		description: ' Un cocktail élégant et rose vif, mélangeant vodka, triple sec, jus de canneberge et un soupçon de jus de citron vert pour une expérience fruitée et acidulée.',
		altTxt: 'photo blabblabla',
		accessoire: ['Parasols', 'sucre glace', 'paille'],
	},
	{
		nom: 'Margarita',
		_id: '37466988964864984896',
		prix: 33,
		imageUrl: '3',
		description: `Une boisson classique à base de tequila, de triple sec et de jus de citron vert, servie sur glace, offrant un équilibre parfait entre le sucré, le salé et l'acidité.`,
		altTxt: 'photo blabblabla',
		accessoire: ['Parasols', 'sucre glace', 'paille'],
	},
	{
		nom: 'Martini',
		_id: '484864848948554',
		prix: 24,
		imageUrl: '4',
		description: `Une boisson emblématique associée à l'élégance, composée de gin ou de vodka et de vermouth, souvent garnie d'une olive ou d'un zeste de citron pour une touche aromatique.`,
		altTxt: 'photo blabblabla',
		accessoire: ['Parasols', 'sucre glace', 'paille'],
	},
	{
		nom: 'Mai Tai',
		_id: '884649864654964',
		prix: 28,
		imageUrl: '5',
		description: `Un cocktail exotique combinant rhum blanc, rhum brun, triple sec, sirop d'orgeat et jus de citron vert, créant une boisson tropicale et délicieusement complexe.`,
		altTxt: 'photo blabblabla',
		accessoire: ['Parasols', 'sucre glace', 'paille'],
	},
	{
		nom: 'Piña Colada',
		_id: '146485354848',
		prix: 17,
		imageUrl: '6',
		description: ` Un cocktail onctueux à base de rhum, de crème de coco et de jus d'ananas, offrant une expérience crémeuse et sucrée qui évoque les vacances sous les tropiques.`,
		altTxt: 'photo blabblabla',
		accessoire: ['Parasols', 'sucre glace', 'paille'],
	},
	{
		nom: 'Old Fashioned',
		_id: '965653487418516',
		prix: 32,
		imageUrl: '7',
		description: `Un cocktail classique qui met en valeur la saveur du whisky, mélangé avec du sucre, des éclats d'orange et une touche d'amertume, servi sur glace pour une expérience de dégustation robuste.`,
		altTxt: 'photo blabblabla',
		accessoire: ['Parasols', 'sucre glace', 'paille'],
	},
	{
		nom: 'Negroni',
		_id: '478851584615641',
		prix: 47,
		imageUrl: '8',
		description: `Un cocktail italien corsé, composé de gin, de vermouth rouge et de Campari, offrant un équilibre unique entre l'amertume, la douceur et l'arôme des herbes.`,
		altTxt: 'photo blabblabla',
		accessoire: ['Parasols', 'sucre glace', 'paille'],
	},
];

exports.find = () => {
	return new Promise((resolve, reject) =>
		resolve(JSON.parse(JSON.stringify(cocktails)))
	);
};

exports.findById = (id) => {
	return new Promise((resolve, reject) => {
		const cocktailTrouvé = cocktails.find((item) => item._id === id);
		cocktailTrouvé
			? resolve(JSON.parse(JSON.stringify(cocktailTrouvé)))
			: reject("Le cocktail n'a pas été trouvé.");
	});
};
