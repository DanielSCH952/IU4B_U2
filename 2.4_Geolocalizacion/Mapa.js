var map = L.map('map').setView([19.879995, -97.384083], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
const marker = L.marker([19.8828005, -97.3929456]).addTo(map)
marker.bindPopup("<b>Hola mapaches!</b><br>Estamos en el Edificio D.").openPopup();

const popup = L.popup();
function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent(`Latitud: ${e.latlng.lat}  Longitud: ${e.latlng.lng}`)
        .openOn(map);
}

map.on('click', onMapClick);