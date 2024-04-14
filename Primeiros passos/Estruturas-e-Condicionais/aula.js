/*
const numero = 3;

const numeroPar = (numero % 2) === 0;

console.log(numeroPar);

if(numeroPar){
    console.log('Par');
}else {
    console.log('Impar');
}*/

var etanol = 5.79;
var gasolina = 6.66;

var tipoCombustivel = 'etanol';

var mediaCarro = 10;

var distancia = 100;

if(tipoCombustivel === 'etanol'){
    var valorGasto = distancia/mediaCarro * etanol;
    return console.log(valorGasto.toFixed(2))
}else if(tipoCombustivel === 'gasolina'){
    var valorGasto = distancia/mediaCarro * gasolina;
    return console.log(valorGasto.toFixed(2))
}