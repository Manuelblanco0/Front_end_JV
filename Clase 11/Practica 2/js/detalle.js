let queryString = location.search
let objQueryString = new URLSearchParams(queryString)
let resultado = objQueryString.get("id")

fetch(`https://rickandmortyapi.com/api/character/${resultado}`)
    .then(function(response){
        return response.json()
    })
    .then(function(data) {
        console.log(data)
        let seccion = document.querySelector(".seccion")
        seccion.innerHTML = `
        <article>
            <img src=${data.image} alt=''>
            <p>Name: ${data.name} </p>
            <p>Status: ${data.status} </p>
            <p>Especie: ${data.species} </p>
        </article>`

    })
