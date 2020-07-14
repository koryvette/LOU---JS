const express = require('express');
const app = express();
const request = require('request');
const LouEventDataRequest = require("./LOU")

const http = require('http');

http.createServer((req, res) => {
    if (req.API === "/request"){
        LouEventDataRequest.callApi(function(response){
            res.write(JSON.stringify(response));
            res.end();
        });
    }
    console.log ('listening at 3000')
}).listen(3000);



app.use(express.static('LOU'));


// var key = "NNQLDMQTJrwpbHSx"

//cd source\repos\LOU_JS node index.js