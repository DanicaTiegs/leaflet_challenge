//API
var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojson"


// Creating map object
var myMap = L.map("map", {
    center: [34.0522, -118.2437],
    zoom: 8
  });
  
  // Adding tile layer
  L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
  }).addTo(myMap);
  
  // Grab data with d3
  d3.json(geoData).then(function(data) {
    
    console.log(data);
  
    // // Add 
    // L.geoJson(data, {
    //   onEachFeature: function (feature, layer) {
    //     layer.bindPopup('<h1>'+feature.properties.Coll_Day_N+'</h1><p>name: '+feature.properties.Hauler+'</p><p>contact: '+feature.properties.Phone_Num+'</p>');
    //   }
    // }).addTo(myMap);
  
  });
  