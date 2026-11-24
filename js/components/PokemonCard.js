// Componente: ficha de un Pokémon (imagen, número, nombre, tipos y like)
import { LikeButton } from "./LikeButton.js";

export function PokemonCard({ pokemon, liked, onToggleLike }) {
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

  const like = LikeButton({
    name: pokemon.name,
    liked,
    onToggle: () => onToggleLike(pokemon.id),
  });

  card.append(img, number, name, types, like);
  return card;
}
