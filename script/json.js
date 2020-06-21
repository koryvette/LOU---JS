const eventBody = document.querySelector("#event_table > body")

function loadevents(){

  const eventlist = new XMLHttpRequest();
  eventlist.open('GET', 'script/upcoming_events.json');
  eventlist.onload = () => {

    try{
      const json = JSON.parse(eventlist.responseText)
      populateEvents(json);
    } catch (e) {
        console.warn("Error loading events!!");
    }
  };

eventlist.send();
}

function populateEvents (json){
  console.log(json);
}

  document.addEventListener("DOMContentloaded",() => {loadevents(); });
