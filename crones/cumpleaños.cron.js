'use strict'
const cron = require ('node-cron');
const {db, http} = require("/config");
var Project = require ('../models/project');
var fs = require('fs');


class Main {
    static async getCumpleaños (){

    }
}


/**
 * pharams:
 * schedule(
 * primer parametro:'******' = indican el tiempo (6 '*', repite el cron cada un segundo)
 * segundo parametro: funcion callback
 * )
 */
cron.schedule ('0 0 * * *',()=>{ //Se ejecuta a media noche
      Main.getCumpleaños();
});