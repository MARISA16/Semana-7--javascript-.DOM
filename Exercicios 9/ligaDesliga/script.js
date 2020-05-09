/*
  Exercício 1
  -----------

  Liga e desliga()

  1. selecione a imagem do documento.
  2. selecione o body do documento. 
  3. crie a função "changeBg", essa função deve alterar o background do body quando o usuário clicar na imagem.

    
*/
/*function changeBg(){
  const mudarFundo = document.querySelector("body")

  mudarFundo.style.background ="pink"
  const texto = document.querySelector("p")
  
  texto.style.color ="red"
  texto.innerHTML ="<h1>desligado</h1>" 
  const identidade = document.querySelector("#agua")
  identidade.style.color ="red"


}*/

const imagem = document.querySelector('img')
const background = document.body
const p = document.querySelector('p')

// const body = document.querySelector('body')

background.style.backgroundColor = "red"

function changeBg() {
  //console.log("inicio")

  if(background.style.backgroundColor == "red"){
    console.log('desliguei!')
    background.style.backgroundColor = "black"
    p.innerText = "Desligado"
    p.style.color = "white"
  } else {
    console.log('liguei!')
    background.style.backgroundColor = "red"
    p.innerText = "Ligado"
    p.style.color = "black"
  }

  
}


/*Brennda Farinha, [22.04.20 15:13]
const imagem = document.querySelector('img')
const background = document.body
const h1 = document.querySelector('h1')
const gif = document.querySelector('.imagem')

// const body = document.querySelector('body')

background.style.backgroundColor = "red"

function changeBg() {
  if (background.style.backgroundColor == "red") {
    background.style.backgroundColor = "black"
    h1.innerText = "Desligado"
    h1.style.color = "white"
    gif.src = "https://media.giphy.com/media/N4a7e1ftdbQWc/giphy.gif"
  } else {
    background.style.backgroundColor = "red"
    h1.innerText = "Ligado"
    h1.style.color = "black"
    gif.src = "https://media.giphy.com/media/3KVRMtLXfORVosk6TW/giphy.gif"
  }
}*/