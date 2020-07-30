//Find today's date
var startDate = moment().format('MM-DD-YYYY');
console.log(startDate)

//FETCH API data from server
fetch('/api')
    .then(response => response.json())
    .then(data => generateHtml(data[0]['event']))
    
//-----------    find DIV to insert HTML   --------------
const eventTiles = document.getElementById('tileLayout');
const eventTables = document.getElementById('table_of_events');

//-------   generate HTML code from API response   ------
function generateHtml(data){

    //generate HTML code to display event tiles
    const htmlTile = data.map(item => {
        if(moment(`${item.start_time}`,"YYYY-MM-DD").toDate() >= moment(startDate).toDate())
        return    ` 
    
     <div class="event-thumb"> 
                       <div class="event-thumb-image">
                           <img src="img/bourbon.jpg"> 
                           <div class="quickview-title">Quick View</div> 
                       </div>
                       <div class="event-thumb-title"> 
                           <h3> `+ moment(`${item.start_time}`).format('l') +`</h3> 
                           <h5>` + moment(`${item.start_time}`).startOf('day').fromNow() + `</h5>
                           <h5 class="eventTitle"> <a href="${item.venue_url}" target="_blank">${item.title}</a></h5> 
                           <h5> ${item.venue_name} </h5>
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
                           <p  class= "text-dark"><b>Date:`+ moment(`${item.start_time}`).format('l') +`</p>
                           <p  class= "text-dark"><b>Start Time: </b> ${item.start_time} </p>
                           <p  class= "text-dark"><b>End Time: </b>  ${item.stop_time} </p> 
                           <p  class= "text-dark"><b>Description: </b>  ${item.description} </p> 
                           <p>   </p>
                           <a href="${item.venue_url}"  target="_blank">For more info, click here.</a>
                       </div> 
                    </div>                                           
    `;
    }).join(' ');
    //console.log(data);

    //fill and display event tiles
    eventTiles.innerHTML = htmlTile;

    //generate HTML code to display event table
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

    //fill and display event table
    eventTables.innerHTML = htmlTable;
}