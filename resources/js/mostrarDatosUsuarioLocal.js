function cargaLocalDatosEducativos(academico) {
  let ul = document.getElementById("educacion");
  for (let index = 0; index < academico.length; index++) {
    let li = document.createElement("li");
    let h5 = document.createElement("h5");
    h5.innerHTML = academico[index].anioCursado;
    li.appendChild(h5);
    let h4 = document.createElement("h4");
    h4.innerHTML = academico[index].lugar;
    li.appendChild(h4);
    let h44 = document.createElement("h4");
    h44.innerHTML = academico[index].nivel;
    li.appendChild(h44);
    ul.appendChild(li);
  }
}

function cargarLenguajes(lenguajes) {
  let ul = document.getElementById("lenguajes");
  for (let index = 0; index < lenguajes.length; index++) {
    let li = document.createElement("li");
    let spanLenguaje = document.createElement("span");
    spanLenguaje.innerHTML = lenguajes[index].lenguaje;
    spanLenguaje.className = "text";
    li.appendChild(spanLenguaje);

    let spanPercent = document.createElement("span");
    spanPercent.className = "percent";
    let divPorcentaje = document.createElement("div");
    divPorcentaje.style = "width:" + lenguajes[index].porcentaje + "%";
    spanPercent.appendChild(divPorcentaje);
    li.appendChild(spanPercent);
    ul.appendChild(li);
  }
}
//Variables de la web del usuario y likedin
let urlLargaWeb = "";
let urlLargaLikedin = "";
//Carga de las variables web y likedink para ser utilizadas en los eventos Onclick
function cargarLocalDatosUrlContacto(contacto) {
  urlLargaWeb = contacto.paginaWeb.urllarga;
  urlLargaLikedin = contacto.likedin.urllarga;
}

document.getElementById("sitioWeb").addEventListener("click", function () {
  var win = window.open(urlLargaWeb, "_blank");
  win.focus();
});
document.getElementById("likedin").addEventListener("click", function () {
  let url = document.getElementById("likedin").textContent;
  console.log(url);
  var win = window.open(urlLargaLikedin, "_blank");
  win.focus();
});
//Busqueda de los datos locales del usuario - JSON
function getData() {
  const requestURL = "http://localhost/Tpfinal/data/datosFaltantes.json";
  const request = new XMLHttpRequest();
  request.open("GET", requestURL);
  request.responseType = "json";
  request.send();
  request.onload = function () {
    const datosPerfil = request.response;
    document.getElementById("ocupacion").innerText = datosPerfil["ocupacion"];
    document.getElementById("sitioWeb").innerText =
      datosPerfil["contacto"]["paginaWeb"]["urlcorta"];
    document.getElementById("likedin").innerText =
      datosPerfil["contacto"]["likedin"]["urlcorta"];
    cargaLocalDatosEducativos(datosPerfil["academico"]);
    cargarLocalDatosUrlContacto(datosPerfil["contacto"]);
    cargarLenguajes(datosPerfil["lenguajes"]);
  };
}
getData();
