import getOneCocktails from '../services/getOneCocktails';
import afficherUnCocktail from '../components/afficherUnCocktail';
import getUrl from '../utils/getUrl';

const zoom = () => {
	const MY_URL = process.env.API_URL;
	let id = getUrl();
	(async () => {
		const adresse2 = `${MY_URL}/api/cocktails/${id}`;
		let result = await getOneCocktails(adresse2);
		afficherUnCocktail(result);
	})();
};
export default zoom;
