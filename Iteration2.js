//2.1 Inserta dinamicamente en un html un div vacio con javascript.
//2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

window.onload = function() {
    addContent();
  }
  
  function addContent () {
    var newDiv = document.createElement("div");
    var newContent = document.createTextNode("Hola! ¿Qué tal?");
    var newP = document.createElement("p");
    var newContentP = document.createTextNode("¿Todo Bien?");
    newDiv.appendChild(newContent,newP);
    newP.appendChild(newContentP);
    var currentDiv = document.querySelector('.fn-insert-here')
    document.body.insertBefore(newP, currentDiv);
    document.body.insertBefore(newDiv, newP);
  }


//2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.




//2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
let myDiv = document.getElementById("divOne");
var pNew = document.createElement("p");
var newText = document.createTextNode("Soy dinamico!");
pNew.appendChild(newText);
myDiv.appendChild(pNew);


//2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
let myHTwo = document.querySelector(".fn-insert-here")
let newTexTwo = document.createTextNode("Wubba Lubba dub dub")
myHTwo.appendChild(newTexTwo)

/* 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']; */

//2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const remove = document.querySelectorAll('.fn-remove-me')
let body = document.querySelector(".contenedor")


/* 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
	Recuerda que no solo puedes insertar elementos con .appendChild. */

  let p = document.createElement("p")
  let textP = document.createTextNode("Voy en medio")
  let divs = document.querySelector(".fn-insert-heree")
  p.appendChild(textP)
  document.body.insertBefore(p, divs);

//2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
  let pDentro = document.createElement("p")
  let textDentro = document.createTextNode("Voy Dentro")
  let allDivs = document.querySelectorAll(".fn-insert-here")
  pDentro.appendChild(textDentro)
  allDivs.appendChild(pDentro)