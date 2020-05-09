/*
  Exercício 1
  -----------

  Faça o gato falar!

  1. acessar e guardar o elemento que contém a imagem do gato
  2. criar uma função que execute uma lógica para alterar o texto da div "cat-chat"
  3. adicionar um observador de eventos na imagem do gato que faça com que ao clicar na imagem
  o texto da div "cat-chat" seja alterado.

    
*/

//seu código vai aqui
//preventDefault = cancela qualquer comportamento padrão de um elemento

window.addEventListener("DOMContentLoaded", function(){

    const gato = document.querySelector("#cat-pic")
    
      
      function falaGato(){
        const miau = document.querySelector("#cat-chat" , falaGato)
        miau.innerText = "MeDmmm"
    }
    
    gato.addEventListener("click" , falaGato)
    
    })