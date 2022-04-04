const http = require('http');
// console.log(http);    if we will console, http code it wiil show us all status with the description of use
const express = require('express');
const bodyParser = require('body-parser');
const placesRoutes = require('./routes/places-routes');

const app = express();

// app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.use('/api/places', placesRoutes);
// app.use("")

app.listen(3994, ()=>{
    console.log("my serverc is running successfully");
});                                         
