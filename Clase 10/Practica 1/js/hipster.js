let parametro1 = "Ingrese su nacionalidad: "
let nacion = prompt(parametro1)

let parametro2 = "Ingrese su profesion: "
let profes = prompt(parametro2)

let parametro3 = "Ingrese sus kms: "
let kms = prompt(parametro3)

function filosofoHipster (nacionalidad , profesion , kmsRecorridos) {
    if (nacionalidad === "Argentino" && profesion === "Musico" && kmsRecorridos === 2){
        let si = "Soy un filósofo hipster"
        alert(si)
    }
    else {
        let no = "Aún no soy filósofo hipster"
        alert(no)
    }
}