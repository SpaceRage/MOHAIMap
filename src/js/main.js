var currentPanel = {
    "about": null,
    "artifacts": null,
    "exhibit": null
}

var darkModeOn = false;

var blur = document.getElementById('blur');
blur.onclick = function () {
    map.fire('click');
};

map.on('click', function () {
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


settings.onclick = function () {
    layers.style.right = "-45%";
    layers.style.color = "white";
    layers.style.backgroundColor = "#00395a";
    console.log(settings.style.left);
    if (settings.style.left != "-10%") {
        if (!darkModeOn) {
            settings.style.left = "-10%";
            settings.style.color = "black";
            settings.style.backgroundColor = "white";
        } else {
            settings.style.left = "-10%";
            settings.style.color = "white";
            settings.style.backgroundColor = "black";
        }
    }
}

layers.onclick = function () {
    settings.style.left = "-45%";
    settings.style.color = "white";
    settings.style.backgroundColor = "#00395a";
    console.log(layers.style.right);
    if (layers.style.right != "-10%") {
        if (!darkModeOn) {
            layers.style.right = "-10%";
            layers.style.color = "black";
            layers.style.backgroundColor = "white";
        } else {
            layers.style.right = "-10%";
            layers.style.color = "white";
            layers.style.backgroundColor = "black";
        }
    }
}

function setInfo() {
    console.log(currentPanel);
    document.getElementById("aboutphoto").src = currentPanel['about']['photo'];
    document.getElementById("abouttribe").innerHTML = currentPanel['about']['tribeName'];
    document.getElementById("abouttribeinfo").innerHTML = currentPanel['about']['tribeDesc'];

    document.getElementById("exhibitphoto").src = currentPanel['exhibit']['photo'];
    document.getElementById("exhibitlocation").innerHTML = currentPanel['exhibit']['location'];
}

// Info panel navigation

var abouttab = document.getElementById("abouttab");
var artifactstab = document.getElementById("artifactstab");
var exhibittab = document.getElementById("exhibittab");

var about = document.getElementById("about");
var artifacts = document.getElementById("artifacts");
var exhibit = document.getElementById("exhibit");

// Default
about.style.display = "flex";
artifacts.style.display = "none";
exhibit.style.display = "none";

abouttab.onclick = function () {
    about.style.display = "flex";
    artifacts.style.display = "none";
    exhibit.style.display = "none";
}

artifactstab.onclick = function () {
    about.style.display = "none";
    artifacts.style.display = "flex";
    exhibit.style.display = "none";
}

exhibittab.onclick = function () {
    about.style.display = "none";
    artifacts.style.display = "none";
    exhibit.style.display = "flex";
}


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
    } else {
        darkModeOn = false;

        // Settings light mode, since already open
        settings.style.left = "-10%";
        settings.style.color = "black";
        settings.style.backgroundColor = "white";
    }
}

// LAYERS
function tribeToggle() {
    var tribeCheckBox = document.getElementById("tribes");
    if (tribeCheckBox.checked == true) {
        tribeLayer.addTo(map);
    } else {
        tribeLayer.remove();
    }
}

function tribalAreasToggle() {
    var tribeAreaCheckBox = document.getElementById("tribalareas");
    if (tribeAreaCheckBox.checked == true) {
        tribeAreaLayer.addTo(map);
    } else {
        tribeAreaLayer.remove();
    }
}