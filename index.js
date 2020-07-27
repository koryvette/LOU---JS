const express = require('express');
const app = express();
const request = require("request");
const xml2js = require('xml2js');
const http = require('http');

//Get current month to load into API url
var today = new Date();
var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
const currentMonth = month[today.getMonth()];

//User input to capture API Key
var key = "NNQLDMQTJrwpbHSx";

//Use API Key and Current month variables to create API
const API = `http://api.eventful.com/rest/events/search?app_key=${key}&location=Louisville&date=${currentMonth}&page_size=250&page_number=1&within=25&units=miles`;

//pages loop
//for(let page = 1;page < 6; page++){
//    const API = `http://api.eventful.com/rest/events/search?app_key=${key}&location=Louisville&date=${currentMonth}&page_size=250&page_number=`+ [page] +`&within=25&units=miles`;
//    console.log(API)
//}

app.use(express.static('LOU'));

app.get('/api', function(req, res)
    {
        request(`${API}`, function(error, response, body){
            if(error)
                {
                console.log("There was an error");
                }
            else{

                var parser = new xml2js.Parser();
                parser.parseString(body, function (err, result) {
                    extractedData = result['search']['events'];
                    res.json(extractedData); 
                    
                    console.log(extractedData); 

                    });
                }
        });
    });

var port = process.env.port || 3000
app.listen(port, function(){
    console.log ("listening at 3000");
});
//cd source\repos\LOU_JS node index.js