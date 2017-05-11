

function showPlaces(place){
   var data = document.getElementById(place);
   
    var opt = {
        types : ['address']
    };
    var lat, lon;
    autocomplete = new google.maps.places.Autocomplete(inp, opt);
    autocomplete.addListener('place_changed', function(){
        
        var crd = autocomplete.getPlace().geometry.location;
        lat = crd.lat();
        lon = crd.lng();
        localStorage.setItem("lat", lat);
        localStorage.setItem("lon", lon);
        console.log("Lat - " + lat + " Long - " + lon );
    });
}



function validate(){
  if(document.getElementById("tit").value == "" ||
    document.getElementById("type").value == "" ||
    document.getElementById("inp").value == "" ||
    document.getElementById("prefer").value == "" ||
    document.getElementById("date").value == "" || 
    document.getElementById("fac").value == "" || 
    document.getElementById("vacan").value == "" || 
    document.getElementById("con").value == "" || 
    document.getElementById("rent").value == "" ) {
    console.log("iinside if validate");
    return true;
  }
  else{
    addplace();
    return false;
  }
}

function addplace(){
  console.log("inside addplace");
  var newData = {};
  newData.type = document.getElementById("type").value;
  newData.vacancies = document.getElementById("vacan").value;
  newData.apartment = document.getElementById("tit").value;
  newData.address = document.getElementById("inp").value;
  newData.preference = document.getElementById("prefer").value;
  newData.startdate = document.getElementById("date").value;
  newData.facilities = document.getElementById("fac").value;
  newData.contact = document.getElementById("con").value;
  newData.rent = document.getElementById("rent").value;
  newData.lat = localStorage.getItem("lat");
  newData.lon = localStorage.getItem("lon");

  console.log(newData.type);
  console.log(newData.vacancies);
  console.log(newData.apartment);
  console.log(newData.address);
  console.log(newData.preference);
  console.log(newData.startdate);
  console.log(newData.facilities);
  console.log(newData.contact);
  console.log(newData.rent);
  console.log(newData.lat);
  console.log(newData.lon);

  // call post api
  // then page will reload
}


function initMap() {
        
		var data = getData();

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 11,
          center: {lat: 37.344717, lng: -121.979666}
        });
        var marker = "";

        for(var i=0;i<data.length;i++){
        	var contentString = 

            '<h3>Details</h3>'+
            '<b>Type</b>: ' + data[i].type + '</b> '+
            '<b>Vacancies</b>: ' + data[i].vacancies + '</b><br>'+
            '<b>Preference</b>: ' + data[i].preference + '</b>'+
            '<b>Start Date</b>: ' + data[i].startdate + '</b><br>  '+
            '<b>Facilities</b>: ' + data[i].facilities + '</b>  '+
            '<b>Apartment</b>: ' + data[i].apartment + '</b> <br> '+
            '<b>Address</b>: ' + data[i].address + '</b><br>   '+
            '<b>Contact</b>: ' + data[i].contact + '</b><br>'+
            '<b>Rent</b>: ' + data[i].rent + '</b>';
            
            var locat  = {lat: parseInt(data[i].lattitude), lng: parseInt(data[i].longitude)};
            console.log("type of "+typeof(data[i].lattitude));
            console.log('locat');


            marker = new google.maps.Marker({

              position: locat,
              animation: google.maps.Animation.DROP,
              map: map
            });
            var infowindow = new google.maps.InfoWindow({
		       content: contentString
		    });
		    marker.addListener('mouseover', function() {
          		infowindow.open(map, this);
        	});	
        	marker.addListener('mouseout', function() {
          		infowindow.close(map, this);
        	});	
            marker.setIcon('http://maps.google.com/mapfiles/ms/icons/red-dot.png');
        }
      }

function getData(){
	var data = [
 {
   "_id": "59100c2234271b1a3c535e8f",
   "type": "Temporary",
   "vacancies": 3,
   "preference": "boys",
   "startdate": "05-10-2017",
   "facilities": "2B/2B , Swimming Pool, Washing machine",
   "apartment": "The Colonnade",
   "address": "San Jose",
   "lattitude": "37.3546",
   "longitude": "121.9189",
   "contact": "650 469 2736",
   "rent": "350$",
   "__v": 0
 },
 {
   "_id": "591016c3e2b49a1a40a1dbc3",
   "type": "Temporary",
   "vacancies": 1,
   "preference": "boys",
   "startdate": "05-5-2017",
   "facilities": "1B/1B , Swimming Pool, Washing machine",
   "apartment": "The Colonnade",
   "address": "San Jose",
   "lattitude": "72.089890",
   "longitude": "23.989879",
   "contact": "650 469 2736",
   "rent": "650$",
   "__v": 0
 }
];

	return data;
}

