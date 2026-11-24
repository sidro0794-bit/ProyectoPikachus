// Punto de entrada: compone los componentes con los datos (API y likes)
import { fetchPokemons } from "./api.js";
import { loadLikes, toggleLike } from "./likes.js";
import { Header } from "./components/Header.js";
import { CardGrid } from "./components/CardGrid.js";
import { LoadingMessage, ErrorMessage, EmptyMessage } from "./components/StatusMessage.js";

const root = document.getElementById("app");
const main = document.createElement("main");
root.append(Header({ title: "Pokémon Cards + Likes" }), main);

async function loadPokemons() {
  main.replaceChildren(LoadingMessage());
  try {
    const pokemons = await fetchPokemons();
    if (pokemons.length === 0) {
      main.replaceChildren(EmptyMessage());
      return;
    }
    main.replaceChildren(
      CardGrid({ pokemons, likes: loadLikes(), onToggleLike: toggleLike })
    );
  } catch (error) {
    console.error(error);
    main.replaceChildren(ErrorMessage({ onRetry: loadPokemons }));
  }
}

loadPokemons();
