const tabla = document.querySelector("tbody");
const totales = document.querySelector("#total-factura");
const arrayProductos = [];

document
  .querySelector("#producto-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    let formulario = document.querySelector("#producto-form");
    let codigoProd = parseInt(formulario.querySelector("#codigo").value);
    let cantidadProd = parseInt(formulario.querySelector("#cantidad").value);
    let datosProducto = {
      codigo: codigoProd,
    };
    fetch("get-producto.php", {
      method: "post",
      body: JSON.stringify(datosProducto),
    })
      .then((res) => {
        res.json().then((response) => {
          // Si existe el producto en la BD
          let productoExists = arrayProductos.find(
            // busca en el array si ya existe dicho producto
            (prod) => prod._codigo == response.codigo
          );
          if (cantidadProd > 0) {
            // si la cantidad introducida es mayor que cero
            if (productoExists && arrayProductos.length > 0) {
              // si el producto ya existe
              // actualiza la cantidad, sumando la anterior y la última introducida
              actualizarCantidad(productoExists, cantidadProd);
            } else {
              // si no existe, se crea un nuevo objeto "Producto"
              let producto = new Producto(
                response.codigo,
                cantidadProd,
                response.descripcion,
                response.precioUnidad
              );
              // y lo añade al array
              arrayAnadir(arrayProductos, producto);
            }
            console.log(arrayProductos);
            // recalcula los totales
            calcularTotales();
          } else {
            alert(
              `Indique la cantidad de ${response.descripcion} que quiere comprar (mínimo 1 unidad)`
            );
          }
        });
      })
      .catch((error) => {
        // si no existe, muestra este mensaje
        alert(
          `No existe el producto con el código ${codigoProd}. Introduzca otro diferente`
        );
        console.log(error);
      });
  });

function arrayAnadir(array, producto) {
  // añade el producto al array
  array.push(producto);
  // lo muestra en la tabla
  mostrarEnTabla(producto);
}

function mostrarEnTabla(producto) {
  // añade una nueva fila
  let row = tabla.insertRow();

  // añade las celdas
  let colCodigo = row.insertCell(0);
  let colCantidad = row.insertCell(1);
  let colDescripcion = row.insertCell(2);
  let colPrecioUni = row.insertCell(3);
  let colPrecioTotal = row.insertCell(4);

  // inserta los valores dentro de las celdas
  colCodigo.innerText = producto._codigo;
  colCantidad.innerText = producto._cantidad;
  colDescripcion.innerText = producto._descripcion;
  colPrecioUni.innerText = `${producto._precioUni} €`;
  colPrecioTotal.innerText = `${producto.precioTotal.toFixed(2)} €`;
}

function calcularTotales() {
  let subtotal = 0;
  arrayProductos.forEach((producto) => {
    // recorre el array y va sumando el total de cada producto
    subtotal += producto.precioTotal;
  });
  // calcula el iva
  let iva = subtotal * 0.21;
  // calcula el total
  let total = subtotal + iva;
  // actualiza los datos en pantalla
  mostrarTotales(subtotal, iva, total);
}

function mostrarTotales(subtotal, iva, total) {
  // crea los elementos
  let txtSubtotal = document.createElement("h6");
  let txtIVA = document.createElement("h6");
  let txtTotal = document.createElement("h3");

  // inserta el texto dentro de cada elemento
  txtSubtotal.appendChild(
    document.createTextNode(`Subtotal: ${subtotal.toFixed(2)} €`)
  );
  txtIVA.appendChild(document.createTextNode(`IVA (21%): ${iva.toFixed(2)} €`));
  txtTotal.appendChild(document.createTextNode(`Total: ${total.toFixed(2)} €`));

  // mientras el contenedor "#total-factura" tenga nodos hijos
  while (totales.lastChild) {
    // los borrara uno por uno
    totales.lastChild.remove();
  }

  // añade los elementos a "#total-factura"
  totales.appendChild(txtSubtotal);
  totales.appendChild(txtIVA);
  totales.appendChild(txtTotal);
}

function actualizarCantidad(productoEdit, cantidadEdit) {
  // actualiza la cantidad del producto
  productoEdit._cantidad += cantidadEdit;
  let posicionProd = arrayProductos.indexOf(productoEdit);
  // borra de la tabla la fila con los datos del producto
  tabla.deleteRow(posicionProd);

  // he inserta una nueva en la misma posicion, actualizada
  let editedRow = tabla.insertRow(posicionProd);

  let colCodigo = editedRow.insertCell(0);
  let colCantidad = editedRow.insertCell(1);
  let colDescripcion = editedRow.insertCell(2);
  let colPrecioUni = editedRow.insertCell(3);
  let colPrecioTotal = editedRow.insertCell(4);

  colCodigo.innerText = productoEdit._codigo;
  colCantidad.innerText = productoEdit._cantidad;
  colDescripcion.innerText = productoEdit._descripcion;
  colPrecioUni.innerText = `${productoEdit._precioUni} €`;
  colPrecioTotal.innerText = `${productoEdit.precioTotal.toFixed(2)} €`;
}
