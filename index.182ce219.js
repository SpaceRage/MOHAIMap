var e=L.map("map",{zoomControl:!1}).setView([47.76,-122.448],9);e.setMaxBounds(e.getBounds()),e.setMinZoom(9),L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/dark-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic3BhY2VyYWdlIiwiYSI6ImNsN3BxYmw4YzJvYjUzb3F1aGx1b3N5ZGgifQ.9ISon7NubL5Bv-PzYp20eQ",{maxZoom:19,attribution:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(e),L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v12/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic3BhY2VyYWdlIiwiYSI6ImNsN3BxYmw4YzJvYjUzb3F1aGx1b3N5ZGgifQ.9ISon7NubL5Bv-PzYp20eQ",{maxZoom:19,attribution:'&copy; <a href="http://www.openstreetmap.org/">OpenStreetMap</a>'}),L.geoJSON(languages,{onEachFeature:function(e,t){t.bindTooltip(e.properties.name,{direction:"center",permanent:!0,className:"my-labels-two"}).openTooltip()},stroke:!0,fillOpacity:.4,color:"#990000",lineJoin:"round"}).setZIndex(3),L.geoJSON(reservations,{onEachFeature:function(e,t){t.bindTooltip(e.properties.name+" Reservation",{direction:"center",permanent:!0,className:"my-labels-three"}).openTooltip()},stroke:!0,fillOpacity:.4,color:"#ebd234",lineJoin:"round"}).setZIndex(2),L.geoJSON(tribeareas,{stroke:!0,fillOpacity:.6,lineJoin:"round"}).setZIndex(3).addTo(e),L.geoJSON(tribes,{pointToLayer:function(e,t){return L.marker(t).bindTooltip(e.properties.name,{permanent:!0,direction:"center",className:"my-labels",offset:[-13,45]}).openTooltip()}}).setZIndex(4).addTo(e).on("click",function(e){document.getElementById("blur").style.display="block",document.getElementById("abouttab").focus(),infopanel.style.bottom="0",document.getElementById("about").style.display="flex",document.getElementById("artifacts").style.display="none",document.getElementById("exhibit").style.display="none",console.log(e.layer.feature.properties.name),currentPanel.links=e.layer.feature.properties.link,currentPanel.about=e.layer.feature.properties.about,currentPanel.artifacts=e.layer.feature.properties.artifacts,currentPanel.exhibit=e.layer.feature.properties.exhibit,setInfo(),window.speechSynthesis.cancel(),msg.text=document.getElementById("abouttribe").innerHTML+". "+document.getElementById("abouttribeinfo").innerHTML});
//# sourceMappingURL=index.182ce219.js.map
