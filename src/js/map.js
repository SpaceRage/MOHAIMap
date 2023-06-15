var map = L.map('map', { zoomControls: false }).setView([47.6, -122.3], 8);
map.setMaxBounds(map.getBounds());
map.setMinZoom(8);

var street = L.tileLayer(`https://api.mapbox.com/styles/v1/mapbox/dark-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic3BhY2VyYWdlIiwiYSI6ImNsN3BxYmw4YzJvYjUzb3F1aGx1b3N5ZGgifQ.9ISon7NubL5Bv-PzYp20eQ`, {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var satellite = L.tileLayer(`https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v12/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic3BhY2VyYWdlIiwiYSI6ImNsN3BxYmw4YzJvYjUzb3F1aGx1b3N5ZGgifQ.9ISon7NubL5Bv-PzYp20eQ`, {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/">OpenStreetMap</a>'
});

function tribalMarker(feature, latlng) {
    return L.marker(latlng)
        .bindTooltip("Duwamish", {
            permanent: true,
            direction: "center",
            className: "my-labels",
            offset: [-15, 40],
        })
        .openTooltip();

}

var tribeLayer = L.geoJSON(tribes, { pointToLayer: tribalMarker }).addTo(map).on('click', function (e) {
    document.getElementById('abouttab').focus();
    infopanel.style.bottom = "0";
    console.log(e['layer']['feature']['properties']['name']);
    currentPanel['about'] = e['layer']['feature']['properties']['about'];
    setInfo();
});

function mapChange() {
    var checkBox = document.getElementById("satellite");
    if (checkBox.checked == true) {
        street.remove();
        satellite.addTo(map);
    } else {
        satellite.remove();
        street.addTo(map);
    }
}




