//M2.5+ Earthquakes in Past 7 Days
var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojson"


// Creating map object
var myMap = L.map("mapid", {
    center: [34.0522, -118.2437],
    zoom: 3
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
  d3.json(url).then(function(quakeData) {
    
    console.log(quakeData);

    //L.geoJson(quakeData).addTo(myMap);

  
    // // Add FROM EXAMPLE
    L.geoJson(data, {
      onEachFeature: function (feature, layer) {

        layer.bindPopup('<h1>'+feature.properties.mag'</h1><p>'+feature.properties.place'</p>');
      }
    }).addTo(myMap);
  
  });

  //LEGEND
  var legend = L.control({position: 'bottomleft'});
    legend.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend');
    labels = ['<strong>Earthquake Depth</strong>'],
    categories = ['-10-10','10-30','30-50','50-70','70-90','90+'];

    for (var i = 0; i < features.geometry.coordinates[2]; i++) {
            div.innerHTML += 
            labels.push(
                '<i style="background:' + getColor(categories[i] + 1) + '"></i> ' +
                (categories[i] ? categories[i] : '+'));
        }

        div.innerHTML = labels.join('<br>');
    return div;
};

legend.addTo(map);

  //var mag = feature.properties.mag

  var geojsonMarkerOptions = {
  radius: feature.properties.mag,
  //how do I loop through and pull out the magnitude and assign a color for the magnitude range?
  //L.circle([location.coordinates[3]], {
  //color: "green",
  //fillColor: "green",
 // fillOpacity: 0.75,
  //radius: 500
//}).addTo(myMap);

  fillColor: "#ff7800",
  color: "#000",
  weight: 1,
  opacity: 1,
  fillOpacity: 0.8
};

  