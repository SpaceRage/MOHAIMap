// TODO:
// - Add more tribes:
// - Lower Skagit
// - Stillaguamish
// - Snohomish
// - Skykomish
// - Snoqualmie
// - Sammamish
// - Chimakum
// - S'Klallam
// - Skokomish
// - Twana
// - Squaxin
// - Nisqually
// - Puyallup
// - Steilacoom
// - Suquamish


var tribes = {
    type: "FeatureCollection",
    name: "tribes",
    crs: { type: "name", properties: { name: "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    features: [
        {
            type: "Feature",
            properties: {
                name: "Duwamish",
                type: "tribe",
                about: {
                    "photo": "https://drive.google.com/uc?export=view&id=19PqBvS4IGloPcHCPRmPW4yaLlF0bDwYg",
                    "tribeName": "The Duwamish",
                    "tribeDesc": "The Duwamish are a Lushootseed-speaking Native American people in western Washington, and the indigenous people of metropolitan Seattle, where they have been living since the end of the last glacial period (c. 8000 BCE, 10,000 years ago). The modern Duwamish descend from at least two separate groups: the Duwamish, and the Hachuamish, being the largest. Traditionally, the Duwuamish spoke a subdialect of the southern dialect of Lushootseed, which is a Salishan dialect continuum that is spoken throught the Puget Sound region of Washington. Duwamish people today are enrolled in several different tribes, including(but not limited to) the federally- recognized Muckleshoot Indian Tribe and Suquamish Tribe, and the epynomous Duwamish Tribe, which has not received federal recognition."
                },
                artifacts: [
                    {
                        "name": null,
                        "photo": null,
                        "blurb": null
                    }
                ],
                exhibit: {
                    "photo": "https://drive.google.com/uc?export=view&id=1rVvYX_TFN37pUECJvoVtrL4xjhfcWc4P",
                    "location": "MOHAI 2nd Floor<br>True Northwest: The Seattle Journey"
                }
            },
            geometry: { type: "Point", coordinates: [-122.335, 47.526] }
        },
        {
            type: "Feature",
            properties: {
                name: "Upper Skagit",
                type: "tribe",
                about: {
                    "photo": "duwamishmain.f4ba586a.png",
                    "tribeName": "Upper Skagit",
                    "tribeDesc": "The Duwamish are a Lushootseed-speaking Native American people in western Washington, and the indigenous people of metropolitan Seattle, where they have been living since the end of the last glacial period (c. 8000 BCE, 10,000 years ago). The modern Duwamish descend from at least two separate groups: the Duwamish, and the Hachuamish, being the largest. Traditionally, the Duwuamish spoke a subdialect of the southern dialect of Lushootseed, which is a Salishan dialect continuum that is spoken throught the Puget Sound region of Washington. Duwamish people today are enrolled in several different tribes, including(but not limited to) the federally- recognized Muckleshoot Indian Tribe and Suquamish Tribe, and the epynomous Duwamish Tribe, which has not received federal recognition."
                },
                artifacts: [
                    {
                        "name": null,
                        "photo": null,
                        "blurb": null
                    }
                ]
            },
            geometry: {
                type: "Point", coordinates: [-121.855, 48.5]
            }
        },
        {
            type: "Feature",
            properties: {
                name: "Lower Skagit",
                type: "tribe",
                about: {
                    "photo": "duwamishmain.f4ba586a.png",
                    "tribeName": "Lower Skagit",
                    "tribeDesc": "The Duwamish are a Lushootseed-speaking Native American people in western Washington, and the indigenous people of metropolitan Seattle, where they have been living since the end of the last glacial period (c. 8000 BCE, 10,000 years ago). The modern Duwamish descend from at least two separate groups: the Duwamish, and the Hachuamish, being the largest. Traditionally, the Duwuamish spoke a subdialect of the southern dialect of Lushootseed, which is a Salishan dialect continuum that is spoken throught the Puget Sound region of Washington. Duwamish people today are enrolled in several different tribes, including(but not limited to) the federally- recognized Muckleshoot Indian Tribe and Suquamish Tribe, and the epynomous Duwamish Tribe, which has not received federal recognition."
                },
                artifacts: [
                    {
                        "name": null,
                        "photo": null,
                        "blurb": null
                    }
                ]
            },
            geometry: {
                type: "Point", coordinates: [-122.604, 48.2]
            }
        },

    ]
}