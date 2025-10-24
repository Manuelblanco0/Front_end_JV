alert("Bienvenidos a mi sitio")

let confirmar = confirm("¿Está seguro de querer avanzar?")

if (confirm === true) {
    document.querySelector(".saludo").innerText = "Qué alegría que quieras continuar tu visita"
}
else {
    document.querySelector(".saludo").innerText = "Lamentamos que no quieras continuar tu visita"
}

let nombre = prompt("Ingrese su nombre: ")

document.querySelector("h1").innerText = "Bienvenido " + nombre

let edad = prompt("Ingrese su edad: ")
if (edad > 17) {
    let pregunta = confirm("¿Te gusta la programacion?")
    if (pregunta === false) {
    document.querySelector(".background-img").innerHTML = "<img src='./img/gatito.jpeg'>"
    }
    else {
    document.querySelector(".background-img").innerHTML = "<img src='./img/programmer.jpeg'>"
    }

    let imagen = document.querySelector(".avatar")
    let imagenusu = prompt("Imagen: ")
    imagen.innerHTML
}
else if (edad < 18) {
    document.querySelector("container-general").style.display = "none"
}

