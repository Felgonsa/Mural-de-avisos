module.exports={
    // Declara um array vazio chamado "posts"// Declara um array vazio chamado "posts"
     posts : [
    ],
// Cria uma função para retornar todos os posts
    getAll(){
        return this.posts
    },
// Cria uma função para adicionar um novo post ao array "posts"
    newPost(title,description){

        this.posts.push({ id:generateId(), title, description})
    }
}
// Cria uma função para gerar um id único para cada post
function generateId(){
    return Math.random().toString(36).substring(2,9)
    
    }
    