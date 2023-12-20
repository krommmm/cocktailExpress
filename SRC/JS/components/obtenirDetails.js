const obtenirDetails = (array) => {
	let localStorageContent = [];
	let panierFinal = [];

	localStorageContent = JSON.parse(localStorage.getItem('cocktails'));
	if (localStorageContent === null) {
		return;
	}
	let cocktails = [...array];
	for (let i = 0; i < cocktails.length; i++) {
		for (let j = 0; j < localStorageContent.length; j++) {
			if (cocktails[i].nom === localStorageContent[j].nom) {
				cocktails[i].accessoire = localStorageContent[j].accessoire;
				let newCocktail = { ...cocktails[i] };
				newCocktail.accessoire = localStorageContent[j].accessoire;
				newCocktail.unitée = localStorageContent[j].unitée;
				panierFinal.push(newCocktail);
			}
		}
	}
	return panierFinal;
};
export default obtenirDetails;
