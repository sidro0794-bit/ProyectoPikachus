// Interfaz: solo manipula el DOM, no conoce la API ni localStorage
const cardsEl = document.getElementById("cards");
const statusEl = document.getElementById("status");

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
  statusEl.replaceChildren();
  cardsEl.replaceChildren(...pokemons.map(createCard));
}

// --- Estados de la pantalla: cargando, error y lista vacía ---
function showStatus(role, message, extra) {
  cardsEl.replaceChildren();
  const box = document.createElement("div");
  box.className = "status";
  box.setAttribute("role", role);
  const text = document.createElement("p");
  text.textContent = message;
  box.append(text);
  if (extra) box.append(extra);
  statusEl.replaceChildren(box);
}

export function showLoading() {
  showStatus("status", "Cargando Pokémon…");
}

export function showError(onRetry) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "retry";
  button.textContent = "Reintentar";
  button.addEventListener("click", onRetry);
  showStatus("alert", "No se han podido cargar los Pokémon.", button);
}

export function showEmpty() {
  showStatus("status", "No hay Pokémon para mostrar.");
}
