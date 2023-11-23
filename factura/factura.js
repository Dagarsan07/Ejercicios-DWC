const tabla = document.querySelector("tbody");

document
  .querySelector("#producto-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    let formulario = document.querySelector("#producto-form");
    let codigoProd = parseInt(formulario.querySelector("#codigo").value);
    let cantidadProd = formulario.querySelector("#cantidad").value;
    let datosProducto = {
      codigo: codigoProd,
      cantidad: cantidadProd,
    };
    fetch("get-producto.php", {
      method: "post",
      body: JSON.stringify(datosProducto),
    })
      .then((res) => {
        res.json().then((response) => {
          let producto = new Producto(
            response.codigo,
            cantidadProd,
            response.descripcion,
            response.precioUnidad
          );
          tabla.innerHTML += `
                <tr>
                    <td>${producto._codigo}</td>
                    <td>${producto._cantidad}</td>
                    <td>${producto._descripcion}</td>
                    <td>${producto._precioUni}</td>
                    <td>${producto.precioTotal}</td>
                </tr>
            `;
        });
      })
      .catch((error) => {
        console.log(error);
      });
  });
