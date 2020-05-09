



/*

  Exercício 2
  -----------

  Instruções:

  1. Mude o estilo do body para que a font-family seja "Arial, sans-serif"

  2. selecione os spans do html e substitua cada com informações suas.

  3. crie um arquivo css com a class "list-item" - que tenha a propriedade color como red.

  4. Percorra por cada li presente na ul e adicione em sua classList a classe "list-item". 

  5. Crie um elemento img e coloque no atributo src uma foto sua. Não se esqueça de adicionar o novo elemento na página.
  
*/
// questão 1 RESPONDIDA
const body = document.querySelector("body")
body.style.fontFamily ="Arial,sans-serif"


// questão 2
//chamei


const apelido = document.querySelector("#nickname")

const marisa = document.querySelector("#favorites")
const  angola= document.querySelector("#hometown")

apelido.innerText ="Rafael"
marisa.innerText = " Mãe"
angola.innerText = "Luanda"

//questão3

//length é quantidade
//Sempre que que fala percorre étrata se do (for)

const li = document.querySelectorAll("li")

for(let contador = 0;contador < li.length; contador++){
  console.log([contador])
  li[contador].classList.add("list-item")

}
 //questão 4
 const html = document.querySelector("html")
 const estilo = document.createElement("style")

 estilo.innerText = ".list-item {color:red;}"
  html.appendChild(estilo)

//5

const img = document.createElement("img")
img.src="https://media.giphy.com/media/gKTQmAHj2wl7h1r0La/giphy.gif"
body.appendChild(img)



