// Punto de entrada de la aplicación
import { fetchPokemons } from "./api.js";
import { renderCards, showLoading, showError, showEmpty, setLikeHandler, setCardLiked } from "./ui.js";
import { loadLikes, toggleLike } from "./likes.js";

setLikeHandler((id) => setCardLiked(id, toggleLike(id)));

async function loadPokemons() {
  showLoading();
  try {
    const pokemons = await fetchPokemons();
    if (pokemons.length === 0) {
      showEmpty();
      return;
    }
    renderCards(pokemons);
    // Restaurar los likes guardados
    for (const id of loadLikes()) setCardLiked(id, true);
  } catch (error) {
    console.error(error);
    showError(loadPokemons);
  }
}

loadPokemons();
