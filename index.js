const personnages = ['Bob', 'Bobby', 'Bobba', 'Bongo', 'Bingo'];

/**
 * Syncs the DOM with a given list.
 *
 * @param {string[]} list a list to sync to the DOM
 */
function sync(list = personnages) {
  const listElement = document.getElementById('liste_personnages');
  const listItemHtml = list.map(
      (element) => `
        <li class="list-group-item">
            ${element}
        </li>`,
  );
  listElement.innerHTML = listItemHtml.join('');
}

/**
 * Adds a given user to the users list and syncs the DOM.
 */
function addPersonnageFromInputName() {
  const inputElem = document.getElementById('input_name');
  personnages.push(inputElem.value);
  inputElem.value = '';
  sync();
}

/**
 * Filters the users list with a search value.
 *
 * @param {string} recherche the research value to filter the array
 */
function filter(recherche) {
  const filteredPerso = personnages.filter((p) => p.includes(recherche));
  sync(filteredPerso);
}

window.onload = () => {
  sync();
};
