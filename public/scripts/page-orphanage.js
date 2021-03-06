const options = {
  dragging: false,
  touchZone: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false
}

const spanLat = document.querySelector("span[data-lat]");
const spanLng = document.querySelector("span[data-lng]");
const lat = spanLat.dataset.lat;
const lng = spanLng.dataset.lng;

// setView([lat, long], zoom)
const map = L.map( 'mapid', options ).setView( [lat, lng], 15 );

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
).addTo( map );

const icon = L.icon( {
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2]
} );

const popup = L.popup( {
  closeButton: false,
  className: 'map-popup',
  minWidth: 240,
  minHeight: 240,
} ).setContent( 'Lar das meninas <a href="orphanage?id=1" class="choose-orphanage"><img src="/images/arrow-white.svg"></a>' );


L.marker( [lat, lng], { icon: icon } )
  .addTo( map );

function selectImage( event ) {
  const button = event.currentTarget;

  const buttons = document.querySelectorAll(".images button");
  buttons.forEach(removeActiveClass);
  // buttons.forEach((button) => {
  //   button.classList.remove("active");
  // });

  function removeActiveClass(button) {
    button.classList.remove("active");
  }

  const image = button.children[0];
  const imageContainer = document.querySelector(".orphanage-details > img");

  imageContainer.src = image.src;

  // function removeActiveClass(button){
  //   button.classList.remove("active");
  // }
  button.classList.add("active");
}