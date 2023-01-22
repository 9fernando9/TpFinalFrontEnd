function cargarDatosUrl(user) {
  window.document.title = "CV " + user.name.first + " " + user.name.last;
  cargaDatosPersonales(user);
  cargaDatosDeContacto(user);
}

function cargaDatosPersonales(datos) {
  document.getElementById("imgPerfil").src = datos.picture.large;
  document.getElementById("firstLast").innerHTML =
    datos.name.first + " " + datos.name.last;
  document.getElementById("anios").innerText = datos.dob.age + " años";
}

function cargaDatosDeContacto(datos) {
  document.getElementById("telefono").innerText = datos.cell;
  document.getElementById("correo").innerText = datos.email;
  let ubicacion =
    datos.location.city +
    "-" +
    datos.location.state +
    "-" +
    datos.location.country;
  document.getElementById("gpsUbicacion").innerText = ubicacion;
}

//buscando los datos desde la api randomuser
let url = "https://randomuser.me/api/?format=json";
const fetchUsers = async () => {
  let response = await fetch(url);
  return response.json();
};

fetchUsers().then(({ results }) => {
  const [datosUsuario] = results;
  cargarDatosUrl(datosUsuario);
});
