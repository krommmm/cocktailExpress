const afficherCocktails = (array) => {
	let mesCocktails = '';

	for (let i = 0; i < array.length; i++) {
		mesCocktails += `
        <article>
        <a href="./SRC/HTML/focus.html?id=${array[i]._id}">
            <img src="./SRC/images/cocktails/${array[i].imageUrl}.jpg" alt="${array[i].altTxt}" />
        </a>
        <h3>${array[i].nom}</h3>
        <p>${array[i].prix} €</p>
        <a href="./SRC/HTML/focus.html?id=${array[i]._id}">
         <button class="btn">
            <i class="fa-solid fa-cart-shopping"></i>Continuer
        </button>
        </a>
    </article>
        `;
	}

	document.querySelector('.cocktails_container').innerHTML = mesCocktails;
};
export default afficherCocktails;
