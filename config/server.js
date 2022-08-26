'use strict'
var app = require ('/app.js');
require('dotenv').config({path:'./.env'});
var port = 3700;

const port= process.env.PORT || 3700;

app.listen(port,()=>{
    console.log("servidor corriendo correctamente en la url: http://localhost:3700")
});
