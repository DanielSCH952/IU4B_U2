let latlng = [19.879995, -97.384083];
const map = L.map('map').setView(latlng, 1);
const button = document.getElementById("btn");

const lista = document.getElementById("list");
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const popup = L.popup();
function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent(`Latitud: ${e.latlng.lat}  Longitud: ${e.latlng.lng}`)
        .openOn(map);
}
btn.addEventListener("click", () => {
    //Variables html
    const divImagen = document.createElement("div");
    // Crear el elemento <img class="curve-img">
    const img = document.createElement("img");
    img.className = "curve-img";
    // Crear el elemento <div class="labels">
    const divLabels = document.createElement("div");
    divLabels.className = "labels";
    // Crear los elementos <label> y establecer su contenido
    const label1 = document.createElement("label");
    const label2 = document.createElement("label");
    const label3 = document.createElement("label");

    //Operatividad
    fetch("https://randomuser.me/api/")
        .then(respuesta => respuesta.json())
        .then(data => {
            person = {
                nombre: data.results[0].name.first,
                edad: data.results[0].dob.age,
                imagen: data.results[0].picture.medium,
                telefono: data.results[0].phone,
                genero: data.results[0].gender,
                city: data.results[0].location.city,
                state: data.results[0].location.state,
                country: data.results[0].location.country,
                coordinates: [data.results[0].location.coordinates.latitude, data.results[0].location.coordinates.longitude]
            };
                (person.genero == "female") ? divImagen.className = "imagen-y" : divImagen.className = "imagen-x";
            // if (person.genero == "female") {
            //     divImagen.className = "imagen-y";
            // } else if (person.genero == "male") {
            //     divImagen.className = "imagen-x";
            // }
            img.src = person.imagen;
            label1.textContent = person.nombre;
            label2.textContent = `Edad: ${person.edad}`;
            label3.textContent = `Ciudad: ${person.city}  Estado: ${person.state} Pais: ${person.country}`;
            latlng = [person.coordinates[0], person.coordinates[1]]
            const marker = L.marker([person.coordinates[0], person.coordinates[1]]).addTo(map)
            marker.bindPopup(`<b>Hola!</b> <br> Soy ${person.nombre} y me encuentro por aquí`).openPopup();
        });

    //Agregaciones al html
    divImagen.appendChild(img);
    divImagen.appendChild(divLabels);
    divLabels.appendChild(label1);
    divLabels.appendChild(label2);
    divLabels.appendChild(label3);
    lista.appendChild(divImagen);
});