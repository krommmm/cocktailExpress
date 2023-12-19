const getAllCocktails = async (url) => {
	try {
		const result = await fetch(url);
		const resultToJson = await result.json();
		return resultToJson; 
	} catch (err) {
		console.error(`Il y a eu une erreur : ${err}`);
	}
};
export default getAllCocktails;