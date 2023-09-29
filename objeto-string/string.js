function cargar() {
    let ejercicios = document.getElementById("ejercicios");
    
    let frase = "España se ha proclamado campeona del Eurobasket después de derrotar a Francia (88-76) en la gran final de Berlín";
    ejercicios.innerHTML += `<h2>Frase original: ${frase}</h2>`;
    
    let letras = frase.length;
    ejercicios.innerHTML += `
        <h3>¿Cuántas letras tiene la frase?</h3>
        <p>${letras}</p>
        `;
    
    let caracter = frase.charAt(25);
    ejercicios.innerHTML += `
        <h3>¿Qué carácter hay en la posición número 25?</h3>
        <p>${caracter}</p>
        `;
    
    let firstD = frase.indexOf("d");
    let lastD = frase.lastIndexOf("d");
    let secondD = frase.indexOf("d", firstD + 1);
    ejercicios.innerHTML += `
        <h3>¿En qué posición está la primera letra d? ¿Y la última? ¿Cómo conseguirías sacar la segunda letra d?</h3>
        <p>Posición 1º D: <strong>${firstD}</strong> - Posición 2º D: <strong>${secondD}</strong> - Posición última D: 
        <strong>${lastD}</strong></p>
        `;
    
    let eurobasket = frase.indexOf("Eurobasket");
    ejercicios.innerHTML += `
        <h3>¿En qué posición está la palabra "Eurobasket"?</h3>
        <p>${eurobasket}</p>
        `;
    
    let portugal = frase.includes("Portugal");
    ejercicios.innerHTML += `
        <h3>¿Cómo sabes si existe la palabra "Portugal" en la frase?</h3>`;
    if (portugal) {
        ejercicios.innerHTML += `<p>La palabra "Portugal" está en la frase.</p>`;
    } else {
        ejercicios.innerHTML += `<p>La palabra "Portugal" no está en la frase.</p>`;
    }
    
    let empieza = frase.startsWith("Berlín");
    let termina = frase.endsWith("Berlín");
    ejercicios.innerHTML += `<h3>¿Cómo sabes si existe la palabra "Berlín" en la frase?</h3>`;
    if (empieza) {
        ejercicios.innerHTML += `<p>La frase empieza con la palabra "Berlín".</p>`;
    } else if (termina) {
        ejercicios.innerHTML += `<p>La frase termina con la palabra "Berlín".</p>`;
    } else {
        ejercicios.innerHTML += `<p>La frase ni empieza ni termina con la palabra "Berlín".</p>`;
    }
    
    let nuevaFrase = frase.concat(" el día 18 de septiembre de 2022.");
    ejercicios.innerHTML += `
        <h3>Añade a la frase “el día 18 de septiembre de 2022” y guarda todo en una variable.</h3>
        <p>${nuevaFrase}</p>
        `;
    
    let letra26 = nuevaFrase.charAt(26);
    let letra35 = nuevaFrase.charAt(35);
    ejercicios.innerHTML += `
        <h3>Extrae de la frase anterior las letras que hay entre las posiciones 26 y 35.</h3>
        <p>Letra posición 26: <strong>${letra26}</strong> - Letra posición 35: <strong>${letra35}</strong></p>
        `;
    
    let from40 = nuevaFrase.slice(40);
    ejercicios.innerHTML += `
        <h3>Extrae de la frase anterior las letras que hay a partir de la posición 40.</h3>
        <p>${from40}</p>
        `;
    
    ejercicios.innerHTML += `
        <h3>Añade a la frase 5 espacios por delante y 10 por detrás. 
        Luego busca el método que elimine esos espacios en blanco sin tener que indicarle 
        exactamente el número de ellos que hay.</h3>
        `;
    let espaciosInicio = nuevaFrase.padStart(nuevaFrase.length + 5, '     ');
    let espacios = espaciosInicio.padEnd(espaciosInicio.length + 10, '          ');
    console.log("(" + espacios + ")");
    let fraseSinEspacios = espacios.trim();
    console.log(fraseSinEspacios);
    ejercicios.innerHTML += `
        <p>Solución en la consola (no le apetecía enseñarlo bien en el html)</p>
        `;
    
    ejercicios.innerHTML += `
        <h3>Convierte la frase en todo letras minúsculas. Y luego en todo letras mayúsculas.</h3>
        `;
    let fraseMinusculas = nuevaFrase.toLowerCase();
    let fraseMayusculas = nuevaFrase.toUpperCase();
    ejercicios.innerHTML += `
        <p>Frase minúsculas: <strong>${fraseMinusculas}</strong></p>
        <p>Frase mayúsculas: <strong>${fraseMayusculas}</strong></p>
        `;
    
    ejercicios.innerHTML += `
        <h3>Convierte la frase en un array en el que cada posición tenga una palabra usando un único método.</h3>
        `;
    let fraseArray = nuevaFrase.split(" ");
    ejercicios.innerHTML += `<p>`;
    fraseArray.forEach(element => {
        ejercicios.innerHTML += `${element}, `;
    });
    ejercicios.innerHTML += `</p>`;
    
    ejercicios.innerHTML += `
        <h3>Extrae del array anterior las posiciones 0, 6 y 11.</h3>
        `;
    let pos0 = fraseArray[0];
    let pos6 = fraseArray[6];
    let pos11 = fraseArray[11];
    ejercicios.innerHTML += `
        <p>Posición 0: <Strong>${pos0}</strong> - Posición 6: <strong>${pos6}</strong> - Posición 11: <strong>${pos11}</strong></p>
        `;
}
