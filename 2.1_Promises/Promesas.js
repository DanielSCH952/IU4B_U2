const btn1 = document.getElementById("btn");
const ctn = document.getElementById("contenedor");
let nombres = [];
let fotos = [];

async function Get() {
  try {
    const response = await fetch("https://randomuser.me/api/");
    const json = await response.json();
    nombres.push(json.results[0].name.first);
    fotos.push(json.results[0].picture.medium)
    alert()
  } catch (error) {
    alert("Error perra");
  }
}
function Rellenar() {

  while (ctn.firstChild) {
    ctn.removeChild(ctn.firstChild)
  }
  nombres.forEach((element) => {
    var img = document.createElement("img");
    var label = document.createElement("label");
    var div = document.createElement("div");
    div.appendChild(img);
    div.appendChild(label);
    img.textContent = element

  })
}
btn1.addEventListener("click", () => {
  Get();
  alert(nombres);
});