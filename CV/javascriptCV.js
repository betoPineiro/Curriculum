alert("tocar si anda")
function efectoIdiomas()
{
    var misIdiomas = document.getElementById("misIdiomas");
    var distancia_misIdiomas = window.innerHeight - misIdiomas.getBoundingClientRect().top;
    if (distancia_misIdiomas >= 300)
    {
        let skills = document.getElementsByClassName("progreso");
        skills(0).classList.add("ingles");
        /*habilidades(1).classList.add("Francés");
        habilidades(2).classList.add("Portugués");
        habilidades(3).classList.add("Chino");
        habilidades(4).classList.add("ETAP");
        habilidades(5).classList.add("autocad");
        habilidades(6).classList.add("SolidWorks");
        habilidades(7).classList.add("GeoFryPlots");*/
    }
}

window.onscroll = function()
{
    efectoIdiomas();
}


/*41.14
skills
progreso
javascript
49.56

1.47.00
.skills .skill .javascript
*/