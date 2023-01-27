// Este código é responsável por manipular a exibição de erros na tela quando o usuário tenta enviar um novo post sem preencher o título ou descrição.
// Ele utiliza o método getElementById para obter os elementos HTML "title" e "desc" e "error" e armazena-os em variáveis.

let error = document.getElementById("error")

let title = document.getElementById("title")
let desc = document.getElementById("desc")

// As funções "noTitle", "noDesc" e "nothing" são chamadas quando o título, descrição ou ambos estão vazios, respectivamente.
// Essas funções definem o texto do elemento "error" e adicionam ou removem a classe "border-danger" dos elementos "title" e "desc" 
//para destacar os campos com erro.
function noTitle(){
    
    error.innerText = "Title is required"
    title.classList.remove("border-dark")
    title.classList.add("border-danger")
}

function noDesc(){
    error.innerText = "Description is required"
    desc.classList.remove("border-dark")
    desc.classList.add("border-danger")
}

function nothing(){
    error.innerText = "Title and description is required"

    title.classList.remove("border-dark")
    desc.classList.remove("border-dark")
    
    desc.classList.add("border-danger")
    title.classList.add("border-danger")
}

// A função "clearError" é chamada quando os erros são corrigidos e limpa o texto de erro e remove 
// a classe "border-danger" dos elementos "title" e "desc".
function clearError(){
    error.innerText = ""
    title.classList.remove("border-danger")
    desc.classList.remove("border-danger")
    
    desc.classList.add("border-dark")
    title.classList.add("border-dark")
}