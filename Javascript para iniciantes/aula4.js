// Boolean serve para fazer uma verificação condicional

// verificar se uma expressão é verdadera com "if", caso contŕario o "else" será ativado.

var possuiGraduacao = true
if(possuiGraduacao) {
    var x = 10;
    console.log("Possui Graduação!");
} else {
    console.log('Não possui graduação!');
}

// retorna possui graduação e não executa o else

console.log(x)


// Se o if não for verdadeiro, ele testa o "else if"

var possuiGraduacao = true;
var possuiDoutorado = true;

if(possuiDoutorado){
    console.log('Possui doutorado!')
} else if (possuiDoutorado){
    console.log("olá")
}

var nome;

if(nome) {
    console.log(nome);
} else {
    console.log("nome não existe");
}

// Truthy e falsy

/* Falsy
if(false)
if(0) // ou -0
if(nan)
if(null)
if (undefined)
if('') // ou "" ou `` 

Todo o resto é Truthy */  


/* Operador lógico de negação

Truthy
if(!true) // false
if(!1)  // false
if(!'') // true
if(!undefined) // true
if(!!' ') // true
if(!!'') // false

Pode-se utilizar o !! para verificar se uma expressão é Truthy ou Falsy */

var x = '10';
console.log(x == 10);

// == não é tão estrita já === é estrita

var animal = "Gato";
console.log(animal !== "Gatos")