const afficherUnCocktail = (array) => {
	let focus = document.querySelector('.focus');
	focus.innerHTML = `
<div class="container">
<article>
    <div class="image">
        <img
            class="focusImg"
            src="../images/cocktails/${array.imageUrl}.jpg"
            alt="${array.altTxt}"
        />
    </div>
    <div class="texte">
        <h2>${array.nom}</h2>
        <p><span class="prix">${array.prix}</span>&nbsp;€</p>
        <p class="description_title">Description :</p>
        <p class="description_content">${array.description}</p>
     <div class="thing">   <label>Choisissez un supplément</label>
    <select name="supplément" id="supplément">
        <option value="${array.accessoire[0]}">${array.accessoire[0]}</option>
        <option value="${array.accessoire[1]}">${array.accessoire[1]}</option>
        <option value="${array.accessoire[2]}">${array.accessoire[2]}</option>
    </select></div>
    <div class="thing"><label for="nombre">Choisissez un nombre</label
    ><input
        type="number"
        min="1"
        max="100"
        id="nombre"
        value="1"
        name="nombre"
    /></div>
    </div>
    
    <div class="btn_container">
    <a href="./panier.html" ><button id="btn_focus" class="btn">Ajouter au panier</button></a>
    </div>
</article>
</div>
`;
};
export default afficherUnCocktail;
