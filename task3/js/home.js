//import {data} from './data.js';
let date = data
let dat = date.events;


function readarray(array,i, X){
  return(array[i][X]);
}
///////Array de categorias
let cats = [];
dat.forEach((event)=>{
  if(!cats.includes(event.category)){
    cats.push(event.category);
  }});
//console.log(cats);

///////  Creación de checkboxis
//let fragmen2 = document.createDocumentFragment();
let a = document.getElementsByTagName("form")
let b = document.createElement("div")
cats.forEach(event => {
  let form = document.createElement("div")
  let formi = document.createElement("input")
  let formix = document.createElement("label")
  formi.type= "checkbox" 
  form.name = event
  form.id= event
  formix.innerText= event
  form.appendChild(formi)
  form.appendChild(formix)
  b.appendChild(form)
  a[0].appendChild(b)
  //console.log(form)
})


///////////////
let cards = document.getElementsByClassName("ordo-cards");
let fragment = document.createDocumentFragment();

for(let i=0; i<dat.length; i++){
  let div = document.createElement('div')
  div.classList.add("card","fotis");

  let divfot =document.createElement('img');
  divfot.src = readarray(dat, [i], "image")

  let titl = document.createElement("div");
  titl.style.height = "78px"
  let title = document.createElement("h1");
  title.innerText = readarray(dat, [i], "name");
  titl.appendChild(title)

  let desc = document.createElement("div");
  desc.style.height = "68px"
  let descp  = document.createElement("p");
  descp.innerHTML= readarray(dat, [i], "description");
  desc.appendChild(descp);


  let butt  = document.createElement("button");
  butt.id = readarray(dat, [i], "_id")
  butt.onclick = clickd
  butt.innerText = "Ver más";

  


  div.appendChild(divfot)
  div.appendChild(titl)
  div.appendChild(desc)
  div.appendChild(butt)
  fragment.appendChild(div)
}
cards[0].appendChild(fragment)
////////////////////// FUnction clickd
function clickd(x){
  let ID = x.target.id;   
  console.log(ID);
  console.log(x)
  //window.location.href="../details.html?id=ID"
  location.href ="../details.html?id="+ID
}




