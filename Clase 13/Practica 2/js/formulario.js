let formulario = document.querySelector(".contact-form")
let nombre = document.querySelector(".fullname")
let mail = document.querySelector(".email")
let telefono = document.querySelector(".phone")
let contraseña = document.querySelector(".password")
let repetirCon = document.querySelector(".rePassword")

let nombreError = document.querySelector(".invalid-feedback fullName")
let mailError = document.querySelector(".invalid-feedback email")
let telefonoError = document.querySelector(".invalid-feedback phone")
let contraseñaError = document.querySelector(".invalid-feedback password")
let repetirConError = document.querySelector(".invalid-feedback rePassword")

formulario.addEventlistener("submit" , function(event) {
    event.preventDefault();
    if (nombre.value == "" || mail.value == "" || (telefono.value).lenght<8 || contraseña.value != repetirCon){
        if (nombre.value == ""){
            nombreError.innerHTML = "<p>Este campo es obligatorio</p>"
            nombreError.style.display = "block"
        }
        if (mail.value == ""){
            mailError.innerHTML = "<p>Este campo es obligatorio</p>"
            mailError.style.display = "block"
        }
        if ((telefono.value).length < 8){
            telefonoError.innerHTML = "<p>El telefono no es valido</p>"
            telefonoError.style.display = "block"
        }
        if (contraseña.value <3){
            contraseñaError.innerHTML = "<p>La contraseña debe contener al menos 3 caracteres</p>"
            contaseñaError.style.display = "block"
        }
        if (repetirCon.value != contraseña.value){
            repetirConError.innerHTML = "<p>La contraseña no es la misma</p>"
            repetirConError.style.display = "block"
        }
        
        if(nombre.value != ''){
            nombreError.style.display = 'none'
        }
        if(mail.value != ''){
            mailError.style.display = 'none'
        }
        if((telefono.value).length >= 8){
            telefonoError.style.display = 'none'
        }
        if((contraseña.value).length >= 3 ){
            contraseñaError.style.display = 'none'
        }
        if(repetirCon.value == contraseña.value){
            repetirCon.style.display = 'none'
        }
    }
    else{
        this.submit()
    }
})