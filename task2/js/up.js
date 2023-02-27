import {data} from './data.js';

let dat = data.events;

function readarray(array,i, X){
  return(array[i][X]);
}

let cards = document.getElementsByClassName("ordo-cards");
let fragment = document.createDocumentFragment();
let fecha = data.currentDate;
let phecha = Date.parse(fecha);


for(let i=0; i<dat.length; i++){
  let phecha2 = Date.parse(dat[i].date);
  if(phecha2 > phecha){

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
    butt.onclick = clickd;

  butt.innerText = "Ver más";

  div.appendChild(divfot)
  div.appendChild(titl)
  div.appendChild(desc)
  div.appendChild(butt)
  fragment.appendChild(div)
}
}
cards[0].appendChild(fragment)




function clickd(x){
  window.location.href='../details.html'
  let ID = x.target.id;   
   console.log(ID);
  console.log(x)
  }

