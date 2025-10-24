let ingresenom = "¿Cual es tu nombre?"
let nombre = prompt(ingresenom)

let ingreseedad = "¿Cuantos años tenes?"
let edad = prompt(ingreseedad)

let ingresedep = "¿Te gustan los deportes?"
let fanDeportes = confirm(ingresedep)

let gracias = "Muchas gracias {nombre} por responder nuestras preguntas"

let usuario = {
    nombreUsu: nombre,
    edadUsu: edad,
    fanDeportesUsu: fanDeportes,
    deportistaProfesional: function() {
        if (fanDeportes === true) {
            return "Si, soy fan de los deportes"
        }
        else {
            return "No soy tan fan aún de los deportes"
        }
    }
}
console.log(usuario.deportistaProfesional())