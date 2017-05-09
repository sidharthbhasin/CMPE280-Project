

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
            '<b>Vacancies</b>: ' + data[i].type + '</b>  '+
            '<b>Preference</b>: ' + data[i].preference + '</b><br>'+
            '<b>Start Date</b>: ' + data[i].startdate + '</b>  '+
            '<b>Facilities</b>: ' + data[i].facilities + '</b><br>'+
            '<b>Apartment</b>: ' + data[i].apartment + '</b>  '+
            '<b>Address</b>: ' + data[i].address + '</b><br>'+
            '<b>Contact</b>: ' + data[i].contact + '</b> '+
            '<b>Rent</b>: ' + data[i].contact + '</b>';
            
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

