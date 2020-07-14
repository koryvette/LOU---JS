const express = require ("express");
const request = require('request');

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
var userInput = window.prompt("Please enter API key:  ")
var key = `${userInput}`;

//Use API Key and Current month variables to create API
const API = `http://api.eventful.com/rest/events/search?app_key=${key}&location=Louisville&date=${currentMonth}&page_size=250&page_number=1&within=25&units=miles`;

//Make request to API to request data
const LouEventDataRequest = (callback) =>{
    request(API, {xml: true}, (err, res, body) => {
        if (err){
            return callback(err);
        }
        return callback(body);    
    });
}


//Parse data to use in HTML
let eventTiles = document.getElementById('tileLayout');
const Tile = document.querySelector('#tileLayout');

function fetchEventData(){
    const title = select.value;
    const url = select.value;
    const description = select.value;
    const start_time = select.value;
    const stop_time = select.value;
    const venue_name= select.value;
    const image = select.value;
}

//-----------helper functions  -------------

function generateHtml(){
    const html = `
     <div class="event-thumb"> 
                       <div class="event-thumb-image">
                           <img src="${image}" /> 
                           <div class="quickview-title">Quick View</div> 
                       </div>
                       <div class="event-thumb-title"> 
                           <h3> ${start_time}</h3> 
                           <h5> ${title} </h5> 
                           <h5> ${venue} </h5>
                       </div>
                   </div>
                   <div class="event-view"> 
                       <div class="close-btn">X</div> 
                       <div class="event-big-image"> 
                           <img src="" />
                       </div>
                       <div class="event-big-desc">
                           <h5  class= "event-title">  ${title}</h5> 
                         <h5  class= "text-dark"> ${venue_name}</h5> 
                           <p  class= "text-dark"><b>Date:  ${Start_Date} </b></p>
                           <p  class= "text-dark"><b>Start Time: </b> ${start_time} </p> 
                           <p  class= "text-dark"><b>End Time: </b>  ${stop_time} </p> 
                           <p  class= "text-dark"><b>Description: </b>"  ${description} </p> 
                           <p>   </p>
                           <a href="${url}"  target="_blank">For more info, click here.</a>
                       </div> 
                       </div>                       
    `;
    Tile.innerHTML = html;
}

module.exports.callApi = LouEventDataRequest;