import header from './layout/header';
import footer from './layout/footer';
import afficherCocktails from './fonctions/afficherCocktails';
import afficherUnCocktail from './fonctions/afficherUnCocktail';
import ajoutPanier from './fonctions/ajoutPanier';
import obtenirDetails from './fonctions/obtenirDetails';
import afficherPanier from './fonctions/afficherPanier';
import supprimerUnCocktail from './fonctions/supprimerUnCocktail';
import getAllCocktails from './services/getAllCocktails';
import getOneCocktails from './services/getOneCocktails';
import modifyQuantity from './fonctions/modifyQuantity';
import getUrl from './fonctions/getUrl';
import accueil from './pages/accueil';
import panier from './pages/panier';
import zoom from './pages/zoom';
import getPageName from './utils/getPageName';

const MY_URL = process.env.API_URL;

header();
footer();

const adresse = `${MY_URL}/api/cocktails`;

// ROUTAGE
let pageName = getPageName();
switch (pageName) {
	case 'index':
		accueil();
		break;
	case '':
		accueil();
	case 'focus':
		zoom();
		break;
	case 'panier':
		panier();
		break;

	default:
		console.error('Page not found');
}

// ADDEVENTLISTENER
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
	if (event.target.classList.contains('input_panier')) {
		modifyQuantity(event);
		let result = await getAllCocktails(adresse);
		let details = obtenirDetails(result);
		afficherPanier(details);
		header();
	}
});
