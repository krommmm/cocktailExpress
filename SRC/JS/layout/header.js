import getAllCocktails from '../fetch/getAllCocktails';
import obtenirDetails from '../fonctions/obtenirDetails';

const header = async () => {
	const myUrl = process.env.API_URL;
	const url = `${myUrl}/api/cocktails`;

	//nb articles
	let isLocal = JSON.parse(localStorage.getItem('cocktails'));
	if (isLocal !== null) {
		document.querySelector('.nbArticles').textContent = isLocal.length;
	}
	
	let result = await getAllCocktails(url);
	let panierFinal = obtenirDetails(result);
	let total = 0;
	for (let i = 0; i < panierFinal.length; i++) {
		total +=
			parseFloat(panierFinal[i].prix) * parseFloat(panierFinal[i].unitée);
	}
	document.querySelector('.prix_total').textContent = total;
};
export default header;
