const tabla = document.querySelector("tbody");
const totales = document.querySelector("#total-factura");
const arrayProductos = [];

document
  .querySelector("#producto-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    let formulario = document.querySelector("#producto-form");
    codigoProd = parseInt(formulario.querySelector("#codigo").value);
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
          let productoExists = arrayProductos.find(
            (prod) => prod._codigo == response.codigo
          );
          if (cantidadProd > 0) {
            if (productoExists && arrayProductos.length > 0) {
              actualizarCantidad(productoExists, cantidadProd);
            } else {
              let producto = new Producto(
                response.codigo,
                cantidadProd,
                response.descripcion,
                response.precioUnidad
              );
              arrayAnadir(arrayProductos, producto);
            }
            console.log(arrayProductos);
            precioTotal();
          } else {
            alert(
              `Indique la cantidad de ${response.descripcion} que quiere comprar (mínimo 1 unidad)`
            );
          }
        });
      })
      .catch((error) => {
        console.log(error);
      });
  });

function arrayAnadir(array, producto) {
  array.push(producto);
  mostrarEnTabla(producto);
}

function mostrarEnTabla(producto) {
  let row = tabla.insertRow();

  let colCodigo = row.insertCell(0);
  let colCantidad = row.insertCell(1);
  let colDescripcion = row.insertCell(2);
  let colPrecioUni = row.insertCell(3);
  let colPrecioTotal = row.insertCell(4);

  colCodigo.innerText = producto._codigo;
  colCantidad.innerText = producto._cantidad;
  colDescripcion.innerText = producto._descripcion;
  colPrecioUni.innerText = `${producto._precioUni} €`;
  colPrecioTotal.innerText = `${producto.precioTotal.toFixed(2)} €`;
}

function precioTotal() {
  let subtotal = 0;
  arrayProductos.forEach((producto) => {
    subtotal += producto.precioTotal;
  });
  let iva = subtotal * 0.21;
  let total = subtotal + iva;
  mostrarTotales(subtotal, iva, total);
}

function mostrarTotales(subtotal, iva, total) {
  let txtSubtotal = document.createElement("h6");
  let txtIVA = document.createElement("h6");
  let txtTotal = document.createElement("h3");

  txtSubtotal.appendChild(
    document.createTextNode(`Subtotal: ${subtotal.toFixed(2)} €`)
  );
  txtIVA.appendChild(document.createTextNode(`IVA (21%): ${iva.toFixed(2)} €`));
  txtTotal.appendChild(document.createTextNode(`Total: ${total.toFixed(2)} €`));

  // mientras "#total-factura" tenga nodos hijos
  while (totales.lastChild) {
    // los borraras uno por uno
    totales.lastChild.remove();
  }

  totales.appendChild(txtSubtotal);
  totales.appendChild(txtIVA);
  totales.appendChild(txtTotal);
}

function actualizarCantidad(productoEdit, cantidadEdit) {
  productoEdit._cantidad += cantidadEdit;
  let posicionProd = arrayProductos.indexOf(productoEdit);
  tabla.deleteRow(posicionProd);

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
