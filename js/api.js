// Acceso a PokéAPI: obtiene y normaliza los datos de los Pokémon
const API_URL = "https://pokeapi.co/api/v2/pokemon";

// Lista fija de Pokémon a mostrar (incluye a Pikachu, #25)
export const POKEMON_IDS = [1, 4, 7, 25, 39, 52, 54, 94, 133, 143, 150, 151];

// Convierte la respuesta de la API en { id, name, image, types }
function normalize(data) {
  return {
    id: data.id,
    name: data.name,
    image:
      data.sprites?.other?.["official-artwork"]?.front_default ??
      data.sprites?.front_default ??
      "",
    types: data.types.map((t) => t.type.name),
  };
}

async function fetchPokemon(id) {
  const response = await fetch(`${API_URL}/${id}`);
  if (!response.ok) {
    throw new Error(`PokéAPI respondió ${response.status} para el Pokémon ${id}`);
  }
  return normalize(await response.json());
}

// Devuelve los Pokémon en el mismo orden que los ids. Lanza error si falla alguno.
export function fetchPokemons(ids = POKEMON_IDS) {
  return Promise.all(ids.map(fetchPokemon));
}
