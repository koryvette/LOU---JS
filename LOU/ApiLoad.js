//Make request to API to request data
fetch('/api')
    .then(response => response.json())
    .then(data => generateHtml(data[0]['event']))

// getApiData();
// async function getApiData(){
//     const response = await fetch('/api');
//     const data = await response.json();
//     console.log(data);
// }


//---------------    helper functions    ----------------
//-----------    find DIV to insert HTML   --------------
const eventTiles = document.getElementById('tileLayout');
const eventTables = document.getElementById('table_of_events');

//-------   generate HTML code from API response   ------
function generateHtml(data){
    const htmlTile = data.map(item => `         
     <div class="event-thumb"> 
                       <div class="event-thumb-image">
                           <img src="${item.image.thumb}"> 
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
                           <img src="">
                       </div>
                       <div class="event-big-desc">
                           <h5  class= "event-title">  ${item.title}</h5> 
                         <h5  class= "text-dark"> ${item.venue_name}</h5> 
                           <p  class= "text-dark"><b>Date:  ${item.Start_Date} </b></p>
                           <p  class= "text-dark"><b>Start Time: </b> ${item.start_time} </p>
                           <p  class= "text-dark"><b>End Time: </b>  ${item.stop_time} </p> 
                           <p  class= "text-dark"><b>Description: </b>  ${item.description} </p> 
                           <p>   </p>
                           <a href="${item.url}"  target="_blank">For more info, click here.</a>
                       </div> 
                       </div>                       
    `
    ).join(' ');

    const htmlTable = data.map(item => `
    <TR>
    <TD  class= "text-dark">${item.title}</TD>
    <TD  class= "text-dark"><a href="${item.url}" target="_blank">${item.venue_name}</a></TD>"
    <TD  class= "text-dark">${item.start_time}</TD>
    <TD>${item.start_time}</TD>
    <TD>${item.stop_time}</TD>
    <TD></TD>
    <TD>${item.description}</TD>
    <TD></TD>
    </TR>`
    ).join('');

    eventTiles.innerHTML = htmlTile;
    eventTables.innerHTML = htmlTable;
    //console.log(html)
}

