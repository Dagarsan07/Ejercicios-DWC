function calcularIMC() {
    const altura = document.getElementById("altura").valueAsNumber;
    const peso = document.getElementById("peso").valueAsNumber;
    let resultado = document.getElementById("resultadoIMC");
    let imc = peso / ((altura / 100) ** 2);
    if (imc < 16.00) {resultado.innerHTML = `<p>Tu indice de masa es:<strong>${Math.round(imc * 100) / 100} - Infrapeso (delgadez severa)</strong></p>`}
    else if (16.00 <= imc && imc < 17.00) {resultado.innerHTML = `<p>Tu indice de masa es:<strong>${Math.round(imc * 100) / 100} - Infrapeso (delgadez moderada)</strong></p>`}
    else if (17.00 <= imc && imc < 18.50) {resultado.innerHTML = `<p>Tu indice de masa es:<strong>${Math.round(imc * 100) / 100} - Infrapeso (delgadez aceptable)</strong></p>`}
    else if (18.50 <= imc && imc < 25.00) {resultado.innerHTML = `<p>Tu indice de masa es:<strong>${Math.round(imc * 100) / 100} - Peso normal</strong></p>`}
    else if (25.00 <= imc && imc < 30.00) {resultado.innerHTML = `<p>Tu indice de masa es:<strong>${Math.round(imc * 100) / 100} - Sobrepeso</strong></p>`}
    else if (30.00 <= imc && imc < 35.00) {resultado.innerHTML = `<p>Tu indice de masa es:<strong>${Math.round(imc * 100) / 100} - Obeso (Tipo I)</strong></p>`}
    else if (35.00 <= imc && imc <= 40.00) {resultado.innerHTML = `<p>Tu indice de masa es:<strong>${Math.round(imc * 100) / 100} - Obeso (Tipo II)</strong></p>`}
    else if (imc > 40.00) {resultado.innerHTML = `<p>Tu indice de masa es:<strong>${Math.round(imc * 100) / 100} - Obeso (Tipo III)</strong></p>`}
}