export class Usuario {
    #_nombre;
    #_apellidos;
    #_dni;
    #_nacimiento;
    #_provincia;

    constructor() {
        this.#_nombre;
        this.#_apellidos;
        this.#_dni;
        this.#_nacimiento;
        this.#_provincia;
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
        const arrApellidos = this.#_apellidos.split(", ");
        const inicialAp1 = arrApellidos[0].charAt(0);
        const inicialAp2 = arrApellidos[1].charAt(0);
        const annoDosDigitos = this.#_nacimiento.toString().substring(2);

        console.log(inicialNom + inicialAp1 + inicialAp2 + annoDosDigitos);
    }

    getEdad() {
        return new Date() - this.#_nacimiento;
    }

    toString() {
        console.log(this.#_nombre + this.#_apellidos + this.#_dni + this.#_nacimiento + this.#_provincia);
    }

    toHTML() {
        
    }
}