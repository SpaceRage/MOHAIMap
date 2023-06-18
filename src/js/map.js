var map = L.map('map', { zoomControls: false }).setView([47.6, -122.3], 9);
map.setMaxBounds(map.getBounds());
map.setMinZoom(9);

var street = L.tileLayer(`https://api.mapbox.com/styles/v1/mapbox/dark-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic3BhY2VyYWdlIiwiYSI6ImNsN3BxYmw4YzJvYjUzb3F1aGx1b3N5ZGgifQ.9ISon7NubL5Bv-PzYp20eQ`, {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var satellite = L.tileLayer(`https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v12/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic3BhY2VyYWdlIiwiYSI6ImNsN3BxYmw4YzJvYjUzb3F1aGx1b3N5ZGgifQ.9ISon7NubL5Bv-PzYp20eQ`, {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/">OpenStreetMap</a>'
});



var tribeAreaLayer = L.geoJSON(tribeareas, { stroke: true, lineJoin: 'round' }).addTo(map);

function tribalMarker(feature, latlng) {
    return L.marker(latlng)
        .bindTooltip(feature['properties']['name'], {
            permanent: true,
            direction: "center",
            className: "my-labels",
            offset: [-13, 45],
        })
        .openTooltip();

}

var tribeLayer = L.geoJSON(tribes, { pointToLayer: tribalMarker }).addTo(map).on('click', function (e) {
    document.getElementById('blur').style.display = "block";
    document.getElementById('abouttab').focus();
    infopanel.style.bottom = "0";
    document.getElementById("about").style.display = "flex";
    document.getElementById("artifacts").style.display = "none";
    document.getElementById("exhibit").style.display = "none";
    console.log(e['layer']['feature']['properties']['name']);
    currentPanel['about'] = e['layer']['feature']['properties']['about'];
    currentPanel['artifacts'] = e['layer']['feature']['properties']['artifacts'];
    currentPanel['exhibit'] = e['layer']['feature']['properties']['exhibit'];
    setInfo();

});






