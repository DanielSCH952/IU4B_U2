let arregloLabels = [];
let clasificaciones = [];
let cons = 0;
let cont = 0;

let dataSetTemp = {};
const txtClasificacion = document.getElementById("txtClasificacion");
const colorInput = document.getElementById("color");
const btnAgregarClf = document.getElementById("btnAgregarClf");

const selectCl1 = document.getElementById("selectClasificacion1");
const newColumn = document.getElementById("newColumn");
const btnAgregarClm = document.getElementById("btnAgregarClm");

const selectColumns = document.getElementById("selectColumns");
const txtNumb = document.getElementById("numb");
const btnUpdate = document.getElementById("btnUpdate");


function agregarDatosEtiquetas() {
  var optDefault = document.createElement("option");
  while (selectCl1.firstChild) {
    selectCl1.removeChild(selectCl1.firstChild);
  }

  optDefault.text = "Seleccione";
  selectCl1.appendChild(optDefault);

  clasificaciones.forEach((elemento) => {
    var opt = document.createElement('option');
    opt.value = cont;
    opt.text = elemento.label;
    selectCl1.appendChild(opt);
    cont++;
  });
  cont = 0;
}
function agregarDatosColumnas() {
  var optDefault = document.createElement("option");
  while (selectColumns.firstChild) {
    selectColumns.removeChild(selectColumns.firstChild);
  }
  optDefault.text = "Seleccione";
  selectColumns.appendChild(optDefault);
  arregloLabels.forEach((elemento) => {
    var opt = document.createElement('option');
    opt.value = cons;
    opt.text = elemento;
    selectColumns.appendChild(opt);
    cons++;
  });
  cons = 0;
}
function cambiarColor() {
  colorInput.style = `background-color: ${colorInput.value} `;
}
function activarFunciones() {
  agregarDatosEtiquetas();
  agregarDatosColumnas();
}
const ctx = document.getElementById("chart").getContext("2d");

const data = {
  labels: arregloLabels,
  datasets: clasificaciones
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
function hexToRgbA(hex) {
  var c;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('');
    if (c.length == 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = '0x' + c.join('');
    return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',0.2)';
  }
  throw new Error('Bad Hex');
}
function llenarData(index) {

}
function llenarNum() {
  let iDataset = selectCl1.value;
  let iCol = selectColumns.value;
  txtNumb.value = (clasificaciones[iDataset].data[iCol] != null || clasificaciones[iDataset].data[iCol] != "") ? clasificaciones[iDataset].data[iCol] : 0;
}
function actualizarDatas() {
  if (arregloLabels.length > 0) {
    clasificaciones.forEach(element => {
      if (element.data.length < arregloLabels.length) {
        for (let i = element.data.length; i < arregloLabels.length; i++) {
          element.data.push(0);
        }
      }
    });
  }

}
const chart = new Chart(ctx, config);

btnAgregarClf.addEventListener("click", () => {
  clasificaciones.push({
    label: txtClasificacion.value,
    data: [],
    backgroundColor: [
      (hexToRgbA(colorInput.value) != "Bad Hex") ? hexToRgbA(colorInput.value) : 'rgba(0,0,0,0.2)'
    ],
    borderColor: [
      colorInput.value
    ],
    borderWidth: 2
  });
  agregarDatosEtiquetas();
  actualizarDatas();
  chart.update();
  txtClasificacion.value = "";
  colorInput.style = `background-color: rgba(237, 222, 122, 0.842)`;
});
btnAgregarClm.addEventListener("click", () => {
  arregloLabels.push(newColumn.value);
  clasificaciones.forEach((e) => {
    e.data.push(0);
  })
  newColumn.value = "";
  agregarDatosColumnas();
  actualizarDatas();
  chart.update();
  console.log(clasificaciones);
});

btnUpdate.addEventListener("click", () => {
  var indexdataset = selectCl1.value;
  var indexcl = selectColumns.value;
  var nm = parseInt(txtNumb.value);
  if ((indexcl + 1) > clasificaciones[indexdataset].data.length && clasificaciones[indexdataset].data.length < arregloLabels.length) {
    actualizarDatas();
  }
  clasificaciones[indexdataset].data[indexcl] = nm;
  chart.update();
});