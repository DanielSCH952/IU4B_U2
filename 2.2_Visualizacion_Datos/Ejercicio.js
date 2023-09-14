let arregloLabels = [];
let arregloCantidades = [];
let cont = 0;
const select = document.getElementById("selectDatas");
const btnAgregar = document.getElementById("btnAgregar");
const txtLabel = document.getElementById("txtLenguaje");
const txtCant = document.getElementById("cant");

const ctx = document.getElementById("chart").getContext("2d");
const data = {
  labels: arregloLabels,
  datasets: [{
    label: "Usuarios",
    data: arregloCantidades,
    backgroundColor: [
      'rgba(55, 10, 132, 0.2)'
    ],
    borderColor: [
      'rgb(55, 10, 132)'
    ],
    borderWidth: 2
  }

  ]
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
  arregloLabels.push(txtLabel.value);
  arregloCantidades.push(parseInt(txtCant.value));
  chart.update();
  txtLabel.value="";
  txtCant.value="";
});
