// 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme

let myButton = document.querySelector('.showme');

console.log(myButton);

//1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
let myHone = document.querySelector('#pillado');

console.log(myHone);
//1.3 Usa querySelector para mostrar por consola todos los p

let myP = document.querySelectorAll('p');
for (let index = 0; index < myP.length; index++) {
    console.log(myP[index].innerHTML);

}

//1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon
let myPokemon = document.querySelectorAll('.pokemon');

const searchElement = ((list) => {
    list.forEach(element => {
        console.log(element.innerHTML)
    });
})

console.log(searchElement(myPokemon))

//1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo 
//data-function="testMe".
let testMe = document.querySelectorAll('[data-function="testMe"]');

console.log(searchElement(testMe));

//1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
//data-function="testMe"

console.log(testMe[2].innerHTML);

