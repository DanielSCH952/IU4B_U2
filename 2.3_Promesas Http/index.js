const btn = document.getElementById("btnConsultar");
const span = document.getElementById("estatus");
const contenedor = document.getElementById("container");
let i = 1;
btn.addEventListener("click", () => {
    imagen = document.createElement("img");
    imagen.alt = `Perro ${i}`
    imagen.classList.add("img");
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(respuesta => respuesta.json())
        .then(data => {
            if (data.status != "success") {
                imagen.alt = "No encontrada"
            } else {
                imagen.src = data.message;
                contenedor.appendChild(imagen);
            }
        });
    i++;
})

