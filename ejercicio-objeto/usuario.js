class Usuario {
    #_nombre;
    #_apellidos;
    #_dni;
    #_nacimiento;
    #_provincia;

    constructor(nombre = "David", apellidos = "García Sánchez", dni = "14983420T", nacimiento = 2004, provincia = "Vizcaya") {
        this.#_nombre = nombre;
        this.#_apellidos = apellidos;
        this.#_dni = dni;
        this.#_nacimiento = nacimiento;
        this.#_provincia = provincia;
    }

    get nombre() {
        return this.#_nombre;
    }

    set nombre(nombre = "David") {
        this.#_nombre = nombre;
    }

    get apellidos() {
        return this.#_apellidos;
    }

    set apellidos(apellidos = "García Sánchez") {
        this.#_apellidos = apellidos;
    }

    get dni() {
        return this.#_dni;
    }

    set dni(dni = "14983420T") {
        this.#_dni = dni;
    }

    get nacimiento() {
        return this.#_nacimiento;
    }

    set nacimiento(nacimiento = 2004) {
        this.#_nacimiento = nacimiento;
    }

    get provincia() {
        return this.#_provincia;
    }

    set provincia(provincia = "Vizcaya") {
        this.#_provincia = provincia;
    }

    generaLogin() {
        const inicialNom = this.#_nombre.charAt(0);
        const arrApellidos = this.#_apellidos.split(" ");
        const inicialAp1 = arrApellidos[0].charAt(0);
        const inicialAp2 = arrApellidos[1].charAt(0);
        const annoDosDigitos = this.#_nacimiento.toString().substring(2);

        console.log(inicialNom + inicialAp1 + inicialAp2 + annoDosDigitos);
    }

    getEdad() {
        return new Date() - this.#_nacimiento;
    }

    toString() {
        return this.#_nombre + this.#_apellidos + this.#_dni + this.#_nacimiento + this.#_provincia;
    }

    toHTML() {
        return `
            <ul>
                <li>Nombre: ${this.#_nombre}</li>
                <li>Apellidos: ${this.#_apellidos}</li>
                <li>DNI: ${this.#_dni}</li>
                <li>Fecha de nacimiento: ${this.#_nacimiento}</li>
                <li>Provincia: ${this.#_provincia}</li>
            </ul>
        `;
    }
}

const usuario1 = new Usuario();
const usuario2 = new Usuario("Elena", "López Torres", "12345678A", 2012, "Gipuzkoa");
const usuario3 = new Usuario("Adrián", "Rubio Castañares", "87654321B", 2006, "Lleida");
const usuario4 = new Usuario("Hugo", "Amor González", "43218765A", 1995, "Algecirás");

const arrayUsuarios = [usuario1, usuario2, usuario3, usuario4];

function cargarDatos() {
    arrayUsuarios.forEach(usuario => {
        console.log("Nombre: " + usuario.nombre);
        console.log("Apellidos: " + usuario.apellidos);
        console.log("DNI: " + usuario.dni);
        console.log("Fecha de nacimiento: " + usuario.nacimiento);
        console.log("Provincia: " + usuario.provincia);
    
        document.querySelector('#propiedades').innerHTML += usuario.toHTML();
        document.querySelector('#usuarios').innerHTML += usuario.generaLogin();
    });
}
