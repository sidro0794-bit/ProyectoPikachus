// Interfaz: solo manipula el DOM, no conoce la API ni localStorage
const cardsEl = document.getElementById("cards");

function createCard(pokemon) {
  const card = document.createElement("article");
  card.className = "card";
  card.dataset.id = pokemon.id;

  const img = document.createElement("img");
  img.src = pokemon.image;
  img.alt = `Imagen de ${pokemon.name}`;
  img.loading = "lazy";

  const number = document.createElement("p");
  number.className = "card__number";
  number.textContent = `#${String(pokemon.id).padStart(3, "0")}`;

  const name = document.createElement("h2");
  name.className = "card__name";
  name.textContent = pokemon.name;

  const types = document.createElement("p");
  types.className = "card__types";
  types.textContent = pokemon.types.join(" · ");

  card.append(img, number, name, types);
  return card;
}

export function renderCards(pokemons) {
  cardsEl.replaceChildren(...pokemons.map(createCard));
}
