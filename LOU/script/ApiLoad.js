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

//page number of results in API
var text = ""
var i = 1;

//Create API url using current month
 
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === 'OPTION'){
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).data({});
    }
    next();
});


//Create API url using current month
var API = `http://api.eventful.com/rest/events/search?app_key=NNQLDMQTJrwpbHSx&location=Louisville&date=${currentMonth}&page_size=250&page_number=1&within=25&units=miles`

let eventTiles = document.getElementById('tileLayout');
fetch(API)
    .then((response) => {
    response.text().then((xml)=>{
        let data = new DOMParser();
        let xmlDOM = data.parseFromString(xmlContent,'application/xml');
        let events = xmlDOM.querySelectorAll('event')

        console.log(xmlDOM);
        // events.forEach(eventNode => {
        //     console.log(eventNode.children[1])
        // });
    });        
});


const Tile = document.querySelector('#tileLayout');

//-----------helper functions  -------------

function generateHtml(){
    const html = `
     <div class="event-thumb"> 
                       <div class="event-thumb-image">
                           <img src="${Background}" /> 
                           <div class="quickview-title">Quick View</div> 
                       </div>
                       <div class="event-thumb-title"> 
                           <h3> ${Start_Date}</h3> 
                           <h5> ${Event_Name} </h5> 
                           <h5> ${Venue} </h5>
                       </div>
                   </div>
                   <div class="event-view"> 
                       <div class="close-btn">X</div> 
                       <div class="event-big-image"> 
                           <img src="" />
                       </div>
                       <div class="event-big-desc">
                           <h5  class= "event-title">  ${Event_Name}</h5> 
                         <h5  class= "text-dark"> ${Venue}</h5> 
                           <p  class= "text-dark"><b>Date:  ${Start_Date} </b></p>
                           <p  class= "text-dark"><b>Start Time: </b> ${Start_Time} </p> 
                           <p  class= "text-dark"><b>End Time: </b>  ${End_Time} </p> 
                           <p  class= "text-dark"><b>Description: </b>"  ${Description} </p> 
                           <p>   </p>
                           <a href="${Link}"  target="_blank">For more info, click here.</a>
                       </div> 
                       </div>                       
    `;
    Tile.innerHTML = html;
}