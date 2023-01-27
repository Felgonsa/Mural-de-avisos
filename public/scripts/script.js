

document.addEventListener("DOMContentLoaded", () => {

    // Quando a pagina carregar, executa uptade posts
    updatePosts();
});

function updatePosts() {
    // Faz uma requisição fetch para a api passada
    fetch("http://192.168.100.7:3000/api/all")
        .then((res) => {
            //retorna a resposta
            return res.json();
        })
        .then((json) => {
            let postElements = "";
            let posts = JSON.parse(json).posts;

            //Loop para adicionar cada post vindo do server
            posts.forEach((post) => {
                let postElement =
                    // post id em aspas para pegar a string id, não a div// post id em aspas para pegar a string id, não a div
                    `<div id=${post.id} class="card mb-4">
        
            <div class="card-header d-flex justify-content-between">
            <h5  class="card-title d-inline-block "  >${post.title}</h5>
            <button onclick="deletePost('${post.id}')"  class="btn btn-danger ml-auto">Delete</button>
            
        </div>
        <div class="card-body">
            <div class="card-text">${post.description}</div>
        </div>
        
    </div>

    </div>
    
        </div>`;

                //Junta o novo post com os anteriores
                postElements += postElement;
            });

            // Insere o HTML gerado para cada post no elemento HTML com id "posts"
            document.getElementById("posts").innerHTML = postElements;
        });
}

function newPost() {
    let title = document.getElementById("title").value;
    let description = document.getElementById("desc").value;

    let post = { title, description };

    clearError()

    const options = {
        method: "POST",
        headers: new Headers({ "content-type": "application/json" }),
        body: JSON.stringify(post),
    };

    if (title != "" && description != "") {
        // Faz uma requisição POST para a api
        fetch("http://192.168.100.7:3000/api/new", options).then((res) => {

            // Atualiza a lista de posts
            updatePosts()

            // Limpa o valor dos campos de input
            document.getElementById("title").value = ""
            document.getElementById("desc").value = ""

            // Executa os parametros para o envio do post
        });
    } else if (title == "" && description != "") {
        noTitle()
    } else if (title != "" && description == "") {
        noDesc()
    } else {
        nothing()
    }
}


function deletePost(postDel) {

    // Faz uma requisição DELETE para a api, especificando o ID do post
    fetch("http://192.168.100.7:3000/api/delete/" + postDel, { method: 'DELETE' }).then(res => {

        // Atualiza a lista de posts
        updatePosts()

        //Passa uma mensagem de sucesso
        alert("post deleted successfully")
    })


}