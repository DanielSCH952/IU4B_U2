const btn1 = document.getElementById("btn");
const ctn = document.getElementById("contenedor");
let nombres = [];
let fotos = [];

async function Get() {
  try {
    const response = await fetch("https://randomuser.me/api/");
    const json = await response.json();
    var texto = `Ciudad: ${json.results[0].location.city} Estado: ${json.results[0].location.state} Edad: ${json.results[0].dob.age}`;
    Rellenar(json.results[0].picture.medium, json.results[0].name.first, texto);
  } catch (error) {
    alert("Error perra");
  }
}
function Rellenar(image, titulo, cuerpo) {
  const card = document.createElement("div");
  const imagen = document.createElement("img");
  const cardBody = document.createElement("div");
  const h5 = document.createElement("h5");
  const pr = document.createElement("p");
  card.classList.add("card");
  imagen.classList.add("card-img-top");
  cardBody.classList.add("card-body");
  h5.classList.add("card-title");
  pr.classList.add("card-text")
  card.style = 'width: 18rem;';
  imagen.src = image;
  h5.innerText = titulo;
  pr.textContent = cuerpo;
  card.appendChild(imagen);
  cardBody.appendChild(h5);
  cardBody.appendChild(pr);
  card.appendChild(cardBody);
  ctn.appendChild(card);
}
btn1.addEventListener("click", () => {
  Get();
});