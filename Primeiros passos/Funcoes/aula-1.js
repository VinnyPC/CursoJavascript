

function sayMyName(name){
    console.log('Your name is ' + name);
}

function quadrado(valor){
    return valor * valor;
}

function incrementarJuros(valor, percentualJuros){
    const valorAcrecimo = (percentualJuros/100) * valor;
    return valor + valorAcrecimo;
}

//função sem nome
(function (){
    console.log(incrementarJuros(100, 10));

    sayMyName('Vinicius');
    const quadradoDeDez = quadrado(10);

    console.log(quadradoDeDez);
})();
//funçoes sao objetos, podem ser atribuidos a variaveis
//deixar uma função entre () fara com que era sera invocada com prioridade
