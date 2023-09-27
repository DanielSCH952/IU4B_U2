const btn = document.getElementById("btn");
const lista = document.getElementById("list");
let contador = 0;
let varones = [];
let mujeres = [];
let lst = [];
const ctx = document.getElementById("canva").getContext("2d");
const datax = {
    labels: [`Personas (${contador})`],
    datasets: [{
        label: ["Hombres"],
        data: [0],
        backgroundColor: [
            'rgba(55, 10, 132, 0.2)'
        ],
        borderColor: [
            'rgb(55, 10, 132)'
        ],
        borderWidth: 2
    }, {
        label: ["Mujeres"],
        data: [0],
        backgroundColor: [
            'rgba(222, 44, 180,.40)'
        ],
        borderColor: [
            'rgb(222, 44, 180)'
        ],
        borderWidth: 2
    }
    ]
};
const config = {
    type: 'bar',
    data: datax,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    },
};
const chart = new Chart(ctx, config);
btn.addEventListener("click", () => {
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

    fetch("https://randomuser.me/api/")
        .then(respuesta => respuesta.json())
        .then(data => {
            person = {
                nombre: data.results[0].name.first,
                edad: data.results[0].dob.age,
                imagen: data.results[0].picture.medium,
                telefono: data.results[0].phone,
                genero: data.results[0].gender
            }
            if (person.genero == "female") {
                divImagen.className = "imagen-y";
                mujeres.push(person);
                datax.datasets[1].data[0] = mujeres.length;
            } else if (person.genero == "male") {
                divImagen.className = "imagen-x";
                varones.push(person);
                datax.datasets[0].data[0] = varones.length;
            }
            contador++;
            datax.labels[0] = `Personas (${contador})`;
            chart.update();
            img.src = person.imagen;
            label1.textContent = person.nombre;
            label2.textContent = `Edad: ${person.edad}`;
            label3.textContent = `Tel: ${person.telefono}`;
        });
    divImagen.appendChild(img);
    divImagen.appendChild(divLabels);
    divLabels.appendChild(label1);
    divLabels.appendChild(label2);
    divLabels.appendChild(label3);
    lista.appendChild(divImagen);
});