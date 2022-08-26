//==============================================================
//                              MODEL
//==============================================================

'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ProyectSchema = Schema({
    name: String,
    description: String,
    langs: [String],
    tecnology: [String],
    year : Number,
    image : String,
});
module.exports = mongoose.model('Project',ProyectSchema);