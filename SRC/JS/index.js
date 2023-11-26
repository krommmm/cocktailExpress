import header from './layout/header';
import footer from './layout/footer';
import afficherCocktails from './fonctions/afficherCocktails';
import afficherUnCocktail from './fonctions/afficherUnCocktail';
import ajoutPanier from './fonctions/ajoutPanier';
import obtenirDetails from './fonctions/obtenirDetails';
import afficherPanier from './fonctions/afficherPanier';
import supprimerUnCocktail from './fonctions/supprimerUnCocktail';
import getAllCocktails from './fetch/getAllCocktails';
import getOneCocktails from './fetch/getOneCocktails';
import modifyQuantity from './fonctions/modifyQuantity';
import getUrl from './fonctions/getUrl';

header();
footer();

const adresse = 'http://localhost:2000/api/cocktails';

if (document.title === 'CocktailExpress Accueil') {
	(async () => {
		let result = await getAllCocktails(adresse);
		afficherCocktails(result);
	})();
}

if (document.title === 'Cocktail express zoom') {
	let id = getUrl();
	(async () => {
		const adresse2 = `http://localhost:2000/api/cocktails/${id}`;
		let result = await getOneCocktails(adresse2);
		afficherUnCocktail(result);
	})();
}

if (document.title === 'Cocktail express panier') {
	(async () => {
		let result = await getAllCocktails(adresse);
		let details = obtenirDetails(result);
		afficherPanier(details);
		header();
	})();
}

document.addEventListener('click', (event) => {
	if (event.target.getAttribute('id') === 'btn_focus') {
		const clickedElement = event.target;
		ajoutPanier(clickedElement);
		header();
	}
});

document.addEventListener('click', (event) => {
	if (event.target.getAttribute('id') === 'btn_supprimer') {
		(async () => {
			let details = await supprimerUnCocktail(event.target, adresse);
			afficherPanier(details);
			header();
		})();
	}
});

document.addEventListener('click', async (event) => {
	if (event.target.getAttribute('class') === 'input_panier') {
		modifyQuantity(event);
		let result = await getAllCocktails(adresse);
		let details = obtenirDetails(result);
		afficherPanier(details);
		header();
	}
});