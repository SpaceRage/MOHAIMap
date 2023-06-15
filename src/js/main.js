var currentPanel = {
    "about": null,
    "people": null,
    "artifacts": null,
    "exhibit": null
}

map.on('click', function () {
    console.log("Map clicked");
    settings.style.left = "-45%";
    settings.style.color = "white";
    settings.style.backgroundColor = "#00395a";
    layers.style.right = "-45%";
    layers.style.color = "white";
    layers.style.backgroundColor = "#00395a";
    infopanel.style.bottom = "-67%";
});


settings.onclick = function () {
    console.log(settings.style.left);
    if (settings.style.left != "-10%") {
        settings.style.left = "-10%";
        settings.style.color = "black";
        settings.style.backgroundColor = "white";
    }
}

layers.onclick = function () {
    console.log(layers.style.right);
    if (layers.style.right != "-10%") {
        layers.style.right = "-10%";
        layers.style.color = "black";
        layers.style.backgroundColor = "white";
    }
}

function setInfo() {
    console.log(currentPanel['about']['photo']);
    document.getElementById("aboutphoto").src = currentPanel['about']['photo'];
}

// Info panel navigation

var abouttab = document.getElementById("abouttab");
var peopletab = document.getElementById("peopletab");
var artifactstab = document.getElementById("artifactstab");
var exhibittab = document.getElementById("exhibittab");

var about = document.getElementById("about");
var people = document.getElementById("people");
var artifacts = document.getElementById("artifacts");
var exhibit = document.getElementById("exhibit");

// Default
about.style.display = "block";
people.style.display = "none";
artifacts.style.display = "none";
exhibit.style.display = "none";

abouttab.onclick = function () {
    about.style.display = "block";
    people.style.display = "none";
    artifacts.style.display = "none";
    exhibit.style.display = "none";
}

peopletab.onclick = function () {
    about.style.display = "none";
    people.style.display = "block";
    artifacts.style.display = "none";
    exhibit.style.display = "none";
}

artifactstab.onclick = function () {
    about.style.display = "none";
    people.style.display = "none";
    artifacts.style.display = "block";
    exhibit.style.display = "none";
}

exhibittab.onclick = function () {
    about.style.display = "none";
    people.style.display = "none";
    artifacts.style.display = "none";
    exhibit.style.display = "block";
}
