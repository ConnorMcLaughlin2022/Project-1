var modal = document.querySelector(".modal");
var overlay = document.querySelector(".overlay");
var openModalBtn = document.querySelector(".btn-open");
var closeModalBtn = document.querySelector(".btn-close");
var closeModal = function(){
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}

// closeModalBtn.addEventListener("click", closeModal);
//overlay.addEventListener("click", closeModal);

var openModal = function(){
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
};

openModalBtn.addEventListener("click", openModal);




var events= "https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=V0B2fYIrETkSu47O0YEkBb813OUlH75b";
var artist= "https://app.ticketmaster.com/discovery/v2/";
var tickets= "https://app.ticketmaster.com/discovery/v2/";
var rsvp= "https://app.ticketmaster.com/discovery/v2/";
var notify="https://app.ticketmaster.com/discovery/v2/";

/*function getApi(events){
    fetch(events)
    .then(function (response){
        console.log(response);

        return response.json();
    }).then(function(data){
        console.log(data._embedded.events)
        var info= data._embedded.events
        for(var i=0;i<info.length;i++){
            console.log(info[i])

            var resultsCard = document.getElementById('event-results')

            var li = document.createElement('li');
            li.classList.add('event-name')
            li.innerText = info[i].name;

            resultsCard.appendChild(li);


    });
}

getApi(events)*/

// Grabbing the Id element input
var cityInput =document.getElementById('city-input')
// Grabbing the search button action
var searchbtn =document.getElementById("btn")
// Grabbing var the event listner applies the click function
var cityInput =document.getElementById('cityinput');
// Grabbing the search button action
var searchBtn =document.getElementById('btn')


// getApi(events)


// fetches the URL to follow through with the call on line 62
function searchLoc(term){
    fetch(`https://app.ticketmaster.com/discovery/v2/events.json?city=${term}&apikey=V0B2fYIrETkSu47O0YEkBb813OUlH75b`).then(function(response){
        console.log('search for ${format} of ${term}')
       
        return response.json();
    }).then(function(data){
        // data that is grabbed from the URL
        console.log(data._embedded);
        var info = data._embedded;
        for(var i=0;info.length;i++){
            console.log(info[i])
            console.log('===============')
            var resultsCard =document.getElementById("event-results");
   
            var li = document.getElementById("event-results")
   
            var li =document.createElement("li");
            li.classList.add('event-name')
            li.innerText = info[i].name;
   
            resultsCard.append(li)
        }
    })
}

/*function searchLoc(term,){
    fetch(`https://app.ticketmaster.com/discovery/v2/events.json?city=${term}&apikey=V0B2fYIrETkSu47O0YEkBb813OUlH75b`).then(function(response){
        return response.json();
    }).then(function(data){
        console.log('search for ${format} of ${term}')
        // data that is grabbed from the URL
        console.log(data);
        console.log('===============')

        

        var resultsCard =document.getElementById("event-results")
    })
}*/

//brewery API
var brewUl= document.getElementById('breweries');

//fetch breweries
function breweryInput(input){
    fetch(`https://api.openbrewerydb.org/breweries?by_city=${input}`).then(function(response){
        return response.json();
    }).then(function(data){
        console.log(data);
        for (i=0; i<data.length; i++){
            var brewList= document.createElement('li')
            
            var brewName= document.createElement('h4');
            brewName.textContent= data[i].name
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

// Grabbing var the event listner applies the click function
searchBtn.addEventListener("click",function(){
    // calling for the users input
    searchLoc(cityInput.value);
    breweryInput(cityInput.value);
});