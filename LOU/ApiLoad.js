//const express = require ('express');
//const request = require('request');

//Make request to API to request data
getApiData();

async function getApiData(){
    const response = await fetch('/api');
    const data = await response.json();
    console.log(data);

}

//Parse data to use in HTML
const Tile = document.querySelector('#tileLayout');

function fetchEventData(){
    const title = data.value;
    const url = data.value;
    const description = data.value;
    const start_time = data.value;
    const stop_time = data.value;
    const venue_name= data.value;
    const image = data.value;
}

//-----------helper functions  -------------
function generateHtml(){
    const eventTiles = document.getElementById('tileLayout');

    const html = `
     <div class="event-thumb"> 
                       <div class="event-thumb-image">
                           <img src="${data.image}" /> 
                           <div class="quickview-title">Quick View</div> 
                       </div>
                       <div class="event-thumb-title"> 
                           <h3> ${item.start_time}</h3> 
                           <h5> ${item.title} </h5> 
                           <h5> ${item.venue} </h5>
                       </div>
                   </div>
                   <div class="event-view"> 
                       <div class="close-btn">X</div> 
                       <div class="event-big-image"> 
                           <img src="" />
                       </div>
                       <div class="event-big-desc">
                           <h5  class= "event-title">  ${item.title}</h5> 
                         <h5  class= "text-dark"> ${item.venue_name}</h5> 
                           <p  class= "text-dark"><b>Date:  ${item.Start_Date} </b></p>
                           <p  class= "text-dark"><b>Start Time: </b> ${item.start_time} </p> 
                           <p  class= "text-dark"><b>End Time: </b>  ${item.stop_time} </p> 
                           <p  class= "text-dark"><b>Description: </b>"  ${item.description} </p> 
                           <p>   </p>
                           <a href="${item.url}"  target="_blank">For more info, click here.</a>
                       </div> 
                       </div>                       
    `;
    document.eventTiles.append(html);
    //console.log(html)
}

