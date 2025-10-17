let misDatos = {
    nombre: "Manuel" ,
    apellido: "Blanco" ,
    edad: 18 ,
    dni: 47787141 ,
    comidasFavoritas: ["hamburguesa" , "milanesa" , "pizza"] ,
    saludar: function() {
        return "Hola mi nombre es" + this.nombre + this.apellido + "y tengo" + this.edad + "años. Mi primer comida favorita es" + this.comidasFavoritas[0]
    }
};
console.log(misDatos.nombre)
console.log(misDatos.apellido)
console.log(misDatos.edad)
console.log(misDatos.dni)
console.log(misDatos.comidasFavoritas)

let auto = {
    marca: "BMW" ,
    modelo: "120i",
    año: 2018 ,
    color: "gris" ,
    posicion: 0 ,
    avanzar: function(n) {
        return this.posicion = this.posicion + n
    },
    retroceder: function(n) {
        return this.posicion = this.posicion - n
    }
};
console.log(auto.marca)
console.log(auto.modelo)
console.log(auto.año)
console.log(auto.color)
console.log(auto.posicion)

let nuevoAuto = {
marca: "BMW" ,
    modelo: "120i",
    año: 2018 ,
    color: "gris" ,
    posicion: 0 ,
    moverse: function(n) {
        return this.posicion = this.posicion + n
    }
};
console.log(auto.marca)
console.log(auto.modelo)
console.log(auto.año)
console.log(auto.color)
console.log(auto.posicion)

let ironMan = {
    nombre: "Iron Man",
    equipo: "Avengers",
    poderes:  ["Volar", "Lanzar misiles", "Disparar láser"],
    energia: 100 ,
    getPoder: function(n) {
        this.energia = this.posicion - 10

         return "Poder elegido de" + this.nombre + this.poderes[n] + ". Energia restante" + this.energia
    }
}
    
let hulk = {
    nombre: "Hulk",
    equipo: "Avengers",
    poderes:  ["Aplastar", "Gritar", "Golpear"],
    energia: 100 ,
    getPoder: function(n) {
        this.energia = this.energia - 10

        return "Poder elegido de" + this.nombre + this.poderes[n] + ". Energia restante" + this.energia
    }
}

console.log( hulk.getPoder(0) );

console.log( ironMan.getPoder(2) );