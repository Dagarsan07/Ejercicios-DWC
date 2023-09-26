const meses = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

function viajeTemporal() {
    const diaActual = document.querySelector('#ogDay').valueAsNumber;
    let mesActual = document.querySelector('#ogMonth').value.toLowerCase();
    let a = 0;
    debugger;
    do {
        mesActual = mesActual == meses[a] ? a : mesActual;
        a++;
    } while (isNaN(mesActual) || a < meses.length);
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
    } while (isNaN(mesDestino) || d < meses.length);
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
        viajeMinutos = viajeMiliseg / 60000;
        console.log(viajeMinutos);
        //alert(`Viajarás al futuro ${Math.round(annosViaje)} años, ${Math.round(diasViaje)} días, ${Math.round(horasViaje)} horas y ${Math.round(minsViaje)} minutos`);
    } else if (fechaActual > fechaDestino) {
        
        
        //alert(`Viajarás al pasado ${Math.round(annosViaje)} años, ${Math.round(diasViaje)} días, ${Math.round(horasViaje)} horas y ${Math.round(minsViaje)} minutos`);
    } else {
        //alert('No te vas a desplazar en el tiempo');
    }
}
