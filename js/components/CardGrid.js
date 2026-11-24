// Componente: cuadrícula de fichas
import { PokemonCard } from "./PokemonCard.js";

export function CardGrid({ pokemons, likes, onToggleLike }) {
  const grid = document.createElement("section");
  grid.className = "cards";
  grid.setAttribute("aria-label", "Fichas de Pokémon");
  grid.append(
    ...pokemons.map((pokemon) =>
      PokemonCard({ pokemon, liked: likes.has(pokemon.id), onToggleLike })
    )
  );
  return grid;
}
