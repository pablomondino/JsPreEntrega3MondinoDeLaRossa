let pin = "1234";
let ingresar = false;
const btnSearch = document.querySelector("#btnSearch");
const inputIngreso = document.querySelector("#ingreso");
const contenedor = document.querySelector("#contenedor");
const infoLoteDiv = document.querySelector("#infoLote"); // Agrega un div para mostrar la información del lote







ingresar = true;



const tipoDeLotesDisponibles = [
  { tipologia: "a", tamano: 250, frente: 10, fondo: 25, ubicacion: "Esquina de manzana", img: "250metros.png" },
  { tipologia: "b", tamano: 360, frente: 12, fondo: 30, ubicacion: "Dentro de manzana", img: "350metros.png" },
  { tipologia: "c", tamano: 450, frente: 15, fondo: 30, ubicacion: "Dentro de manzana", img: "450metros.png" },
  { tipologia: "d", tamano: 560, frente: 16, fondo: 35, ubicacion: "Dentro de manzana", img: "550metros.png" }];









function buscarServicio(arr, filtro) {
  const encontrado = arr.find((el) => {
    return el.tipologia.includes(filtro);//cambie nombre por tipologia
  });
  return encontrado;
}




function mostrarLotes(arr) {
  const muestra = arr.map(element => {
    return element;
  });
  return muestra;
}




function filtrarServicio(arr, filtro) {
  const filtrado = arr.filter((el) => {
    return el.tipologia.includes(filtro);// cambie nombre por tipologia
  });
  return filtrado;
}
function crearHtml(arr) {
  contenedor.innerHTML = "";
  let html;
  for (const el of arr) {

   

    html = `<div class="card">
    <img src=" ./img/${el.img}" alt="${el.tipologia}"> 
                <hr>
                <h3>${el.ubicacion}</h3>
                <p>Precio: $${el.tamano*1000} </p>
                  <div class="card-action">
                    <button class="btn btn-delete" id="${el.frente}">Quitar</button>
                  </div>
              </div>`;

    //se la agrego al contenedor
    contenedor.innerHTML = contenedor.innerHTML + html;
  }
}

btnSearch.addEventListener("click", (e) => {
  const filtrados = filtrarServicio(tipoDeLotesDisponibles, inputIngreso.value);
  crearHtml(filtrados);
});


ingreso1.addEventListener("click", (e) => {
  const mostrados = mostrarLotes(tipoDeLotesDisponibles);
  crearHtml(mostrados);
});














btnSearch.addEventListener("click", (e) => {
  const tipologiaBuscada = inputIngreso.value.toLowerCase(); // Convierte la entrada a minúsculas
  const loteSeleccionado = buscarServicio(tipoDeLotesDisponibles, tipologiaBuscada);

  if (loteSeleccionado) {
    mostrarInformacionLote(loteSeleccionado);
  } else {
    infoLoteDiv.innerHTML = "Lote no encontrado";
  }
});

// Función para mostrar la información de un lote en el div infoLote
function mostrarInformacionLote(lote) {
  const html = `
    <div class="info-lote">
      <img src="./img/${lote.img}" alt="${lote.tipologia}">
      <h2>Tipología: ${lote.tipologia}</h2>
      <p>Tamaño de lote: ${lote.tamano} metros cuadrados</p>
      <p>Ubicación: ${lote.ubicacion}</p>
      <p>Medidas:</p>
      <ul>
        <li>Frente: ${lote.frente} metros</li>
        <li>Fondo: ${lote.fondo} metros</li>
      </ul>
      <p>Precio Contado: ${(lote.tamano)*1000}</p>

    </div>
  `;

  infoLoteDiv.innerHTML = html;
}



