const PORT = 3000
// Importa a biblioteca express para criação do servidor
const express = require("express")
// Cria uma instância do servidor
const app = express()
// Importa as rotas da API
const apiRoute = require("./routes/api")


const path = require("path")

// Utiliza as rotas da API
app.use("/api", apiRoute)
// Utiliza a pasta "public" como pasta estática para arquivos de front-end
app.use(express.static(path.join(__dirname, "public")))

// Inicia o servidor na porta especificada
app.listen(PORT, () => {
    console.log("servidor rodando na porta ", PORT);
})

// Inicia o servidor na porta 3000 e exibe uma mensagem de confirmação no console. 
//A pasta "public" é utilizada para arquivos estáticos como imagens, javascript e css.
// As rotas da API são importadas e utilizadas na aplicação.