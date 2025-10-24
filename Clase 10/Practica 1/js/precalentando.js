let pregunta = "¿Vas a salir de tu casa?"
let respuesta = confirm(pregunta)
if (respuesta === true) {
    let alerta = "Chequeá el pronóstico del tiempo antes de salir"
    alert(alerta)
}
else {
    let mensaje = "Que bueno que te quedes. Va a llover mucho hoy."
    alert(mensaje)
}