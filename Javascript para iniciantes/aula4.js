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

