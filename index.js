/*

console.log('Hellooo!');
console.log('Muito foda site kkk top dema9xxxx');

let x;
x = 12;

let x = 123;
let nome = "Ana";

console.log(typeof x);
console.log(x);
console.log(`Seu nome é ${nome}`);

window.alert('Aviso, este site possui alto teor de meme');

*/ 

/* Aula 1: Variáveis
let fullname = "Ana Mendes";
let age = 22;
let female = true;

document.getElementById("p1").textContent = `Seu nome é: ${fullname}`;
document.getElementById("p2").textContent = `Sua idade é: ${age} anos`;
document.getElementById("p3").textContent = `É mulher? ${female}`;
*/

// Aula 2: Arithmatic operators

/*
let username;

username = window.prompt("What's your username? ");

console.log(`Welcome! ${username}`);
*/


/*

let username;

document.getElementById("mysub").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("user").textContent = username;
}
*/


// Aula 3: Const

// toFixed(2) é parecido com round(numero, 2) do python



document.getElementById("mysub").onclick = function(){

    // Meu erro foi ter colocado as variáveis fora da função.
    let pi = 3.14159;

    // Vai converter para numero o que coloquei na "caixa de entrada"
    let raio = document.getElementById("myraio").value;
    raio = Number(raio);

    // Então, ele vai fazer a conta depois de checar as variaveis converter o valor de entrada
    let result = 2 * pi * raio;

    //Depois de ter convertido o valor de entrada
    document.getElementById("resultado").textContent = result.toFixed(2);

}