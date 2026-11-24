# Proposal

## Why

Queremos una web-app sencilla que muestre Pokémon en fichas con su imagen y permita marcar los que nos gustan. Sirve como proyecto pequeño y completo para practicar el flujo OpenSpec (propuesta → tareas → implementación) con JavaScript vanilla, consumiendo una API pública y guardando datos en el navegador.

## What Changes

- Nueva página `index.html` con una cuadrícula de fichas de Pokémon (imagen, nombre, número y tipos).
- Los datos e imágenes se obtienen de PokéAPI (`https://pokeapi.co`), para una lista fija y corta de Pokémon (incluido Pikachu).
- Cada ficha tiene un botón de "like" que se puede marcar y desmarcar.
- Los likes se guardan en `localStorage` y se restauran al recargar la página.
- La interfaz muestra estados de carga, de error (con botón de reintento) y de lista vacía.
- Código organizado en módulos ES (API, almacenamiento, interfaz), sin frameworks ni herramientas de build.

Fuera de alcance: paginación, búsqueda, filtros, usuarios, base de datos, backend.

## Capabilities

### New Capabilities
- `pokemon-cards`: muestra la cuadrícula de fichas de Pokémon obtenidas de PokéAPI, con sus estados de carga, error y lista vacía.
- `pokemon-likes`: permite dar y quitar like a cada ficha y conserva los likes entre recargas mediante `localStorage`.

### Modified Capabilities

## Impact

- Proyecto nuevo: se crean `index.html`, `styles.css` y módulos JavaScript en `js/`.
- Dependencia externa solo en tiempo de ejecución: PokéAPI (sin clave, solo lectura).
- Sin dependencias npm. Se sirve con LiveServer de VS Code (los módulos ES necesitan servidor HTTP, no `file://`).
