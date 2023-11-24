/* CLASE PRODUCTO */
class Producto {
  /* CONSTRUCTOR */
  constructor(codigo, cantidad, descripcion, precioUni) {
    this._codigo = codigo;
    this._cantidad = cantidad;
    this._descripcion = descripcion;
    this._precioUni = precioUni;
  }

  /* GETTERS Y SETTERS */

  // GETTERS

  get codigo() {
    return this._codigo;
  }

  get cantidad() {
    return this._cantidad;
  }

  get descripcion() {
    return this._descripcion;
  }

  get precioUni() {
    return this._precioUni;
  }

  get precioTotal() {
    return this._precioUni * this._cantidad;
  }

  // SETTERS

  set codigo(codigo) {
    this._codigo = codigo;
  }

  set cantidad(cantidad) {
    this._cantidad = cantidad;
  }

  set descripcion(descripcion) {
    this._descripcion = descripcion;
  }

  set precioUni(precioUni) {
    this._precioUni = precioUni;
  }
}
