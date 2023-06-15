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
                "photo": "duwamishmain.f4ba586a.png",
                "blurb": null
            },
            people: [
                {
                    "name": "Chief Seattle",
                    "photo": "seattle.1f2b8b5a.png",
                    "blurb": null
                }
            ],
            artifacts: [
                {
                    "name": null,
                    "photo": null,
                    "blurb": null
                }
            ]
        },
        geometry: { type: "Point", coordinates: [-122.335, 47.526] }
    }]
}