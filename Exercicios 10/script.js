/*const arrayLivros = [
    {
      titulo: "Harry Potter e a Pedra Filosofal",
      autor: "J. K. Rowling",
      imagem: "https://media.giphy.com/media/pYCZPDymIVjeo/giphy.gif",
    },
    {
      titulo: "Harry Potter e a Câmara Secreta",
      autor: "J. K. Rowling",
      imagem :"./images.jpg",
    },
    {
      titulo: "Harry Potter e a Ordem da Fênix",
      autor: "J. K. Rowling",
      imagem: "./enxaguados.jpg",
    },
    {
      titulo: "Harry Potter e o Enigma do Principe",
      autor: "J. K. Rowling"
    }
  ]
  //acessando a body do html com querySelector
  const body = document.querySelector("body")

  //criando a elemento imagem
  
  // percoorer o array de livros
  for(let contador =0;contador < arrayLivros.length;contador++){
    //console.log no titulo e autor dos livros
    // console.log(`Titulo`,arrayLivros[contador].titulo,"autor",arrayLivros[contador].titulo)
    //criando a div que vai receber as informações  do livrso
    const divLivros = document.createElement("div")
    //criar um h2 para receber o titulo do livro
    const tituloH2 = document.createElement("h2")
    tituloH2.innerText =`Titulo:${arrayLivros[contador].titulo}`
    //criar um paragrafo que vai receber a autora do livro
    const autoraParagrafo = document.createElement("p")
    autoraParagrafo.innerText = `Autora: ${arrayLivros[contador].autor}`

    const imagem = document.createElement("img")
    imagem.src = `${arrayLivros[contador].imagem}`
    
    //adecionando o tituloH2 e o autorParágrafo dentro da divLvro
    divLivros.appendChild(tituloH2)
    divLivros.appendChild(autoraParagrafo)
    divLivros.appendChild(imagem)
    // adecionando divLivro no body
   //divLivros.innerText =`Titulo: ${arrayLivros[contador].titulo} - autora: ${arrayLivros[contado]}`
    body.appendChild(divLivros)
    // adicionando 
   //body é o pai  do  appendChild
   console.log
