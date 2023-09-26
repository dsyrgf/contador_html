const h2 = document.querySelector("h2");

function aumentar() {
    //h2.innerText = h2.innerText + 1
   // h2.innerText = +h2.innerText +1
     h2.innerText = parseInt(h2.innerText) +1
}

 function diminuir(){
    //h2.innerText = h2.innerText - 1
    h2.innerText -= 1
 }
  
 function zera(){
    h2.innerText = 0
 }