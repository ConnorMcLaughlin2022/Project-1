// var modal = document.querySelector(".modal");
// var overlay = document.querySelector(".overlay");
// var openModalBtn = document.querySelector(".btn-open");
// var closeModalBtn = document.querySelector(".btn-close");
// var closeModal = function(){
//     modal.classList.add("hidden");
//     overlay.classList.add("hidden");
// }
// search modal
var searchCity = document.querySelector("h3");
//click on search header 
searchCity.addEventListener("click", openSearch);
function openSearch(){
    //display input 
    document.getElementById("city-input").style.display = "block";
    //search button
    document.getElementById("search-btn").style.display = "block";
}

// var openModal = function(){
//     modal.classList.remove("hidden");
//     overlay.classList.remove("hidden");
// };

// openModalBtn.addEventListener("click", openModal);

// ticketmaster API URLs
var events= "https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=V0B2fYIrETkSu47O0YEkBb813OUlH75b";

//variables for input field, search button, and lists for API
var cityInput= document.getElementById('city-input');
var searchBtn= document.getElementById('search-btn');
var eventUl= document.getElementById('event-list');
var brewUl= document.getElementById('breweries');
var currentCity= document.getElementById('current-display');
var brewEl= document.querySelector('.other-card');
var eventEl= document.querySelector('.results-card');

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
            
            var eveUrl = document.createElement('a');
            eveUrl.textContent= events[i].url;
            eveUrl.setAttribute('href',events[i].url)

            //this created a promise uncaught error and only displayed the first event of the array so I turned it off for now
        

            eventList.append(eventName,eveUrl);
            eventUl.append(eventList);
        }
    })
}

//modal enter for results 
cityInput.addEventListener("keypress", function (event){
    if(event.key === "Enter"){
        event.preventDefault();
        document.getElementById("search-btn").click();
    }
})

//brewery API
//fetch breweries
function breweryInput(input){
    fetch(`https://api.openbrewerydb.org/breweries?by_city=${input}`).then(function(response){
        return response.json();
    }).then(function(data){
        console.log(data);
        for (i=0; i<data.length; i++){
            var brewList= document.createElement('li')
            
            var brewName= document.createElement('h5');
            brewName.textContent= data[i].name;
            brewUl.append(brewList);
            
            var brewAddress= document.createElement('p');
            brewAddress.textContent= 'Address: '+data[i].street;
            
            var brewURL= document.createElement('a');
            brewURL.textContent= 'Visit Website';
            brewURL.setAttribute('href', data[i].website_url);
    
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


// Grabbing var the event listner applies the click function
searchBtn.addEventListener("click",function(event){
    event.preventDefault();
    brewEl.setAttribute('class','other-card z-depth-5 card-panel hoverable card')
    eventEl.setAttribute('class','results-card z-depth-5 card-panel hoverable card')
    eventInput(cityInput.value);
    breweryInput(cityInput.value);
    searchDisplay();
    clearInput();
})

// script for the image carousel sections
var myIndex = 0;
var index1 = 0;
carousel();

console.log("hello")
function carousel() {
  var i;
  console.log("hey")
  var x = document.getElementsByClassName("mySlides");
  var y = document.getElementsByClassName("mySlides1");

  //console.log(x, y);
  console.log(x.length, y.length);

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < y.length; i++) {
    y[i].style.display = "none";  
  }

  myIndex++;
  index1++;
  console.log(myIndex, index1)
  if (myIndex > x.length) {
      myIndex = 1;
    }    
    x[myIndex-1].style.display = "block";  
    
    if (index1 > y.length) {index1 = 1}    
    y[index1-1].style.display = "block";
    
  setTimeout(carousel, 2000); // Change image every 2 seconds
}
