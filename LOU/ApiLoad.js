const express = require ("express");
const request = require('request');

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

//module.exports.callApi = LouEventDataRequest;