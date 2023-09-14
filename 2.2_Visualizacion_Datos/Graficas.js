let arreglo = [];
let arreglo2 = [1, 2, 3, 4, 5];
let cont = 0;
const btnAgregar = document.getElementById("btnAgregar");
const ctx = document.getElementById("chart").getContext("2d");
const data = {
  labels: ["C#","Java","C++","PHP","JavaScript"],
  datasets: [{
    label: 'Lenguajes de programacion',
    data: [65, 59, 80, 81, 89],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)'
    ],
    borderColor: [
      'rgb(255, 99, 132)'
    ],
    borderWidth: 2
  }]
};
const config = {
  type: 'bar',
  data: data,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  },
};

const chart = new Chart(ctx, config);

btnAgregar.addEventListener("click", () => {
  arreglo.push(cont);
  cont++;
  console.log(arreglo);
})