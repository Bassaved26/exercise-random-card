
  //write your code here
  document.body.onload = function (){
    
    let figuras = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    let emojis = ['♦','♥','♠','♣'];

    let numero = Math.floor((Math.random() * figuras.length));
    let simboloNumero = Math.floor((Math.random() * emojis.length));
    
    let color = ""
    for(let i=0; i<emojis.length; i++){
      if(emojis[simboloNumero] === '♦') color = "diamond"
      else if(emojis[simboloNumero] === '♥') color="heart"
      else if(emojis[simboloNumero] === '♠') color="spade"
      else if(emojis[simboloNumero] === '♣') color="club"  
    }

    document.querySelector('#plantillaHTML').innerHTML = `<div class="col-sm-12 card ${color} position-relative">  
            <div class=" top-left d-block"><div class="figuras">${emojis[simboloNumero]}</div></div>
            <div class="middle-left d-block"><h1>${figuras[numero]}</h1></div>  
            <div class="bottom-right d-block"><div class="figuras">${emojis[simboloNumero]}</div></div>
          </div>`

    document.querySelector(".middle-left").style.color ="#000";
  }



