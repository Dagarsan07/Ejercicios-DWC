function viajeTemporal() {
    const diaActual = document.querySelector('#ogDay').valueAsNumber;
    let mesActual = document.querySelector('#ogMonth').value.toLowerCase();
    debugger;
    switch (mesActual) {
        case "jan":
            mesActual = 0;
            break;
        case "feb":
            mesActual = 1;
            break;
        case "mar":
            mesActual = 2;
            break;
        case "apr":
            mesActual = 3;
            break;
        case "may":
            mesActual = 4;
            break;
        case "jun":
            mesActual = 5;
            break;
        case "jul":
            mesActual = 6;
            break;
        case "aug":
            mesActual = 7;
            break;
        case "sep":
            mesActual = 8;
            break;
        case "oct":
            mesActual = 9;
            break;
        case "nov":
            mesActual = 10;
            break;
        case "dec":
            mesActual = 11;
            break;
    }
    const annoActual = document.querySelector('#ogYear').valueAsNumber;
    const horaActual = document.querySelector('#ogHour').valueAsNumber;
    const minActual = document.querySelector('#ogMin').valueAsNumber;
    const fechaActual = new Date(annoActual, mesActual, diaActual, horaActual, minActual);
    
    const diaDestino = document.querySelector('#desDay').valueAsNumber;
    let mesDestino = document.querySelector('#desMonth').value;
    switch (mesDestino) {
        case "jan":
            mesDestino = 0;
            break;
        case "feb":
            mesDestino = 1;
            break;
        case "mar":
            mesDestino = 2;
            break;
        case "apr":
            mesDestino = 3;
            break;
        case "may":
            mesDestino = 4;
            break;
        case "jun":
            mesDestino = 5;
            break;
        case "jul":
            mesDestino = 6;
            break;
        case "aug":
            mesDestino = 7;
            break;
        case "sep":
            mesDestino = 8;
            break;
        case "oct":
            mesDestino = 9;
            break;
        case "nov":
            mesDestino = 10;
            break;
        case "dec":
            mesDestino = 11;
            break;
    }
    const annoDestino = document.querySelector('#desYear').valueAsNumber;
    const horaDestino = document.querySelector('#desHour').valueAsNumber;
    const minDestino = document.querySelector('#desMin').valueAsNumber;
    const fechaDestino = new Date(annoDestino, mesDestino, diaDestino, horaDestino, minDestino);

    let annosViaje = 0;
    let diasViaje = 0;
    let horasViaje = 0;
    let minsViaje = 0;

    if (fechaActual < fechaDestino) {
        annosViaje =(fechaDestino - fechaActual) / 1000 / 60 / 60 / 24 / 365;
        if (Math.round(annosViaje) >= annosViaje) {
            diasViaje = (Math.round(annosViaje) - annosViaje) * 365;
        } else {
            diasViaje = (annosViaje - Math.round(annosViaje)) * 365;
        }
        if (Math.round(diasViaje) >= diasViaje) {
            horasViaje = (Math.round(diasViaje) - diasViaje) * 24;
        } else {
            horasViaje = (diasViaje - Math.round(diasViaje)) * 24;
        }
        if (Math.round(horasViaje) >= horasViaje) {
            minsViaje = (Math.round(horasViaje) - horasViaje) * 60;
        } else {
            minsViaje = (horasViaje - Math.round(horasViaje)) * 60;
        }

        alert(`Viajarás al futuro ${Math.round(annosViaje)} años, ${Math.round(diasViaje)} días, ${Math.round(horasViaje)} horas y ${Math.round(minsViaje)} minutos`);
    } else if (fechaActual > fechaDestino) {
        annosViaje = (fechaActual - fechaDestino) / 1000 / 60 / 60 / 24 / 365;
        if (Math.round(annosViaje) >= annosViaje) {
            diasViaje = (Math.round(annosViaje) - annosViaje) * 365;
        } else {
            diasViaje = (annosViaje - Math.round(annosViaje)) * 365;
        }
        if (Math.round(diasViaje) >= diasViaje) {
            horasViaje = (Math.round(diasViaje) - diasViaje) * 24;
        } else {
            horasViaje = (diasViaje - Math.round(diasViaje)) * 24;
        }
        if (Math.round(horasViaje) >= horasViaje) {
            minsViaje = (Math.round(horasViaje) - horasViaje) * 60;
        } else {
            minsViaje = (horasViaje - Math.round(horasViaje)) * 60;
        }
        
        alert(`Viajarás al pasado ${Math.round(annosViaje)} años, ${Math.round(diasViaje)} días, ${Math.round(horasViaje)} horas y ${Math.round(minsViaje)} minutos`);
    } else {
        alert('No te vas a desplazar en el tiempo');
    }
}
