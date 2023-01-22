function cargarPerfil(perfil) {
  document.getElementById("perfilTexto").innerText = perfil;
}
function cargarExperiencia(experiencia) {
  let contenedorExperiencia = document.getElementById("contenedorExperiencia");
  for (let index = 0; index < experiencia.length; index++) {
    let contenedor = document.createElement("div");
    contenedor.className = "box";
    let compania = document.createElement("div");
    compania.className = "compania";
    compania.innerHTML = experiencia[index]["lugar"];
    contenedor.appendChild(compania);
    let contenedorFechActividad = document.createElement("div");
    contenedorFechActividad.className = "actividades";
    let fecha = document.createElement("h5");
    fecha.innerHTML = experiencia[index]["fecha"];
    contenedorFechActividad.appendChild(fecha);
    let actividades = document.createElement("h5");
    actividades.innerHTML = experiencia[index]["actividad"];
    contenedorFechActividad.appendChild(actividades);
    contenedor.appendChild(contenedorFechActividad);
    contenedorExperiencia.appendChild(contenedor);
  }
}

function cargaLenguajesSoftware(software) {
  let contenedorSoftware = document.getElementById("contenedorSoftware");
  for (let index = 0; index < software.length; index++) {
    let contenedor = document.createElement("div");
    contenedor.className = "box";
    let lenguaje = document.createElement("h4");
    lenguaje.innerHTML = software[index]["softwar"];
    contenedor.appendChild(lenguaje);
    let porcentaje = document.createElement("div");
    porcentaje.className = "percent";
    let cantidad = document.createElement("div");
    cantidad.style = "width:" + software[index]["porcentaje"] + "%";
    porcentaje.appendChild(cantidad);
    contenedor.appendChild(porcentaje);
    contenedorSoftware.appendChild(contenedor);
  }
}

function cargarAptitudes(lista) {
  let contenedor = document.getElementById("listaAptitud");
  for (let index = 0; index < lista.length; index++) {
    let aptitud = document.createElement("li");
    let texto = document.createElement("p");
    let imagen = document.createElement("img");
    imagen.className = "imagenAptitud";
    imagen.src = lista[index]["url"];
    aptitud.appendChild(imagen);
    texto.innerHTML = lista[index]["nombre"];
    aptitud.appendChild(texto);
    contenedor.appendChild(aptitud);
  }
}

//Buscar los datos locales para realizar la carga- JSON
function getData() {
  const requestURL = "http://localhost/Tpfinal/data/datosFaltantes.json";
  const request = new XMLHttpRequest();
  request.open("GET", requestURL);
  request.responseType = "json";
  request.send();
  request.onload = function () {
    const datosPerfil = request.response;
    cargarPerfil(datosPerfil["perfil"]);
    cargarExperiencia(datosPerfil["experiencia"]);
    cargaLenguajesSoftware(datosPerfil["software"]);
    cargarAptitudes(datosPerfil["aptitudes"]);
  };
}
getData();
