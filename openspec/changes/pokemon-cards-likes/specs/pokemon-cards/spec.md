# Spec Delta

## Purpose

Mostrar al usuario una cuadrícula de fichas de Pokémon con imagen y datos básicos obtenidos de PokéAPI, informando claramente de los estados de carga, error y lista vacía.

## ADDED Requirements

### Requirement: Mostrar fichas de Pokémon
El sistema SHALL mostrar una ficha por cada Pokémon obtenido, con su imagen, su nombre, su número y sus tipos.

#### Scenario: Carga correcta
- **WHEN** el usuario abre la página y PokéAPI responde correctamente
- **THEN** se muestra una cuadrícula con una ficha por Pokémon de la lista configurada, cada una con imagen, nombre, número y tipos

#### Scenario: Pikachu incluido
- **WHEN** la lista se ha cargado
- **THEN** existe una ficha de Pikachu entre las mostradas

### Requirement: Indicar estado de carga
El sistema SHALL indicar visualmente que los datos se están cargando mientras espera la respuesta de PokéAPI.

#### Scenario: Carga en curso
- **WHEN** la página ha solicitado los datos y aún no hay respuesta
- **THEN** se muestra un mensaje de carga y no se muestra la cuadrícula

### Requirement: Gestionar errores de carga
El sistema SHALL mostrar un mensaje de error con un botón de reintento cuando no pueda obtener los datos.

#### Scenario: Fallo de red o de la API
- **WHEN** la petición a PokéAPI falla
- **THEN** se muestra un mensaje de error y un botón "Reintentar"

#### Scenario: Reintento
- **WHEN** el usuario pulsa "Reintentar"
- **THEN** el sistema vuelve a solicitar los datos y muestra el estado de carga

### Requirement: Gestionar lista vacía
El sistema SHALL mostrar un mensaje informativo cuando no haya ningún Pokémon que mostrar.

#### Scenario: Sin resultados
- **WHEN** la carga termina sin ningún Pokémon
- **THEN** se muestra un mensaje de lista vacía en lugar de la cuadrícula
