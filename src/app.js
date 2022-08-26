"use strict";
var express = require("express");
var bodyParser = require("body-parser");
const db = require('./config/db');
const cors = require('cors');
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
 const corsOptions = {
    origin: "*",
    optionsSuccessStatus: 200,
  };          
  app.use(cors(corsOptions));

/**
 * cargar rutas
 */
 app.get('/', (req, res) => {
  res.send('Server all rigth!!!!')
})
// app.use ('/api',project_routes);

/**
 * exportar
 *
 */
module.exports = app;
