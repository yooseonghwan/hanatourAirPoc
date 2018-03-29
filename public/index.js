
const express = require('express');
const app = express();

app.get('/timestamp',(req,res) =>{
    res.send('next');


} );

exports.app = functions.https.onRequest(app);