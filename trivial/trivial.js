const deporte = [
    {pregunta: "¿En qué año fueron los Juegos Olímpicos de Londres?", respuestas: {a: "2012", b: "2016", c: "2004"}, correcta: "a"},
    {pregunta: "¿Quién dirige la selección española de fútbol?", respuestas: {a: "Luis Enrique", b: "Vicente del Bosque", c: "Luis de la Fuente"}, correcta: "c"},
    {pregunta: "¿Qué número llevaba Benzema en el Real Madrid?", respuestas: {a: "7", b: "9", c: "2"}, correcta: "b"}
];
const arte = [
    {pregunta: "¿Qué artista es conocido por haber pintado la Capilla Sixtina?", respuestas: {a: "Miguel Angel", b: "Leonardo DaVinci", c: "Galileo Galilei"}, correcta: "a"},
    {pregunta: "¿De qué país es originario el tipo de poesía conocido como haiku?", respuestas: {a: "China", b: "Japón", c: "Taiwán"}, correcta: "b"},
    {pregunta: "¿Qué nombre tenía el caballo de Don Quijote de la Mancha?", respuestas: {a: "Rocinante", b: "Pegaso", c: "Bucéfalo"}, correcta: "a"}
];
const espectaculos = [
    {pregunta: "¿Que banda o cantante tiene el record guiness del conciertos con más espectadores?", respuestas: {a: "Taylor Swift", b: "Kanye West", c: "Jean-Michel Jarre"}, correcta: "c"},
    {pregunta: "¿Qué banda publicó el álbum “Master of Puppets”?", respuestas: {a: "Black Sabbath", b: "Metallica", c: "Linkin Park"}, correcta: "b"},
    {pregunta: "¿Quién escribió la novela gráfica “Watchmen”?", respuestas: {a: "Stan Lee", b: "Alan Moore", c: "Dave Mustaine"}, correcta: "b"}
];
const historia = [
    {pregunta: "¿En qué año se firmó el Tratado de Versalles?", respuestas: {a: "1912", b: "1919", c: "1906"}, correcta: "b"},
    {pregunta: "¿En qué año se produjo la caída del Muro de Berlín?", respuestas: {a: "1989", b: "1992", c: "1994"}, correcta: "a"},
    {pregunta: "¿Dónde se firmó la Constitución española de 1812?", respuestas: {a: "Madrid", b: "Sevilla", c: "Cádiz"}, correcta: "c"}
];
const ciencia = [
    {pregunta: "¿De qué gas está compuesto principalmente el aire: ¿nitrógeno, oxígeno o dióxido de carbono?", respuestas: {a: "Nitrógeno", b: "Oxígeno", c: "Dióxido de carbono"}, correcta: "a"},
    {pregunta: "¿Cuántos cuernos tenía el dinosaurio llamado tricerátops?", respuestas: {a: "2", b: "1", c: "3"}, correcta: "c"},
    {pregunta: "¿Qué planeta es el segundo más cercano al sol?", respuestas: {a: "Urano", b: "Venus", c: "Mercurio"}, correcta: "b"}
];
const geografia = [
    {pregunta: "¿Cuál es la capital de Islandia?", respuestas: {a: "Hamburgo", b: "Oslo", c: "Reykjavík"}, correcta: "c"},
    {pregunta: "¿En qué oceano están las islas Fiyi?", respuestas: {a: "Pácifico", b: "Índico", c: "Atlántico"}, correcta: "a"},
    {pregunta: "¿Cuál de estos paises no tiene salida al mar?", respuestas: {a: "Dinamarca", b: "Hungría", c: "Francia"}, correcta: "b"}
];

let aciertos = 0;
let fallos = 0;

function preguntaAleatoria() {
    let minimo = 0;
    let maximo = 2;
    return Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
}

const tarjeta = [
    deporte[preguntaAleatoria()], 
    arte[preguntaAleatoria()],
    espectaculos[preguntaAleatoria()],
    historia[preguntaAleatoria()],
    ciencia[preguntaAleatoria()],
    geografia[preguntaAleatoria()]
];

let mensaje = document.querySelector('#mensaje');
let botonComprobar = document.querySelector("button.btn.btn-dark");

function cargarPregunta(categoria) {
    let posicion = tarjeta[categoria];
    document.querySelector('form').reset();
    if (mensaje.classList.contains('text-success')) {
        mensaje.classList.remove('text-success');
    } else if (mensaje.classList.contains('text-danger')) {
        mensaje.classList.remove('text-danger');
    }
    mensaje.innerHTML = '';
    document.getElementById("pregunta").innerHTML  = posicion.pregunta;
    botonComprobar.setAttribute('id', categoria);
    botonComprobar.disabled = false;
    document.getElementById("opcionA").innerHTML  = posicion.respuestas.a;
    document.getElementById("opcionB").innerHTML  = posicion.respuestas.b;
    document.getElementById("opcionC").innerHTML  = posicion.respuestas.c;
}

function comprobarResultado(categoria) {
    let eleccion = document.querySelector('input[name="respuesta"]:checked');
    if(eleccion) {
        if (eleccion.value == tarjeta[categoria].correcta) {
            aciertos++;
            mensaje.innerHTML = 'Correcto';
            mensaje.classList.add('text-success');
            document.querySelector('#aciertos').innerHTML = `Aciertos ${aciertos}/4`;
        } else {
            fallos++;
            mensaje.innerHTML = 'Incorrecto';
            mensaje.classList.add('text-danger');
            document.querySelector('#fallos').innerHTML = `Fallos ${fallos}/3`;
        }
        botonComprobar.setAttribute('disabled', 'true');
    } else {
        mensaje.innerHTML = 'No ha respondido la pregunta. Elija una opción';
    }
    document.querySelector(`button[value='${categoria}']`).setAttribute('disabled', 'true');
    ifTerminaPartida(aciertos, fallos);
}

function ifTerminaPartida(aciertos, fallos) {
    if (aciertos == 4) {
        window.location.href = "victoria.html";
    } else if (fallos == 3) {
        window.location.href = "derrota.html";
    }
}