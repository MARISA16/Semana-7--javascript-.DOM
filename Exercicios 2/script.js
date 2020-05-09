/*
  Exercício 2
  -----------

  Adicionar tarefas

  1. selecione o input e o botão da página.
  2. crie uma função "addTask" que adicione os valores inseridos no input dentro de uma div na página.
  3. adicione um observador de "click" no botão para executar a função addTask.

*/

const input = document.querySelector("#input")

// selecionando o botão
const botao = document.querySelector("#add")

// selecionando a div de tarefas
const listaTarefas = document.querySelector("#lista")

// declarando a função addTarefa
function addTarefa() {
  // criando um li para receber a tarefa do input
  const tarefa = document.createElement("li")

  // atribuindo ao innerText do li (tarefa) o valor do input
  tarefa.innerText = input.value

  // adciona tarefa (li) dentro da lista de tarefas (ul)
  listaTarefas.appendChild(tarefa)
}

// adicionando evento de click no botão
botao.addEventListener("click", addTarefa)

