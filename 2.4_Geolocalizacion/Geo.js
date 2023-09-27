const btn = document.getElementById("btn");
const p = document.getElementById("ubicacion");

function GetUbication() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error);
    } else {
        p.innerText = "La geolocalizacion no esta soportada";
    }
}
function success(position) {
    p.innerHTML = `Latitud: ${position.coords.latitude} <br> Longitud: ${position.coords.longitude}`;
}
function error(err) {
    switch (err.code) {
        case err.PERMISSION_DENIED:
            p.innerHTML =
                "Permiso denegado para la ubicacion";
            break;
        case err.POSITION_UNAVAILABLE:
            p.innerHTML =
                "Ubicacion no disponible";
            break;
        case err.TIMEOUT:
            p.innerHTML =
                "Se ha agotado el tiempo de espera carnal!!!";
            break;
        case err.UNKNOWN_ERROR:
            p.innerHTML =
                "Error Desconocido, ya cambia tu lap carnal!!";
            break;
    }
}
btn.addEventListener("click", GetUbication);