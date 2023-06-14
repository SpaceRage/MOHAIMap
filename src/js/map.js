var map = L.map('map', { zoomControls: false }).setView([47.6, -122.3], 8);
map.setMaxBounds(map.getBounds());
map.setMinZoom(8);

L.tileLayer(`https://api.mapbox.com/styles/v1/mapbox/dark-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic3BhY2VyYWdlIiwiYSI6ImNsN3BxYmw4YzJvYjUzb3F1aGx1b3N5ZGgifQ.9ISon7NubL5Bv-PzYp20eQ`, {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);



