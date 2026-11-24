# Design

## Context

Proyecto nuevo, sin código previo. Debe poder abrirse con LiveServer de VS Code y funcionar solo con HTML, CSS y JavaScript vanilla. Motivación y alcance en `proposal.md`.

## Goals / Non-Goals

**Goals:**
- Código modular y legible, con una responsabilidad por archivo.
- Lógica de datos (API, likes) separada del DOM.
- Estados de carga, error y vacío bien tratados.

**Non-Goals:**
- Paginación, búsqueda, filtros, ordenación.
- Frameworks, bundlers, TypeScript, tests automatizados con librerías externas.
- Backend o sincronización de likes entre dispositivos.

## Decisions

1. **Módulos ES nativos** (`<script type="module">`) en lugar de un único `app.js`.
   Estructura: `js/api.js` (PokéAPI), `js/likes.js` (localStorage), `js/ui.js` (render), `js/main.js` (arranque). Alternativa descartada: un solo archivo, más rápido de escribir pero menos modular. Los módulos requieren servidor HTTP, cosa que LiveServer cubre.

2. **Lista fija de IDs** de Pokémon (12, incluido Pikachu #25) y una petición `GET /api/v2/pokemon/{id}` por cada uno, con `Promise.all`. Alternativa: `GET /pokemon?limit=12`, que obliga a una segunda petición por cada resultado. Con IDs fijos el resultado es predecible y la imagen se toma de `sprites.other["official-artwork"].front_default`, con `sprites.front_default` como respaldo.

3. **Datos mínimos por ficha**: se normalizan a `{ id, name, image, types }` en `api.js`, de modo que la interfaz no depende de la forma de la respuesta de PokéAPI.

4. **Likes como array de IDs** en `localStorage` bajo la clave `pokemon-likes`. Se usa el ID (estable) y no el nombre. Lectura con `try/catch` y validación de que sea un array de números; cualquier fallo devuelve lista vacía. Alternativa: objeto `{id: true}`, descartada por ser más verboso sin aportar nada aquí.

5. **Render con delegación de eventos**: un único listener en la cuadrícula gestiona los clics en los botones de like (`data-id`), y al alternar solo se actualiza la ficha afectada en vez de repintar todo. Se usa `textContent`/`createElement` y no `innerHTML` con datos externos.

6. **Accesibilidad básica**: el botón de like es un `<button>` con `aria-pressed` y `aria-label`; los estados de carga/error usan `role="status"`/`role="alert"`.

## Risks / Trade-offs

- [PokéAPI no disponible o lenta] → estado de error con botón "Reintentar".
- [Una de las 12 peticiones falla] → se considera error global para mantener la lógica simple (trade-off aceptado en esta versión).
- [`localStorage` bloqueado o corrupto] → lectura/escritura protegidas con `try/catch`; la app funciona sin persistencia.
- [Apertura con `file://`] → los módulos ES no cargan; se documenta en el README que hay que usar LiveServer.
