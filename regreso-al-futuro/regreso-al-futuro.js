const meses = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

function comprobarFechas() {
    let mensajeInfo = document.querySelector('#mensaje');
    let msgDiaInvalido = '<h5 class="px-3 py-3">No puedo creer que no sepas cuanto días tiene cada mes</h5>';

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
    
    if (!isNaN(annoActual) && mesActual != "" && !isNaN(diaActual) && !isNaN(horaActual) && !isNaN(minActual) && !isNaN(annoDestino) && mesDestino != "" && !isNaN(diaDestino) && !isNaN(horaDestino) && !isNaN(minDestino)) {
        if (!meses.includes(mesActual) || !meses.includes(mesDestino)) {
            mensajeInfo.innerHTML = '<h5 class="px-3 py-3">Flipas chaval. Como va a ser eso un mes?? Anda introduce uno válido ahora mismo</h5>';
            return;
        } else if (diaActual < 1 || diaActual > 31 || diaDestino < 1 || diaDestino > 31)  {
            mensajeInfo.innerHTML = msgDiaInvalido;
            return;
        } else if (horaActual < 0 || horaActual > 23 || minActual < 0 || minActual > 59) {
            mensajeInfo.innerHTML = `<h5 class="px-3 py-3">Las ${horaActual}:${minActual}?? Que será lo próximo, las invisibles y media??</h5>`;
            return;
        } else if (horaDestino < 0 || horaDestino > 23 || minDestino < 0 || minDestino > 59) {
            mensajeInfo.innerHTML = `<h5 class="px-3 py-3">Las ${horaDestino}:${minDestino}?? Que será lo próximo, las invisibles y media??</h5>`;
            return;
        }
        
        switch (mesActual) {
            case "apr":
            case "jun":
            case "sep":
            case "nov":
                if (diaActual > 30) {
                    mensajeInfo.innerHTML = msgDiaInvalido;
                    return;
                } else {
                    mesActual = meses.indexOf(mesActual);
                }
                break;
            case "feb":
                if (diaActual > 28) {
                    if (annoActual % 4 == 0) {
                        if (annoActual % 100 != 0 || annoActual % 400 == 0) {
                            if (diaActual == 29) {
                                mesActual = meses.indexOf(mesActual);
                                break;
                            }
                            mensajeInfo.innerHTML = msgDiaInvalido;
                            return;
                        }
                        mensajeInfo.innerHTML = msgDiaInvalido;
                        return;
                    }
                    mensajeInfo.innerHTML = msgDiaInvalido;
                    return;
                } else {
                    mesActual = meses.indexOf(mesActual);
                    break;
                }
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
                if (diaDestino > 30) {
                    mensajeInfo.innerHTML = msgDiaInvalido;
                    return;
                } else {
                    mesDestino = meses.indexOf(mesDestino);
                }
                break;
            case "feb":
                if (diaDestino > 28) {
                    if (annoDestino % 4 == 0) {
                        if (annoDestino % 100 != 0 || annoDestino % 400 == 0) {
                            if (diaDestino == 29) {
                                mesDestino = meses.indexOf(mesDestino);
                                break;
                            }
                            mensajeInfo.innerHTML = msgDiaInvalido;
                            return;
                        }
                        mensajeInfo.innerHTML = msgDiaInvalido;
                        return;
                    }
                    mensajeInfo.innerHTML = msgDiaInvalido;
                    return;
                } else {
                    mesDestino = meses.indexOf(mesDestino);
                    break;
                }
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
        mensajeInfo.innerHTML = `<h5 class="px-3 py-3">Pero tu donde andas?? Te faltan campos por rellenar</h5>`;
        return; 
    }
}

function viajeTemporal(fechaActual, fechaDestino) {
    let mensajeInfo = document.querySelector('#mensaje');
    mensajeInfo.innerHTML = '';

    let viajeMiliseg = 0;
    let viajeMinutos = 0;
    let viajeHoras = 0;
    let viajeDias = 0;
    let viajeAnnos = 0;
    
    if (fechaActual < fechaDestino) {
        viajeMiliseg = fechaDestino - fechaActual;
        viajeAnnos = viajeMiliseg / (1000 * 60 * 60 * 24 * 365);
        viajeDias = (viajeAnnos - Math.floor(viajeAnnos)) * 365;
        viajeHoras = fechaDestino.getHours() - fechaActual.getHours();
        if (viajeHoras < 0) {viajeHoras = 24 + viajeHoras};
        viajeMinutos = fechaDestino.getMinutes() - fechaActual.getMinutes();
        if (viajeMinutos < 0) {
            viajeMinutos = 60 + viajeMinutos;
            viajeHoras--;
        };
        mensajeInfo.innerHTML = `
            <h5 class="px-3 py-3">Viajarás al futuro ${Math.floor(viajeAnnos)} años, ${Math.floor(viajeDias)} días, ${viajeHoras} horas y ${viajeMinutos} minutos</h5>
        `;
    } else if (fechaActual > fechaDestino) {
        viajeMiliseg = fechaActual - fechaDestino;
        viajeAnnos = viajeMiliseg / (1000 * 60 * 60 * 24 * 365);
        viajeDias = (viajeAnnos - Math.floor(viajeAnnos)) * 365;
        viajeHoras = fechaActual.getHours() - fechaDestino.getHours();
        if (viajeHoras < 0) {viajeHoras = 24 + viajeHoras};
        viajeMinutos = fechaActual.getMinutes() - fechaDestino.getMinutes();
        if (viajeMinutos < 0) {
            viajeMinutos = 60 + viajeMinutos;
            viajeHoras--;
        };
        mensajeInfo.innerHTML = `
            <h5 class="px-3 py-3">Viajarás al pasado ${Math.floor(viajeAnnos)} años, ${Math.floor(viajeDias)} días, ${viajeHoras} horas y ${viajeMinutos} minutos</h5>
        `;
    } else {
        mensajeInfo.innerHTML = '<h5 class="px-3 py-3">A no ser que pongas dos fechas diferentes, no voy a hacer nada</h5>';
    }
}