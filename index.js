const form = document.getElementsByTagName("form")[0];
/**
 * @type {HTMLInputElement}
 */
 const inputCodigo = document.getElementById("codigo");
 /**
  * @type {HTMLInputElement}
  */
  const inputNombre = document.getElementById("nombre");
 /**
  * @type {HTMLInputElement}
  */
 const inputCantidad = document.getElementById("cantidad");
 /**
  * @type {HTMLInputElement}
  */
 const inputPrecio = document.getElementById("precio");
 /**
  * @type {HTMLInputElement}
  */
const inputCategoria = document.getElementById("categoria");
const tbody = document.getElementsByTagName("tbody")[0];
const cantidadTotalElement = document.getElementById("cantidad-totales");
const precioTotalesElement = document.getElementById("precio-totales");
const granTotalElement = document.getElementById("gran-total");


let indice = 0;
let cantidadTotal = 0;
let precioTotales = 0;
let granTotal = 0;
let currentRow;

form.addEventListener("submit", onSubmit);


/**
 * 
 * @param {Event} event 
 */
function onSubmit(event){


  event.preventDefault();

  const data = new FormData(form);
  const values = Array.from(data.entries());
  const [frmCodigo, frmNombre, frmCantidad, frmPrecio, frmCategoria] =  values;

  let codigo = frmCodigo[1];
  const nombre = frmNombre[1];
  const cantidad = frmCantidad[1];
  const precio = frmPrecio[1];
  const categoria = frmCategoria[1];
  const total = cantidad * precio;

  cantidadTotal = parseFloat(cantidad)  + cantidadTotal;
  precioTotales = parseFloat(precio) + precioTotales;
  granTotal = parseFloat(total) + granTotal;

  let tr;
  if (!codigo) {
    indice++;
    codigo = indice;
    tr = document.createElement("tr");
    tbody.appendChild(tr);
  }else{
    tr = currentRow;
  }
  //indice ++;

  tr.dataset.categoria = categoria;
  tr.innerHTML = `
    <td>${codigo}</td>
    <td>${nombre}</td>
    <td>${cantidad}</td>
    <td>${precio}</td>
    <td>${total}</td>
    <td><a href="#" onClick="onEdit(event)">Editar</a> | <a href="#" onClick="onDelete(event)">Eliminar</a></td>
  `;

  

  cantidadTotalElement.innerText = cantidadTotal;
  precioTotalesElement.innerText = precioTotales;
  granTotalElement.innerText = granTotal;

  form.reset();
  inputNombre.focus();
}

/**
 * 
 * @param {Event} event 
 */
function onEdit(event){
  event.preventDefault();
  
  /** @type {HTMLElement}*/
  const anchor = event.target;
  const tr = anchor.parentElement.parentElement;
  const celdas = tr.getElementsByTagName("td");
  const [tdCodigo, tdNombre, tdCantidad, tdPrecio] = celdas;

  inputCodigo.value = tdCodigo.innerText;
  inputNombre.value = tdNombre.innerText;
  inputCantidad.value = tdCantidad.innerText;
  inputPrecio.value = tdPrecio.innerText;
  inputCategoria.value = tr.dataset.categoria;

  currentRow = tr;
}


/**
 * 
 * @param {Event} event 
 */
function onDelete(event){

  event.preventDefault();

  /** @type {HTMLElement}*/
  const anchor = event.target;
  const tr = anchor.parentElement.parentElement;
  tbody.removeChild(tr);
}