//==============================================================
//                      SERVER CONFIGURATION
//==============================================================

'use strict'
const app = require ('../app');
require('dotenv').config({path:'../.env'});

const port = process.env.PORT || 3700;

app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
});
