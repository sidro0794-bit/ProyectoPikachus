# Pokémon Cards + Likes

Web-app sencilla en JavaScript vanilla que muestra fichas de Pokémon (imagen, número, nombre y tipos) obtenidas de [PokéAPI](https://pokeapi.co) y permite dar y quitar like a cada una. Los likes se guardan en `localStorage`.

Proyecto desarrollado con **OpenSpec** (SDD/ODD): la especificación está en `openspec/changes/pokemon-cards-likes/`.

## Cómo ejecutarla

Los módulos ES necesitan un servidor HTTP (no funcionan abriendo el archivo con `file://`):

1. Abre la carpeta en VS Code.
2. Clic derecho en `index.html` → **Open with Live Server**.

(Alternativa sin VS Code: `npx http-server -p 5500` y abrir `http://localhost:5500`.)

## Estructura

```
index.html            Página con el contenedor #app
styles.css            Estilos
js/
  main.js             Arranque: compone componentes + datos
  api.js              Acceso a PokéAPI
  likes.js            Persistencia de likes (localStorage)
  components/
    Header.js         Cabecera
    CardGrid.js       Cuadrícula de fichas
    PokemonCard.js    Ficha de un Pokémon
    LikeButton.js     Botón de like (♡/♥)
    StatusMessage.js  Cargando / error con reintento / lista vacía
openspec/             Propuesta, specs, diseño y tareas
```

## Flujo OpenSpec seguido

1. `openspec init` (Claude Code).
2. Exploración de la idea (decisiones: PokéAPI, `localStorage`, sin filtros/paginación, JavaScript vanilla).
3. Propuesta `pokemon-cards-likes`: `proposal.md`, `specs/`, `design.md`, `tasks.md` (4/4 artefactos).
4. Revisión y edición manual de los artefactos.
5. Implementación tarea a tarea, un commit por tarea.

## Preguntas de evaluación

**1. ¿Qué tarea de `tasks.md` tuviste que modificar a mano antes de pedirle a la IA que la programara y por qué?**

Modifiqué la 3.3 (estilos) y la 4.2 (botón de like). El borrador de la 3.3 pedía estilar "cuadrícula, tarjeta y estados" y en esa fase todavía no existía el botón de like, así que dejé solo cuadrícula y tarjeta, y moví los estilos del corazón a la 4.2, donde se crea el botón. Así cada tarea es verificable por sí sola. Más tarde, a mitad de la implementación, añadí una tarea nueva (5.1, refactor a componentes) y reescribí la decisión 1 y la 5 de `design.md`: la IA había propuesto un `ui.js` único con delegación de eventos, y se pidió una web por componentes.

**2. En la ejecución tarea por tarea, ¿hubo algún momento en el que el código propuesto por la IA no te convenciera? ¿Cómo lo corregiste?**

Sí. El diseño inicial concentraba todo el DOM en un único `ui.js` y gestionaba los likes con un listener delegado en la cuadrícula, lo que acoplaba la cuadrícula a las fichas y hacía poco reutilizable cada pieza. Lo corregí con un refactor a componentes (`Header`, `CardGrid`, `PokemonCard`, `LikeButton`, `StatusMessage`): cada uno devuelve un elemento DOM y `LikeButton` gestiona su propio clic mediante un callback. Actualicé `design.md` y `tasks.md` antes de tocar el código y volví a comprobar carga, error/reintento, like/unlike y persistencia.

**3. ¿Por qué es importante revisar y editar los artefactos (`.md`) manualmente en lugar de confiar ciegamente en lo que genera la IA con `/opsx:propose`?**

Porque los artefactos son el contrato a partir del cual se genera el código: si contienen un error, una tarea demasiado grande o una decisión de arquitectura que no queremos, todo el código posterior lo heredará. Revisarlos es barato (texto) comparado con corregirlos después en código, mantiene la documentación alineada con lo que realmente se construye y deja claro que el criterio técnico lo tiene el programador, no la IA. Un ejemplo real aquí fue el cambio a componentes: se reflejó primero en `design.md` y `tasks.md`.
