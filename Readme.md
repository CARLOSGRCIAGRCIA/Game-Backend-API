# Game Backend API

Este es un backend simple para una API de juegos desarrollado con Node.js, Express y MongoDB.

## Descripción

Esta API proporciona operaciones CRUD (Crear, Leer, Actualizar, Eliminar) para una colección de juegos. Utiliza MongoDB como base de datos y Mongoose como ODM (Object Document Mapper).

## Requisitos previos

- Node.js (versión 16.20.1 o superior)
- MongoDB Atlas cuenta (o MongoDB instalado localmente)

## Instalación

1. Clona este repositorio: https://github.com/CARLOSGRCIAGRCIA/Game-Backend-API.git

    cd Game-Backend-API

2. Instala las dependencias:

        npm install

3. Crea un archivo `.env` en la raíz del proyecto y añade tus variables de entorno:

        MONGODB_URI=tu_uri_de_mongodb
        PORT=3000

## Uso

Para iniciar el servidor:

        npm start

El servidor se iniciará en `http://localhost:3000` (o el puerto que hayas especificado en el archivo .env).

## Endpoints

- GET /game - Obtiene todos los juegos
- GET /game/:id - Obtiene un juego específico por ID
- POST /game - Crea un nuevo juego
- PUT /game/:id - Actualiza un juego completo
- PATCH /game/:id - Actualiza parcialmente un juego
- DELETE /game/:id - Elimina un juego

## Estructura del proyecto

    Game-Backend-API/
    │
    ├── models/
    │   └── game.js
    │
    ├── routes/
    │   └── gameRoutes.js
    │
    ├── middleware/
    │   └── errorHandler.js
    │
    ├── index.js
    ├── .env
    ├── package.json
    ├── request.http
    └── README.md

## Pruebas

Puedes usar Postman o el archivo `requests.http` incluido para probar los endpoints de la API.

