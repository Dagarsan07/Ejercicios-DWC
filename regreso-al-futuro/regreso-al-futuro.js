const meses = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

function viajeTemporal() {
    let tiempoViajado = document.querySelector('#viajeResult');
    tiempoViajado.innerHTML = '';
    const diaActual = document.querySelector('#ogDay').valueAsNumber;
    let mesActual = document.querySelector('#ogMonth').value.toLowerCase();
    let a = 0;
    do {
        mesActual = mesActual == meses[a] ? a : mesActual;
        a++;
    } while (isNaN(mesActual) && a < meses.length);
    const annoActual = document.querySelector('#ogYear').valueAsNumber;
    const horaActual = document.querySelector('#ogHour').valueAsNumber;
    const minActual = document.querySelector('#ogMin').valueAsNumber;
    const fechaActual = new Date(annoActual, mesActual, diaActual, horaActual, minActual);
    
    const diaDestino = document.querySelector('#desDay').valueAsNumber;
    let mesDestino = document.querySelector('#desMonth').value;
    let d = 0;
    do {
        mesDestino = mesDestino == meses[d] ? d : mesDestino;
        d++;
    } while (isNaN(mesDestino) && d < meses.length);
    const annoDestino = document.querySelector('#desYear').valueAsNumber;
    const horaDestino = document.querySelector('#desHour').valueAsNumber;
    const minDestino = document.querySelector('#desMin').valueAsNumber;
    const fechaDestino = new Date(annoDestino, mesDestino, diaDestino, horaDestino, minDestino);

    let viajeMiliseg = 0;
    let viajeMinutos = 0;
    let viajeHoras = 0;
    let viajeDias = 0;
    let viajeAnnos = 0;
    
    if (fechaActual < fechaDestino) {
        viajeMiliseg = fechaDestino - fechaActual;
        viajeAnnos = viajeMiliseg / (1000 * 60 * 60 * 24 * 365);
        viajeDias = (viajeAnnos - Math.floor(viajeAnnos)) * 365;
        viajeHoras = (viajeDias - Math.floor(viajeDias)) * 24;
        viajeMinutos = (viajeHoras - Math.floor(viajeHoras)) * 60;
        if (Math.round(viajeMinutos) == 60) {
            viajeMinutos = 0;
            viajeHoras++;
        }
        tiempoViajado.innerHTML = `
            Viajarás al futuro ${Math.floor(viajeAnnos)} años, ${Math.floor(viajeDias)} días, ${Math.floor(viajeHoras)} horas y ${Math.round(viajeMinutos)} minutos
        `;
    } else if (fechaActual > fechaDestino) {
        viajeMiliseg = fechaActual - fechaDestino;
        viajeAnnos = viajeMiliseg / (1000 * 60 * 60 * 24 * 365);
        viajeDias = (viajeAnnos - Math.floor(viajeAnnos)) * 365;
        viajeHoras = (viajeDias - Math.floor(viajeDias)) * 24;
        viajeMinutos = (viajeHoras - Math.floor(viajeHoras)) * 60;
        if (minActual == minDestino && horaActual == horaDestino) {
            viajeMinutos = 0;
            viajeHoras = 0;
        }
        tiempoViajado.innerHTML = `
            Viajarás al pasado ${Math.floor(viajeAnnos)} años, ${Math.floor(viajeDias)} días, ${Math.round(viajeHoras)} horas y ${Math.round(viajeMinutos)} minutos
        `;
    } else if (isNaN(fechaActual)|| isNaN(fechaDestino)){
        tiempoViajado.innerHTML = 'Alguna de las fechas es inválida. Vuelve a introducirlas';
    } else {
        tiempoViajado.innerHTML = 'No te vas a desplazar en el tiempo';
    }
}