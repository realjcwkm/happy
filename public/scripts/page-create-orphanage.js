// Cria o mapa, setView([lat, long], zoom)
const map = L.map("mapid").setView([-27.2200772, -49.6482579], 15);

// Cria e adiciona o tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// Cria o icone
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

let marker;

map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;

  marker && map.removeLayer(marker);

  // adiciona o icon no mapa
  marker = L.marker([lat, lng], { icon })
              .addTo(map);
});

// upload de fotos
function addPhotoField(){
  // pegar o container de fotos com id images
  const container = document.querySelector("#images");
  
  // pegar o container para duplicar .new-images
  const fieldsContainer = document.querySelector(".new-upload");
  
  // realizar o clone da ultima image adicionada
  const newFieldContainer = fieldsContainer[fieldsContainer.length-1].cloneNode(true);
  
  // verificar se o campo esta vazio, se sim, nao adicionar ao container de imagens
  const input = newFieldContainer.children[0];

  if (input.value == ""){
    return;
  }

  //limpar o campo antes de adicionar ao container de imagens
  input.value = "";

  // adicionar o clone ao container de fotos
  container.appendChild(newFieldContainer)
}

function deleteField(event){
  const span = event.currentTarget;

  const fieldsContainer = document.querySelector(".new-upload");

  if(fieldsContainer.length <= 1){
    span.parentNode.children[0].value = "";
    return;
  }

  span.parentNode.remove();
}

function toggleSelect(event){
  document.querySelector(".button-select button").forEach((button) => {
    button.classList.remove("active");
  });

  const button = event.currentTarget;
  button.classList.add("active");

  const input = document.querySelector("[name=open_on_weekends");

  input.value = button.dataset.value;
}

function validate(event){
  // validar se todos os campos estao preenchidos
  // validar se lat e lng esta preenchido
  event.preventDefault();
}


L.marker([-27.2200772, -49.6482579], { icon: icon }).addTo(map);
