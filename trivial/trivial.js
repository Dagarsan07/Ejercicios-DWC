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

let tarjeta = [
    deporte[preguntaAleatoria()], 
    arte[preguntaAleatoria()],
    espectaculos[preguntaAleatoria()],
    historia[preguntaAleatoria()],
    ciencia[preguntaAleatoria()],
    geografia[preguntaAleatoria()]
];

function cargarPregunta(categoria) {
    let titulo = document.getElementById('titulo').innerHTML;
    let pregunta = document.getElementById('pregunta').innerHTML;
    if (categoria == 'deporte') {
        titulo = 'Deporte';
        pregunta = `
            <h3>${tarjeta[0].pregunta}</h3>
            <div class="form-check">
                <input class="form-check-input type="radio" name="a">
                <label class="form-check-label" for="a"> ${tarjeta[0].respuestas.a} </label>
            </div>
            <div class="form-check">
                <input class="form-check-input type="radio" name="b">
                <label class="form-check-label" for="b"> ${tarjeta[0].respuestas.b} </label>
            </div>
            <div class="form-check">
                <input class="form-check-input type="radio" name="c">
                <label class="form-check-label" for="c"> ${tarjeta[0].respuestas.c} </label>
            </div>
        `;
        
    }
}