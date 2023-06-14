map.on('click', function () {
    console.log("Map clicked");
    settings.style.left = "-40%";
    settings.style.color 
    layers.style.right = "-40%";
});


settings.onclick = function () {
    console.log(settings.style.left);
    if (settings.style.left != "-10%") {
        settings.style.left = "-10%";
    }
}

layers.onclick = function () {
    console.log(layers.style.right);
    if (layers.style.right != "-10%") {
        layers.style.right = "-10%";
    }
}
