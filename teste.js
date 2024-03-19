let frase = 'O rato roeu a roupa do rei de roma!';
let minuscula =  frase.toLowerCase();
let separaçao = minuscula.split("");
let vogais = ['a', 'e', 'i', 'o', 'u']
let qualVogal = [];


for (let i = 0; i < separaçao.length; i++){
    let letra = separaçao[i];
    if(vogais.includes(letra)) {
        qualVogal.push(letra)
      
    }
}  

console.log("O texto é : " + frase)
console.log("As vogais são : " + qualVogal.toString())
console.log("O número de vogal é : " + qualVogal.length )