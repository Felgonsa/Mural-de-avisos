const express = require("express")
const router = express.Router()
const cors = require("cors")
const objectPosts = require("../model/posts")
const options = {
    origin: "http://localhost:3000"
}

// Habilitando o CORS
router.use(cors(options))

// Rota para obter todos os posts
router.get("/all", (req, res) => {
    //Retorna todos os posts
    res.json(JSON.stringify(objectPosts))

})

// Rota para criar novo post
router.post("/new", express.json(), (req, res) => {
    // Obtendo dados do post
    let title = req.body.title
    let description = req.body.description

    // Adicionando post ao array de posts
    objectPosts.newPost(title, description)

    // Retornando mensagem de sucesso
    res.send("usuario adicionado com sucesso")
})

// Rota para deletar post
router.delete("/delete/:id", (req, res) => {

    // Obtendo id do post a ser deletado
    const idFront = req.params.id

    // Filtrando array de posts para remover o post com o id especificado
    const NewArray = objectPosts.posts.filter(
        (currentPost) => currentPost.id != idFront
    )
    // Atualizando array de posts
    objectPosts.posts = NewArray
    // Retornando novo array de posts
    res.json(JSON.stringify(posts))

})

// Exportando rotas
module.exports = router


