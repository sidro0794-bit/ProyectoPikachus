# Spec Delta

## Purpose

Permitir al usuario marcar y desmarcar como favoritos los Pokémon de las fichas y conservar esa elección en el navegador entre visitas.

## ADDED Requirements

### Requirement: Alternar like en una ficha
El sistema SHALL ofrecer en cada ficha un botón que marque o desmarque el like de ese Pokémon y refleje su estado visualmente.

#### Scenario: Dar like
- **WHEN** el usuario pulsa el botón de like de una ficha sin like
- **THEN** la ficha pasa a estado "con like" y el botón lo indica visualmente

#### Scenario: Quitar like
- **WHEN** el usuario pulsa el botón de like de una ficha con like
- **THEN** la ficha vuelve a estado "sin like"

#### Scenario: Independencia entre fichas
- **WHEN** el usuario da like a una ficha
- **THEN** el resto de fichas mantienen su estado

### Requirement: Persistir likes en el navegador
El sistema SHALL guardar los likes en `localStorage` y restaurarlos al cargar la página.

#### Scenario: Recarga de la página
- **WHEN** el usuario ha dado like a algunas fichas y recarga la página
- **THEN** esas mismas fichas aparecen con like

#### Scenario: Primera visita
- **WHEN** no existen likes guardados
- **THEN** todas las fichas aparecen sin like

### Requirement: Tolerar datos de likes inválidos
El sistema SHALL seguir funcionando cuando los datos guardados estén corruptos o `localStorage` no esté disponible.

#### Scenario: Datos corruptos
- **WHEN** el valor guardado en `localStorage` no es JSON válido
- **THEN** la aplicación arranca sin likes y no muestra errores al usuario
