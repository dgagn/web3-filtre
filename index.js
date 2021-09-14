const personnages = ["Bob", "Bobby", "Bobba", "Bongo", "Bingo"];

function sync(list = personnages) {
    const listElement = document.getElementById("liste_personnages");
    const listItemHtml = list.map(
        element => `
        <li class="list-group-item">
            ${element}
        </li>`
    );
    listElement.innerHTML = listItemHtml.join("");
}

function addPersonnageFromInputName() {
    const inputElem = document.getElementById("input_name");
    personnages.push(inputElem.value);
    inputElem.value = "";
    sync();
}

function filter(recherche) {
    const filteredPerso = personnages.filter(p => p.includes(recherche));
    sync(filteredPerso);
}

window.onload = () => {
    sync();
};
