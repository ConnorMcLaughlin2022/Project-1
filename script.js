var modal = document.querySelector(".modal");
var overlay = document.querySelector(".overlay");
var openModalBtn = document.querySelector(".btn-open");
var closeModalBtn = document.querySelector(".btn-close");
var closeModal = function(){
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}

closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

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

var responseText= document.getElementById('#cityinput');


function getApi(events){
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


        }
    });
}
getApi(events)

var cityInput =document.getElementById('cityinput').value;

function searchLoc(term){
    fetch(`https://app.ticketmaster.com/discovery/v2/events.json?city=${term}&apikey=V0B2fYIrETkSu47O0YEkBb813OUlH75b`).then(function(response){
        return response.json();
    }).then(function(data){
        console.log('search for ${format} of ${term}')
        console.log(data);
        console.log('===============')
    })
}

searchLoc('Seattle')
/*function getApi(artist){
    fetch(artist)
    .then(function (response){
        console.log(response);
        if(response. status === 200){
            responseText.textContent =response.status;

        }
        return response.json();
    })
}
getApi(artist)

function getApi1(tickets){
    fetch(tickets)
    .then(function (response){
        console.log(response);
        if(response. status === 200){
            responseText.textContent =response.status;

        }
        return response.json();
    })
}
getApi1(tickets);

function getApi1(rsvp){
    fetch(rsvp)
    .then(function (response){
        console.log(response);
        if(response. status === 200){
            responseText.textContent =response.status;

        }
        return response.json();
    })
}
getApi1(rsvp);

function getApi1(notify){
    fetch(notify)
    .then(function (response){
        console.log(response);
        if(response. status === 200){
            responseText.textContent =response.status;

        }
        return response.json();
    })
}
getApi1(notify);*/
// search event
/*$.ajax({
    type:"GET",
    url:"https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey=V0B2fYIrETkSu47O0YEkBb813OUlH75b",
    async:true,
    dataType: "json",
    success: function(json) {
                console.log(json);
                // Parse the response.
                // Do other things.
             },
    error: function(xhr, status, err) {
                // This time, we do not end up here!
             }
  });

  var page = 0;

function getEvents(page) {

  $('#events-panel').show();
  $('#attraction-panel').hide();

  if (page < 0) {
    page = 0;
    return;
  }
  if (page > 0) {
    if (page > getEvents.json.page.totalPages-1) {
      page=0;
    }
  }
  
  $.ajax({
    type:"GET",
    url:"https://app.ticketmaster.com/discovery/v2/events.json?apikey=5QGCEXAsJowiCI4n1uAwMlCGAcSNAEmG&size=4&page="+page,
    async:true,
    dataType: "json",
    success: function(json) {
          getEvents.json = json;
  			  showEvents(json);
  		   },
    error: function(xhr, status, err) {
  			  console.log(err);
  		   }
  });
}

function showEvents(json) {
  var items = $('#events .list-group-item');
  items.hide();
  var events = json._embedded.events;
  var item = items.first();
  for (var i=0;i<events.length;i++) {
    item.children('.list-group-item-heading').text(events[i].name);
    item.children('.list-group-item-text').text(events[i].dates.start.localDate);
    try {
      item.children('.venue').text(events[i]._embedded.venues[0].name + " in " + events[i]._embedded.venues[0].city.name);
    } catch (err) {
      console.log(err);
    }
    item.show();
    item.off("click");
    item.click(events[i], function(eventObject) {
      console.log(eventObject.data);
      try {
        getAttraction(eventObject.data._embedded.attractions[0].id);
      } catch (err) {
      console.log(err);
      }
    });
    item=item.next();
  }
}

$('#prev').click(function() {
  getEvents(--page);
});

$('#next').click(function() {
  getEvents(++page);
});

function getAttraction(id) {
  $.ajax({
    type:"GET",
    url:"https://app.ticketmaster.com/discovery/v2/attractions/"+id+".json?apikey=5QGCEXAsJowiCI4n1uAwMlCGAcSNAEmG",
    async:true,
    dataType: "json",
    success: function(json) {
          showAttraction(json);
  		   },
    error: function(xhr, status, err) {
  			  console.log(err);
  		   }
  });
}

function showAttraction(json) {
  $('#events-panel').hide();
  $('#attraction-panel').show();
  
  $('#attraction-panel').click(function() {
    getEvents(page);
  });
  
  $('#attraction .list-group-item-heading').first().text(json.name);
  $('#attraction img').first().attr('src',json.images[0].url);
  $('#classification').text(json.classifications[0].segment.name + " - " + json.classifications[0].genre.name + " - " + json.classifications[0].subGenre.name);
}

getEvents(page);*/
