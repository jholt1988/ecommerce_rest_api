const express = require('express');
const app = express();

const loaders = require('./loaders');



const {PORT }= require('./config')

async function startServer(){

    //initialize with application loaders
     loaders(app);

     //start server
     app.listen(PORT, () => {
         console.log(`server listening on PORT ${PORT}`)
     })
}

startServer();