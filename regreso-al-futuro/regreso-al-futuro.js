const meses = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

function comprobarFechas() {
    let tiempoViajado = document.querySelector('#viajeResult');
    const annoActual = document.querySelector('#ogYear').valueAsNumber;
    let mesActual = document.querySelector('#ogMonth').value.toLowerCase();
    let diaActual = document.querySelector('#ogDay').valueAsNumber;
    const horaActual = document.querySelector('#ogHour').valueAsNumber;
    const minActual = document.querySelector('#ogMin').valueAsNumber;

    const annoDestino = document.querySelector('#desYear').valueAsNumber;
    let mesDestino = document.querySelector('#desMonth').value.toLowerCase();
    let diaDestino = document.querySelector('#desDay').valueAsNumber;
    const horaDestino = document.querySelector('#desHour').valueAsNumber;
    const minDestino = document.querySelector('#desMin').valueAsNumber;

    debugger;
    if (!isNaN(annoActual) || mesActual != "" || !isNaN(diaActual) || !isNaN(horaActual) || !isNaN(minActual) || !isNaN(annoDestino) || mesDestino != "" || !isNaN(diaDestino) || !isNaN(horaDestino) || !isNaN(minDestino)) {
        if (!meses.includes(mesActual) || !meses.includes(mesDestino)) {
            tiempoViajado.innerHTML = '<h5 class="px-3 py-3">Flipas chaval. Como va a ser eso un mes?? Anda introduce uno válido ahora mismo</h5>';
            return;
        }
        
        switch (mesActual) {
            case "apr":
            case "jun":
            case "sep":
            case "nov":
                mesActual = meses.indexOf(mesActual) + 1;
                diaActual = diaActual - 30;
                break;
            case "feb":
                if (annoActual % 4 == 0) {
                    if (annoActual % 100 != 0 || annoActual % 400 == 0) {
                        if (diaActual > 29) {
                            mesActual = meses.indexOf(mesActual) + 1;
                            diaActual = diaActual - 29;
                        }
                    }
                } else {
                    mesActual = meses.indexOf(mesActual);
                }
                break;
            case "jan":
            case "mar":
            case "may":
            case "jul":
            case "aug":
            case "oct":
            case "dec":
                mesActual = meses.indexOf(mesActual);
                break;
        }
    
        switch (mesDestino) {
            case "apr":
            case "jun":
            case "sep":
            case "nov":
                mesDestino = meses.indexOf(mesDestino) + 1;
                diaDestino = diaDestino - 30;
                break;
            case "feb":
                if (annoActual % 4 == 0) {
                    if (annoActual % 100 != 0 || annoActual % 400 == 0) {
                        if (diaDestino > 29) {
                            mesDestino = meses.indexOf(mesDestino) + 1;
                            diaDestino = diaDestino - 29;
                        }
                    }
                } else {
                    mesDestino = meses.indexOf(mesDestino);
                }
                break;
            case "jan":
            case "mar":
            case "may":
            case "jul":
            case "aug":
            case "oct":
            case "dec":
                mesDestino = meses.indexOf(mesDestino);
                break;
        }
    
        const fechaActual = new Date(annoActual, mesActual, diaActual, horaActual, minActual);
        const fechaDestino = new Date(annoDestino, mesDestino, diaDestino, horaDestino, minDestino);
    
        viajeTemporal(fechaActual, fechaDestino);
    } else {
        tiempoViajado.innerHTML = `<h5 class="px-3 py-3">Pero tu donde andas?? Te faltan campos por rellenar</h5>`;
        return; 
    }
}

function viajeTemporal(fechaActual, fechaDestino) {
    let tiempoViajado = document.querySelector('#viajeResult');
    tiempoViajado.innerHTML = '';

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
            <h5 class="px-3 py-3">Viajarás al futuro ${Math.floor(viajeAnnos)} años, ${Math.floor(viajeDias)} días, ${Math.floor(viajeHoras)} horas y ${Math.round(viajeMinutos)} minutos</h5>
        `;
    } else if (fechaActual > fechaDestino) {
        viajeMiliseg = fechaActual - fechaDestino;
        viajeAnnos = viajeMiliseg / (1000 * 60 * 60 * 24 * 365);
        viajeDias = (viajeAnnos - Math.floor(viajeAnnos)) * 365;
        viajeHoras = (viajeDias - Math.floor(viajeDias)) * 24;
        viajeMinutos = (viajeHoras - Math.floor(viajeHoras)) * 60;
        if (minActual == minDestino) {viajeMinutos = 0};
        if (horaActual == horaDestino) {viajeHoras = 0};
        tiempoViajado.innerHTML = `
            <h5 class="px-3 py-3">Viajarás al pasado ${Math.floor(viajeAnnos)} años, ${Math.floor(viajeDias)} días, ${Math.round(viajeHoras)} horas y ${Math.round(viajeMinutos)} minutos</h5>
        `;
    } else if (isNaN(fechaActual)|| isNaN(fechaDestino)){
        tiempoViajado.innerHTML = '<h5 class="px-3 py-3">Alto ahí master. Pusiste algo mal. Te quedas en tu sitio</h5>';
    } else {
        tiempoViajado.innerHTML = '<h5 class="px-3 py-3">A no ser que pongas dos fechas diferentes, no voy a hacer nada</h5>';
    }
}