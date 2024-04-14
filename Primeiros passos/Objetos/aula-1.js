class Pessoa {
    nome;
    idade;
    anoDeNascimento

    //constructor = oq acontece quando uma pessoa é instanciada
    constructor(nome, idade){
        this.nome = nome,
        this.idade = idade,
        this.anoDeNascimento = 2024 - idade;
    }

    descrever() {
        console.log('Meu nome é ' + this.nome + ' e minha idade é ' + this.idade)
    }
}

const objLiteral = {nome: '', idade: ''}
//###Funções Recebendo Objetos####
function compararPesssoas(p1, p2){
    if(p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velha que ${p2.nome}`)
    }else if(p2.idade > p1.idade){
        console.log(`${p2.nome} é mais velha que ${p1.nome}`)
    }else {
        console.log(`${p2.nome} e ${p1.nome} tem a mesma idade`)
    }
}

//instanciando pessoa
const vinicius = new Pessoa('Vinicius', 25);

const vitor = new Pessoa();
vitor.nome = 'Vitor Henrique'
vitor.idade = 30;

console.log(vinicius, vitor)

compararPesssoas(vinicius, vitor)

/*
const vinicius = {
    //chave: valor,
    //chave: valor
    //etc...
    nome: 'Vinicius Silva',
    idade: 23,
    descrever: function (){
        console.log('Meu nome é ' + this.nome + ' e minha idade é ' + this.idade)
    }
}
#######um objeto em javascript é uma coleção dinamica de chave e valores

objVinicius.altura = 1.90
console.log(vinicius.nome)
console.log(vinicius.idade)
vinicius.descrever();

delete vinicius.nome;

console.log(vinicius)

#######acessar de forma dinamica######

const atributo = 'idade';

console.log(vinicius[atributo])

#######atribui teste ao valor da chave nome######
vinicius['nome'] = 'Teste'
console.log(vinicius.nome)
*/