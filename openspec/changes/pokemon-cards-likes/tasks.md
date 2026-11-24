# Tasks

## 1. Estructura base

- [x] 1.1 Crear `index.html` con contenedor de estado, cuadrícula y `<script type="module" src="js/main.js">`, y `styles.css` vacío enlazado; verificar abriendo con LiveServer que la página carga sin errores en consola.

## 2. Datos desde PokéAPI

- [ ] 2.1 Crear `js/api.js` con `fetchPokemons(ids)` que devuelve `{ id, name, image, types }` por Pokémon y lanza error si falla una petición; verificar con `console.log` desde `main.js` que se obtienen los 12 Pokémon (incluido Pikachu #25).

## 3. Render de fichas y estados

- [ ] 3.1 Crear `js/ui.js` con `renderCards(pokemons)` que pinta una ficha por Pokémon (imagen, nombre, número, tipos) con `createElement`; verificar visualmente que se ven las 12 fichas.
- [ ] 3.2 Añadir `showLoading()`, `showError(onRetry)` y `showEmpty()` en `ui.js` y conectarlos en `main.js`; verificar cortando la red (DevTools → Offline) que aparece el error y que "Reintentar" vuelve a cargar.
- [ ] 3.3 Dar estilo básico en `styles.css` solo a cuadrícula responsive y tarjeta (sin estilos de like todavía); verificar que se ve bien en ancho de móvil y de escritorio.

## 4. Likes

- [ ] 4.1 Crear `js/likes.js` con `loadLikes()`, `saveLikes()` y `toggleLike(id)` usando `localStorage` (clave `pokemon-likes`) y tolerando datos corruptos; verificar en consola que `toggleLike` alterna y que un valor basura en `localStorage` no rompe la carga.
- [ ] 4.2 Añadir botón de like en cada ficha (`aria-pressed`, con su estilo corazón vacío/lleno) y un único listener delegado en la cuadrícula; verificar que se puede marcar y desmarcar sin afectar a otras fichas.
- [ ] 4.3 Aplicar los likes guardados al renderizar; verificar que tras recargar la página siguen marcados.

## 5. Documentación y verificación final

- [ ] 5.1 Completar `README.md` (cómo ejecutar con LiveServer, estructura y respuestas de evaluación); verificar que las instrucciones funcionan tal cual.
- [ ] 5.2 Verificar en el navegador los tres puntos del enunciado: carga desde PokéAPI, like/unlike y persistencia tras recargar.
