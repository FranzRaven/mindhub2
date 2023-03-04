console.log('holus, terrícola');

import {data} from './data.js';


console.log("fecha actual:  " + data.currentDate);
console.log("fecha actual:  " + Date.parse(data.currentDate));

console.log(Date.parse(data.events[0].date));
//console.log(data.events.length);
console.log("*************************\n"); 

let fecha = data.currentDate;
let phecha = Date.parse(fecha);

let largo = data.events.length;
for (let i=0; i < largo; i++) {
  console.log(i);
    let phecha2 = Date.parse(data.events[i].date);
    if( phecha2 < phecha)  {
    console.log(data.events[i].name +" "+ "ya fue")
  }else if (phecha2 == phecha){
      console.log(data.events[i].name + "  " + " es Hoy!!!")  
  } else{
    console.log(data.events[i].name + " proximamente")
  }
  console.log(data.events[i].date);
  console.log("*************************\n"); 

}
