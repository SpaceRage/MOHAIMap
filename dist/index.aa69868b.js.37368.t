window.speechSynthesis.cancel();
var currentPanel = {
    "about": null,
    "artifacts": null,
    "exhibit": null
};
var darkModeOn = false;
var highContrastOn = false;
var blur = document.getElementById("blur");
blur.onclick = function() {
    map.fire("click");
};
var controls = document.getElementById("controls");
controls.onclick = function() {
    map.fire("click");
};
map.on("click", function() {
    window.speechSynthesis.cancel();
    console.log("Map clicked");
    settings.style.left = "-45%";
    settings.style.color = "white";
    settings.style.backgroundColor = "#00395a";
    layers.style.right = "-45%";
    layers.style.color = "white";
    layers.style.backgroundColor = "#00395a";
    infopanel.style.bottom = "-67%";
    blur.style.display = "none";
});
settings.onclick = function() {
    layers.style.right = "-45%";
    layers.style.color = "white";
    layers.style.backgroundColor = "#00395a";
    console.log(settings.style.left);
    if (settings.style.left != "-25%") {
        if (highContrastOn) {
            settings.style.left = "-25%";
            settings.style.color = "yellow";
            settings.style.backgroundColor = "black";
        } else if (darkModeOn) {
            settings.style.left = "-25%";
            settings.style.color = "white";
            settings.style.backgroundColor = "black";
        } else {
            settings.style.left = "-25%";
            settings.style.color = "black";
            settings.style.backgroundColor = "white";
        }
    }
};
layers.onclick = function() {
    settings.style.left = "-45%";
    settings.style.color = "white";
    settings.style.backgroundColor = "#00395a";
    console.log(layers.style.right);
    if (layers.style.right != "-25%") {
        if (highContrastOn) {
            layers.style.right = "-25%";
            layers.style.color = "yellow";
            layers.style.backgroundColor = "black";
        } else if (darkModeOn) {
            layers.style.left = "-25%";
            layers.style.color = "white";
            layers.style.backgroundColor = "black";
        } else {
            layers.style.right = "-25%";
            layers.style.color = "black";
            layers.style.backgroundColor = "white";
        }
    }
};
function setInfo() {
    console.log(currentPanel);
    document.getElementById("aboutphoto").src = "https://drive.google.com/uc?export=view&id=" + currentPanel["about"]["photo"];
    document.getElementById("abouttribe").innerHTML = "The " + currentPanel["about"]["tribeName"] + " Tribe";
    document.getElementById("abouttribeinfo").innerHTML = currentPanel["about"]["tribeDesc"];
    document.getElementById("artifacts").innerHTML = "";
    if (currentPanel["artifacts"].length != 0) currentPanel["artifacts"].forEach(function(artifact) {
        var artifactDiv = document.createElement("div");
        artifactDiv.className = "h-[85%] flex flex-col justify-center items-center p-6 m-8 space-y-10 bg-mohai text-white rounded-2xl";
        artifactDiv.innerHTML = "<img class='h-[80%] align-middle items-center' src='https://drive.google.com/uc?export=view&id=" + artifact["photo"] + "'><p>" + artifact["blurb"] + "</p>";
        document.getElementById("artifacts").appendChild(artifactDiv);
    });
    document.getElementById("exhibitphoto").src = "https://drive.google.com/uc?export=view&id=" + currentPanel["exhibit"]["photo"];
    document.getElementById("exhibitlocation").innerHTML = currentPanel["exhibit"]["location"];
    document.getElementById("about").style.display = "flex";
    document.getElementById("artifacts").style.display = "none";
    document.getElementById("exhibit").style.display = "none";
}
// Info panel navigation
var abouttab = document.getElementById("abouttab");
var artifactstab = document.getElementById("artifactstab");
var exhibittab = document.getElementById("exhibittab");
var about = document.getElementById("about");
var artifacts = document.getElementById("artifacts");
var exhibit = document.getElementById("exhibit");
var msg = new SpeechSynthesisUtterance();
// Default
about.style.display = "flex";
artifacts.style.display = "none";
exhibit.style.display = "none";
abouttab.onclick = function() {
    about.style.display = "flex";
    artifacts.style.display = "none";
    exhibit.style.display = "none";
    msg.text = document.getElementById("abouttribe").innerHTML + ". " + document.getElementById("abouttribeinfo").innerHTML;
    if (narratorOn) window.speechSynthesis.speak(msg);
};
artifactstab.onclick = function() {
    window.speechSynthesis.cancel();
    about.style.display = "none";
    artifacts.style.display = "flex";
    exhibit.style.display = "none";
};
exhibittab.onclick = function() {
    window.speechSynthesis.cancel();
    about.style.display = "none";
    artifacts.style.display = "none";
    exhibit.style.display = "flex";
    msg.text = "Located at " + document.getElementById("exhibitlocation").innerHTML;
    if (narratorOn) window.speechSynthesis.speak(msg);
};
// SETTINGS
function mapChange() {
    var satelliteCheckBox = document.getElementById("satellite");
    if (satelliteCheckBox.checked == true) {
        street.remove();
        satellite.addTo(map);
    } else {
        satellite.remove();
        street.addTo(map);
    }
}
function darkMode() {
    var darkModeCheckBox = document.getElementById("darkmode");
    if (darkModeCheckBox.checked == true) {
        darkModeOn = true;
        // Settings dark mode, since already open
        settings.style.left = "-10%";
        settings.style.color = "white";
        settings.style.backgroundColor = "black";
        // Infopanel
        about.style.backgroundColor = "black";
        artifacts.style.backgroundColor = "black";
        exhibit.style.backgroundColor = "black";
        about.style.color = "white";
        artifacts.style.color = "white";
        exhibit.style.color = "white";
    } else {
        darkModeOn = false;
        // Settings light mode, since already open
        settings.style.left = "-10%";
        settings.style.color = "black";
        settings.style.backgroundColor = "white";
        // Infopanel
        about.style.backgroundColor = "white";
        artifacts.style.backgroundColor = "white";
        exhibit.style.backgroundColor = "white";
        about.style.color = "black";
        artifacts.style.color = "black";
        exhibit.style.color = "black";
    }
}
function highContrast() {
    var highContrastCheckBox = document.getElementById("highcontrast");
    if (highContrastCheckBox.checked == true) {
        highContrastOn = true;
        console.log("high contrast on");
        // Settings dark mode, since already open
        settings.style.left = "-10%";
        settings.style.color = "yellow";
        settings.style.backgroundColor = "black";
        // Infopanel
        about.style.backgroundColor = "black";
        artifacts.style.backgroundColor = "black";
        exhibit.style.backgroundColor = "black";
        about.style.color = "yellow";
        artifacts.style.color = "yellow";
        exhibit.style.color = "yellow";
    } else {
        highContrastOn = false;
        if (darkModeOn) {
            // Settings dark mode, since already open
            settings.style.left = "-10%";
            settings.style.color = "white";
            settings.style.backgroundColor = "black";
            // Infopanel
            about.style.backgroundColor = "black";
            artifacts.style.backgroundColor = "black";
            exhibit.style.backgroundColor = "black";
            about.style.color = "white";
            artifacts.style.color = "white";
            exhibit.style.color = "white";
        } else {
            // Settings light mode, since already open
            settings.style.left = "-10%";
            settings.style.color = "black";
            settings.style.backgroundColor = "white";
            // Infopanel
            about.style.backgroundColor = "white";
            artifacts.style.backgroundColor = "white";
            exhibit.style.backgroundColor = "white";
            about.style.color = "black";
            artifacts.style.color = "black";
            exhibit.style.color = "black";
        }
    }
}
function narrator() {
    var narratorCheckBox = document.getElementById("narrator");
    if (narratorCheckBox.checked == true) narratorOn = true;
    else {
        narratorOn = false;
        window.speechSynthesis.cancel();
    }
}
// LAYERS
function tribeToggle() {
    var tribeCheckBox = document.getElementById("tribes");
    if (tribeCheckBox.checked == true) tribeLayer.addTo(map).setZIndex(2);
    else tribeLayer.remove();
}
function tribalAreasToggle() {
    var tribeAreaCheckBox = document.getElementById("tribalareas");
    if (tribeAreaCheckBox.checked == true) tribeAreaLayer.addTo(map).setZIndex(3);
    else tribeAreaLayer.remove();
}
function languagesToggle() {
    var languageCheckBox = document.getElementById("languages");
    if (languageCheckBox.checked == true) languageLayer.addTo(map).setZIndex(4).bringToBack();
    else languageLayer.remove();
}

//# sourceMappingURL=index.aa69868b.js.map
