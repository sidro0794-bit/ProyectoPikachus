// Punto de entrada de la aplicación
import { fetchPokemons } from "./api.js";

const pokemons = await fetchPokemons();
console.log(`Obtenidos ${pokemons.length} Pokémon`, pokemons);
