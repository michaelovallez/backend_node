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
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/portafolio',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=> {
        console.log("conexion a db establecida correctamente");
        //creacion del servidor
        app.listen(port,()=>{
            console.log("servidor corriendo correctamente en la url: http://localhost:3700")
        });
    })
    .catch(err=> console.log(err));