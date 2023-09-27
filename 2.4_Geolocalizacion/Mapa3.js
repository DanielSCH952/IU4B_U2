let latlng = [19.879995, -97.384083];
const map = L.map('map').setView(latlng, 3);
// const button = document.getElementById("btn");
const txtNombre = document.getElementById("txtNombre");
const txtEdad = document.getElementById("txtEdad");
const txtSex = document.getElementById("txtSexo");
const tbody = document.getElementById("tbody");
const lista = document.getElementById("list");
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
let contador = 1;
const popup = L.popup();
function onMapClick(e) {
    let nm = txtNombre.value;
    let edad = txtEdad.value;
    let sx = txtSex.value;
    if (nm == "" | edad == "") {
        alert("Ingrese valores");
    } else {
        let lat = e.latlng.lat;
        let lng = e.latlng.lng;
        let marker = L.marker([lat, lng]).addTo(map);
        let tr = `
        <tr>
        <th scope="row">${contador}</th>
        <td>${nm}</td>
        <td>${edad}</td>
        <td>${sx}</td>
        <td>${lat}</td>
        <td>${lng}</td>
        </tr>`;
        marker.bindPopup(`<b>Soy ${nm} !</b> <br>  Estoy por aquí`).openPopup();
        tbody.insertAdjacentHTML("beforeend", tr);
        contador++;
    }

}
map.on('click', onMapClick);