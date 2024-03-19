let frase = 'O rato roeu a roupa do rei de roma!';
let minuscula = frase.toLowerCase();
let separaçao = minuscula.split("");
let vogais = ['a', 'e', 'i', 'o', 'u'];

let vogaisEncontradas = separaçao.filter(letra => vogais.includes(letra));
let numero = vogaisEncontradas.length;

console.log("A frase é : " + frase);
console.log("As vogais encontradas são : " + vogaisEncontradas);
console.log("O número total de vogais é : " + numero);
    

