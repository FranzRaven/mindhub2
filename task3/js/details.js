let date = data
let dat = date.events

console.log([document])
let query = location.search  //Guardo en mi variable lo que se le manda por url y se guarda en location.search 
console.log(query)

let parametros = new URLSearchParams(query) //Me permite usar metodos para poder obtener los valores que me llegan por url
console.log(parametros)

const id = parametros.get("id") //con el metodo get de la instancia creada arriba, saco el valor del id y lo guardo en una variable.
console.log(id)




  let result = dat.find(item => item._id == id );
  let fotex = document.getElementById("imagen")
  fotex.src = result.image

  var parrafo = document.getElementById('px');
  parrafo.innerHTML = "hola: "+ result.name;

