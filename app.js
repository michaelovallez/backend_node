"use strict";
var express = require("express");
var bodyParser = require("body-parser");
var app = express();

/**
 * cargar archivos de rutas
 */
var project_routes = require ('./routes/projectRoutes');
/**
 * middlewares --> capa que se ejecuta antes de la accion de un controlador.
 * antes del resultado de una peticion
 */
app.use(bodyParser.urlencoded({ extended: false })); // configuracion
app.use(bodyParser.json()); // convertir a json

/**
 * CORS
 */

/**
 * cargar rutas
 */
app.use ('/api',project_routes);

/**
 * exportar
 *
 */
module.exports = app;
