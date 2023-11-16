const tabla = document.querySelector('tbody');

let producto = new Producto(1, 4, "Fentanilo", 20);
tabla.append = producto.mostrarEnTabla();
console.log(producto.mostrarEnTabla());