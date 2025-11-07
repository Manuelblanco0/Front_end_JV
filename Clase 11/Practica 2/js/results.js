let seccion = document.querySelector(".search-results")
let queryString = location.search
let objQueryString = new URLSearchParams(queryString)
let resultado = objQueryString.get("formulario")
let characters = ""

fetch(`https://rickandmortyapi.com/api/character/?name=${resultado}`)
  .then(function(results) {
    return results.json()
})
  .then(function(data) {
    console.log(data);
    let listapersonajes = document.querySelector(".characterList")
    let characters = ""
    for (let i = 0; i <data.results.length; i++) {
    characters = characters + `
    <article>
        <img src=${data.results[i].image} alt=''>
        <a href="./detalle.html?id=${data.results[i].id}"><p>Name: ${data.results[i].name} </p></a>
        <p>Status: ${data.results[i].status} </p>
    </article> `

  }
  seccion.innerHTML = characters
})
.catch(function(error) {
  console.log("Error: " + error);
})