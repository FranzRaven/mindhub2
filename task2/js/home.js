import {data} from './data.js';


for(let i=0; i<data.events.length; i++) {
  let ordo = document.getElementsByClassName("ordo-cards");

  let cartis = document.createElement("div");
  cartis.classList.add("card","fotis");

  let titl = document.createElement("div");
  titl.style.height = "78px"
  let title = document.createElement("h1");
  title.innerHTML = data.events[i].name;

  let fotix = document.createElement("img");
  fotix.src = data.events[i].image;

  let desc = document.createElement("div");
  desc.style.height = "58px"
  let descp  = document.createElement("p");
  descp.innerHTML= data.events[i].description;

  let butt  = document.createElement("button");
  butt.innerText = "Ver más";


  titl.appendChild(title);
  desc.appendChild(descp);


  cartis.appendChild(fotix);
  cartis.appendChild(titl);
  cartis.appendChild(desc);
  cartis.appendChild(butt);
  ordo[0].appendChild(cartis);
}
