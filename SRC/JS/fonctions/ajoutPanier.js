const ajoutPanier = (clickedElement) => {
	
		let container = clickedElement.closest('.container');
		let name = container.querySelector('.texte h2').textContent;
		let accessoire = container.querySelector('select').value;
		let nombre = container.querySelector('#nombre').value;

        let mesCocktails = [];
        let localStorageContent = JSON.parse(localStorage.getItem('cocktails'));
        if(localStorageContent!==null){
            mesCocktails = localStorageContent;
        }
	
		let monCocktail = {
			nom: name,
			accessoire: accessoire,
			unitée: parseFloat(nombre),
		};

        let isChanged = false;
        for(let i=0;i<mesCocktails.length;i++){
            if(mesCocktails[i].nom==monCocktail.nom && mesCocktails[i].accessoire == monCocktail.accessoire){
                mesCocktails[i].unitée = parseFloat(mesCocktails[i].unitée) + parseFloat(monCocktail.unitée);
                isChanged=true;
            }
        }
		if(!isChanged){mesCocktails.push(monCocktail)};
		localStorage.setItem('cocktails', JSON.stringify(mesCocktails));
	
};
export default ajoutPanier;
