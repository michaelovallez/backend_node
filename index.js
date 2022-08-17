'use strict'
var mongoose = require ('mongoose');
var app = require ('./app');
var port = 3700;
if (process.env.PORT) {
    port = process.env.PORT;
}else{
    port= 3700;
}

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://michaelovallez:eidfs2008MAMA**@cluster0.0yidav5.mongodb.net/?retryWrites=true&w=majority')
    .then(()=> {
        console.log("conexion a db establecida correctamente");
        //creacion del servidor
        app.listen(port,()=>{
            console.log("servidor corriendo correctamente en la url: http://localhost:3700")
        });
    })
    .catch(err=> console.log(err));