const tabla = document.querySelector('tbody');

document.querySelector("#producto-form").addEventListener("submit", function (e) {
    e.preventDefault();
    let formulario = document.querySelector("#producto-form");
    let codigoProd = parseInt(formulario.querySelector("#codigo").value);
    let cantidadProd = formulario.querySelector("#cantidad").valueAsNumber;
    let datosProducto = {
        codigo: codigoProd,
        cantidad: cantidadProd
    }
    fetch ('post-producto.php', {
        method: 'GET',
        body: JSON.stringify(datosProducto),
    })
    .then(res => res.json())
    .then(response => {
        alert(response);
    })
})

// tabla.append = producto.mostrarEnTabla();
// console.log(producto.mostrarEnTabla());