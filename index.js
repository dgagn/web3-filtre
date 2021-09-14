const personnages = ['Bob','Bobby','Bobba','Bongo','Bingo'];

// Cette fonction sert à synchroniser la liste reçu en paramètre avec le D.O.M.
// Pour cette implémentation, vous pouvez seulement utiliser les fonctions .map() et .join()
function sync(list = personnages){
    const listElement = document.getElementById("liste_personnages");
    const listItemHtml = list.map(element => {
        return `
        <li class="list-group-item">
            ${element}
        </li>`
    });
    listElement.innerHTML = listItemHtml.join("");
}

// Cette fonction sert à ajouter le personnage du champs de saisie 'input_name' au tableau personnages.
// Pour cette implémentation, vous devez obligatoirement utiliser la fonction .push().
// Une fois le tableau modifié, n'oubliez pas de resynchroniser le tableau avec le D.O.M.
function addPersonnageFromInputName(){
    const inputElem = document.getElementById("input_name");
    personnages.push(inputElem.value);
    inputElem.value = "";
    sync(personnages)
}

// Cette fonction sert à générer un tableau filtrer par la valeur reçu en paramètre.
// Cette valeur correspond au contenu du champs de saisie input_recherche.
// Pour cette implémentation, vous pouvez seulement utiliser les fonctions .filter() et .includes().
// Une fois que c'est fait, synchronisez le DOM avec le tableau filtré.
// Attention à ne pas altérer le tableau original.
function filter(recherche) {
    const filteredPerso = personnages.filter(p => p.includes(recherche))
    sync(filteredPerso);
}

window.onload = () => {
    sync();
}