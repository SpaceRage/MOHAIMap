var tribes = {
    type: "FeatureCollection",
    name: "tribes",
    crs: { type: "name", properties: { name: "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    features: [{
        type: "Feature",
        properties: {
            name: "Duwamish",
            desc: "Duwamish Tribe",
            type: "tribe",
            about: {
                "photo": "../img/tribes/duwamish/main/duwamishmain.png",
                "blurb": null
            }
        },
        geometry: { type: "Point", coordinates: [-122.335, 47.526] }
    }]
}