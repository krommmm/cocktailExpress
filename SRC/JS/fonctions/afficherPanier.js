const afficherPanier = (array) => {

    let panier = "";
    for(let i=0;i<array.length;i++){
    panier += 
     `
                <article>
                    <div class="image">
                        <img
                            class="panierPageImg"
                            src="../images/cocktails/${array[i].imageUrl}.jpg"
                            alt="${array[i].altTxt}"
                        />
                    </div>
                    <div class="texte">
                        <h2>${array[i].nom}</h2>
                        <p><span class="prix">${array[i].prix}</span>&nbsp;€</p>
                        <p class="accessoire">${array[i].accessoire}</p>
                        <label for="nombre" class="quantity">${array[i].unitée}</label
                        ><input
                            type="number"
                            min="1"
                            max="100"
                            id="nombre"
                            class="input_panier"
                            value="${array[i].unitée}"
                            name="nombre"
                        />
                        <div class="btn_container">
                            <button id="btn_supprimer" class="btn">Supprimer</button>
                        </div>
                    </div>
                </article> 
    `;
    }

    document.querySelector(".panier_container").innerHTML = panier;
};
export default afficherPanier;