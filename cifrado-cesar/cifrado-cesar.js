const numDesplazamiento = 6;

function cifrarMensaje() {
    let abecedario = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'Y', 'Z'];
    let mensaje = document.getElementById("mensaje").value.toUpperCase();
    let mensajeCifrado = [];
    let letraCifrado;
    for (i = 0; i < mensaje.length; i++) {
        let letra = mensaje.substring[i];
        for (i = 0; i < abecedario.length; i++) {
            if (letra == abecedario[i]) {
                if ((abecedario.length - i) < numDesplazamiento) {
                    letraCifrado = abecedario[numDesplazamiento - (abecedario.length - i)];
                } else {
                    letraCifrado = abecedario[i + numDesplazamiento];
                }
                mensajeCifrado.concat(letraCifrado);
            }
        }
    }
    alert(mensajeCifrado.toString()); 
}