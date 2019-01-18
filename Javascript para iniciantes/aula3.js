// A ordem importa

// Parênteses para priorizar uma expressão

var total1 = 20 + 5 * 2; // 30
console.log(total1);

var total2 = (20 + 5) * 2 // 50
console.log(total2);

var total3 = 20 / 2 * 5; // 50
console.log(total3);

var total4 = 10 + 10 * 2 + 20 / 2; // 40
console.log(total4);

var soma1 = 10 + 10 + 20 + 30 * 4 / 2 +10
console.log(soma1)

// Operadores aritméticos Unários

var incremento = 5;
console.log(incremento++) // ++ depois da var adiciona 1 na váriavel, na próxima vez que for chamada

console.log(--incremento)  // -- subtrai 1 do número

var possuifaculdade = true;
console.log(+possuifaculdade); // Retorna "1" 

//transformar string em um número

var insertnumero = +"5"
console.log(insertnumero)


// Exercicios aula 3 

// Qual o resultado da seguinte expressão
var total = 10 + 5 * 2 / 2 + 20;
console.log(`O total da soma é ${total}`)

// Criar duas expressões que retornem NaN
var geral1 = +"vem pra cá";
console.log(geral1)

var geral2 = -"vem com nozes";
console.log(geral2);

// Somar a String '200' com o número 50 e retornar 250
var soma2 = +'200' + 50;
console.log(soma2)

// Incremente o número 5 e retorne o valor incrementado
var increment = 5
console.log(++increment)

// Como dividir o peso por 2?
var numero = +"73" / 2;
var unidade = " kg";
var peso = numero + unidade;

console.log(`Metade do seu peso é ${peso}`);

