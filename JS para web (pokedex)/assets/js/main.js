const offset = 0
const limit = 10

const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

//fetch retorna uma Promise - promessa de um resultado - de um response
//assincrono nao tem a resposta de imediato pq é uma requisição
//.then = o que ira fazer quando receber uma resposta do server
fetch(url).then((function (response){
    console.log(response)
}))