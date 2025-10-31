fetch("https://rickandmortyapi.com/api/character")
.then(function(response) {
  return response.json()
})
.then(function(data) {
  console.log(data);
  let listapersonajes = document.querySelector(".characterList")
  let characters = ""
  for (let i = 0; i < array .length; i++) {
    
    
  }
})
.catch(function(error) {
  console.log("Error: " + error);
})
