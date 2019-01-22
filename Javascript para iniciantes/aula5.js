/*

true && true; // true
true && false; // false
false && true; // false
'Gato' && 'Cão'; // 'Cão'
(5 - 5) && (5 + 5); // 0
'Gato' && false; // false
(5 >= 5) && (3 < 6); // true

*/
var condiocional = (5 - 10) && (5 + 5);

if(condiocional) {
    console.log('Verdadeiro');
} else {
    console.log('Falso');
}

/* '||' Compara se uma expressão ou outra é verdadeira */

var cond1 = (5 - 5) || (5 + 5) && (10-5);
console.log(cond1);

/* Switch */

var corFavorita = 'verde';

switch (corFavorita) {
    case 'azul':
        console.log('Olhe para o céu!');
        break;
    case 'verde':
        console.log('Olhe para o verdão!');
        break;
    case 'amarelo':
        console.log('Olhe para o sol!');
        break;
    default:
        console.log('Feche os olhos!')
        break;
}

/* EXERCICIOS */

// Verfique se sua idade é maior do que a de algum parente

var minhaidade = 2225;
var idadetio = 222;

if(minhaidade > idadetio) {
    console.log('Eu sou mais vellho que meu tio!')
} else if(minhaidade === idadetio) {
    console.log('Nós temos a mesma idade!')
} else {
    console.log('Ele é mais velho!')
};

// Qual valor é retornado na seguinte expressão?

var expressao = (5 - 2) && (5 - " ") && (5 - 2);
console.log(expressao);

// Verifique se as seguintes variáveis são truthy ou falsy

var nome = 'Thales';
var idade = 23;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta);

// Compare titak de habitantes do Brasil com China (valor em milhões)

var brasil = 207;
var china = 1340;

if(brasil > china) {
    console.log('Brasil tem mais habitantes que a china!');
} else {
    console.log('China tem mais habitantes que o Brasil!');
};

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
    console.log('Verdadeiro');
} else{
    console.log('Falso')
};