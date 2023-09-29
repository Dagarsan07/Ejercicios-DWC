const capitales = [
  "tokio",
  "berlin",
  "nairobi",
  "rio",
  "denver",
  "helsinki",
  "lisboa",
  "palermo",
  "estocolmo",
  "moscu",
  "bogota",
  "marsella",
  "oslo",
  "pamplona",
  "manila"
];

function compararNombres() {
  let intento = document.getElementById("intento").value.toLowerCase();

  if (capitales.includes(intento)) {
    let acierto = document.createElement("li");
    acierto.innerHTML = `${intento}`;
    document.getElementById("listaAciertos").appendChild(acierto);
  } else {
    let fallo = document.createElement("li");
    fallo.innerHTML = `${intento}`;
    document.getElementById("listaFallos").appendChild(fallo);
  }
}