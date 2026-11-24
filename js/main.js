// Punto de entrada de la aplicación
import { fetchPokemons } from "./api.js";
import { renderCards } from "./ui.js";

const pokemons = await fetchPokemons();
renderCards(pokemons);
