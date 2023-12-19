import getAllCocktails from "../fetch/getAllCocktails";


const supprimerUnCocktail = async (e,url) => {
let container = e.parentElement;
let texteContainer = container.closest(".texte");
let nom = texteContainer.querySelector("h2").textContent;
let accessoire = texteContainer.querySelector(".accessoire").textContent;
let prix = texteContainer.querySelector(".prix").value;
let newArray = [];
let localStorageContent = JSON.parse(localStorage.getItem("cocktails"));

// Si match entre nom/accessoire et ls alors suppression
for(let i=0;i<localStorageContent.length;i++){
    if(localStorageContent[i].nom === nom && localStorageContent[i].accessoire===accessoire){
        localStorageContent.splice(i,1);
       localStorage.setItem("cocktails", JSON.stringify(localStorageContent));
    }
}
let result = await getAllCocktails(url);

// Association prix et img au ls selon model
for(let i=0;i<localStorageContent.length;i++){
    for(let j=0;j<result.length;j++){
        if(localStorageContent[i].nom===result[j].nom){
            localStorageContent[i].prix = result[j].prix;
            localStorageContent[i].imageUrl = result[j].imageUrl;
       
        }
    }

}
 return localStorageContent;
};
export default supprimerUnCocktail;