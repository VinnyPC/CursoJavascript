const lista = [1,2,3,4,5];

lista.push(6)
//pega o ultimo
console.log(lista.pop());

//pega o primeiro
console.log(lista.shift());
lista[4] = 8;

console.log(lista);
console.log(lista[0]);
console.log(lista.length)

for (let i=0;i<lista.length;i++){
    console.log(lista[i]);
}