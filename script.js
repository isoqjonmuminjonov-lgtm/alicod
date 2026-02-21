var ism = prompt("So'z kiriting");

    var sport = ism.split(",");

for (var i = 0; i < sport.length; i++) {
    sport[i] = sport[i].trim();
}

    console.log( sport.length , ("ta so'z"));

for (var i = 0; i < sport.length; i++) {
    console.log(sport[i]);
}