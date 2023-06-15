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
    infopanel.style.bottom = "-50%";
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
