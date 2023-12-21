import getAllCocktails from '../services/getAllCocktails';
import afficherCocktails from '../components/afficherCocktails';

const accueil = () => {
	const myUrl = process.env.API_URL;
	const adresse = `${myUrl}/api/cocktails`;

	(async () => {
		let result = await getAllCocktails(adresse);
		afficherCocktails(result);
	})();
};
export default accueil;
