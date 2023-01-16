 var modal = document.getElementsByClassName("modal");
 var modalTrigger = document.getElementsByClassName("modal-trigger");
var closeButton = document.getElementsByClassName("btn-flat");
window.onclick = function(event){
    if(event.target == modal){
        modal.style.display= "none";
    }
}
closeButton.addEventListener("click", );

  function getTicket (){
  var requestUrl = "https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=V0B2fYIrETkSu47O0YEkBb813OUlH75b";

  fetch(requestUrl)
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    console.log(data);
    for(var i = 0; i < data.length; i ++){
      var ticketLink = document.createElement('h2');
      var eventImage = document.createElement('img');
      ticketLink.textContent = data[i].url;
      eventImage.textContent = data[i].image.url;
    }
  })
}

// ticketmaster API URLs
var events= "https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=V0B2fYIrETkSu47O0YEkBb813OUlH75b";

var tickets= "https://app.ticketmaster.com/discovery/v2/";
var rsvp= "https://app.ticketmaster.com/discovery/v2/";
var notify="https://app.ticketmaster.com/discovery/v2/";

//variables for input field, search button, and lists for API
var cityInput= document.getElementById('city-input');
var searchBtn= document.getElementById('search-btn');
var eventUl= document.getElementById('event-list');
var brewUl= document.getElementById('breweries');
var currentCity= document.getElementById('current-display');

//ticketmaster API
// fetches ticketmaster events
function eventInput(input){
    fetch(`https://app.ticketmaster.com/discovery/v2/events.json?city=${input}&apikey=V0B2fYIrETkSu47O0YEkBb813OUlH75b`).then(function(response){
        return response.json();
    }).then(function(data){
        console.log(data._embedded);
        var events= data._embedded.events

        for(i=0; i<events.length; i++){
            var eventList= document.createElement('li');
            
            var eventName= document.createElement('h5');
            eventName.textContent=events[i].name;
            eventUl.append(eventList);

            //this created a promise uncaught error and only displayed the first event of the array so I turned it off for now
            // var eventVenue= document.createElement('p');
            // var venue= events[i]._embedded.venues[i];
            // eventVenue.textContent='Venue: '+ venue.name;

            eventList.append(eventName);
            eventUl.append(eventList);
        }
    })
}



//brewery API
//fetch breweries
function breweryInput(input){
    fetch(`https://api.openbrewerydb.org/breweries?by_city=${input}`).then(function(response){
        return response.json();
    }).then(function(data){
        clearHTMLData();
        console.log(data);
        for (i=0; i<data.length; i++){
            var brewList= document.createElement('li')
            
            var brewName= document.createElement('h5');
            brewName.textContent= data[i].name;
            brewUl.append(brewList);
            
            var brewAddress= document.createElement('p');
            brewAddress.textContent= 'Address: '+data[i].street;
            
            var brewURL= document.createElement('p');
            brewURL.textContent= 'Website: '+data[i].website_url;

            brewList.append(brewName, brewAddress, brewURL);
            brewUl.append(brewList);
        }
    })
}

//lets user know what city is being currently displayed
function searchDisplay() {
    currentCity.textContent= 'Currently displaying results for: '+cityInput.value;
}

//clear input field after search
function clearInput() {
    document.getElementById('city-input').value=('');
}
// Clears previous search
function clearHTMLData() {
    let dataClear = ['#breweries','#event-list'];
    for (let i = 0; i < dataClear.length; i++) {

    $(dataClear[i]).html('');
    }
}

// Grabbing var the event listner applies the click function
searchBtn.addEventListener("click",function(event){
    event.preventDefault();
    eventInput(cityInput.value);
    breweryInput(cityInput.value);
    searchDisplay();
    clearInput();
});