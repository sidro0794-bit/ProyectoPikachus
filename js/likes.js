// Persistencia de likes en localStorage (lista de ids)
const STORAGE_KEY = "pokemon-likes";

// Devuelve un Set con los ids con like. Ante datos corruptos o sin localStorage, un Set vacío.
export function loadLikes() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (Array.isArray(parsed)) {
      return new Set(parsed.filter((id) => Number.isInteger(id)));
    }
  } catch {
    // JSON inválido o localStorage no disponible: se arranca sin likes
  }
  return new Set();
}

function saveLikes(likes) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...likes]));
  } catch {
    // Sin persistencia (modo privado, cuota...): la app sigue funcionando
  }
}

// Alterna el like de un id y devuelve true si queda con like
export function toggleLike(id) {
  const likes = loadLikes();
  const liked = !likes.has(id);
  if (liked) likes.add(id);
  else likes.delete(id);
  saveLikes(likes);
  return liked;
}
