let miNombre = "Manuel"
localStorage.setItem("userName" , miNombre)
let recuperoStorage = localStorage.getItem("userName")
localStorage.clear()

let peliculasFavoritas = [ "a" , "b" , "c" ]
let pelicula2 = peliculasFavoritas[1]
localStorage.setItem("peliculaFavorita" , pelicula2)
recuperoStorage = localStorage.getItem("peliculaFavorita")
localStorage.clear()

let peliculasJson = JSON.stringify(peliculasFavoritas)
localStorage.setItem("favoritos" , peliculasJson)

recuperoStorage = localStorage.getItem("favoritos")
let peliculasRecuperadas = JSON.parse(recuperoStorage)
peliculasRecuperadas.push("d")
peliculasJson = JSON.stringify(peliculasRecuperadas)
localStorage.setItem("favoritos" , peliculasJson)

let got = [
    {
        nombre: "Jon",
        apellido: "Snow",
        edad: 23,
        ciudad: "Winterfell"
    },
    {
        nombre: "Daenerys",
        apellido: "Targaryen",
        edad: 19
    },
    {
        nombre: "Arya",
        apellido: "Stark",
        edad: 12,
        ciudad: "Winterfell"
    },
    {
        nombre: "Tyrion",
        apellido: "Lannister",
        edad: 32,
        ciudad: "Casterly Rock"
    }
];
let winterIsComing = []
for (let i = 0 ; i<got.length ; i++) {
    if (got[i].ciudad == "Winterfell") {
        winterIsComing.push(got[i])
    }
}
let winterJson = JSON.stringify(winterIsComing)
localStorage.setItem("winterfell" , winterJson)
console.log(localStorage)