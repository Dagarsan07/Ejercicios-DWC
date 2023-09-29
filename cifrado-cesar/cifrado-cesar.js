const abecedario = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'Y', 'Z'];
function cifrar() {
    let mensaje = document.getElementById("mensaje").value.toUpperCase();
    const indiceDesplazamiento = document.getElementById("desplazamiento").valueAsNumber;
    let mensajeCifrado = "";
    for (i = 0; i < mensaje.length; i++) {
        let letra = mensaje.charAt(i);
        let pos = abecedario.indexOf(letra);

        if(pos == -1) {
            mensajeCifrado += letra;
        } else {
            if ((pos + indiceDesplazamiento) > abecedario.length - 1) {
                mensajeCifrado += abecedario[indiceDesplazamiento - (abecedario.length - pos)];
            } else {
                mensajeCifrado += abecedario[pos + indiceDesplazamiento];
            }
        }
    }
    document.getElementById("mensaje").value = mensajeCifrado;
}

function descifrar() {
    let mensaje = document.getElementById("mensaje").value.toUpperCase();
    const indiceDesplazamiento = document.getElementById("desplazamiento").value;
    let mensajeDescifrado = "";
    for (i = 0; i < mensaje.length; i++) {
        let letra = mensaje.charAt(i);
        let pos = abecedario.indexOf(letra);

        if(pos == -1) {
            mensajeDescifrado += letra;
        } else {
            if ((pos - indiceDesplazamiento) < 0) {
                mensajeDescifrado += abecedario[abecedario.length + (pos - indiceDesplazamiento)];
            } else {
                mensajeDescifrado += abecedario[pos - indiceDesplazamiento];
            }
        }
    }
    document.getElementById("mensaje").value = mensajeDescifrado;
}