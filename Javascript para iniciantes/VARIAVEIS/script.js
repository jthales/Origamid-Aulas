// Posso utiliza o , para declarar várias varíaveis de uma só vez, sem ter de digitar o var

var nome = 'Thales',
    idade = 22,
    possuiFaculdade = true;

// Utiliza-se console.log(váriavel); para demonstrar o resultado da váriavel

console.log(nome, idade, possuiFaculdade);

// Faça contas com váriaveis com valor fixo e não Strings 'KM' + 8

var preco = 25,
    totalComprado = 5,
    totalPreco = totalComprado * preco;

console.log(totalPreco)

var sobrenome = 'Henrique', 
    cidade = 'SP';

console.log(sobrenome, cidade);

// Podemos declarar váriaveis sem nada, elas darão undefined

var precoAplicativo;

console.log(precoAplicativo);

/* As váriaveis tem de ser declaradas antes para exibi-lás */

var comida;
console.log(comida);

var comida = "Pizza";
console.log(comida);

//Se fir redeclarado o último é o que vale.

var time = 'Barcelona';
    time= 'Palmeiras';

console.log(time);

// Exercício

//Declarar uma váriavel com o seu nome
var nome = 'Thales';

//Declarar uma váriavel com a sua idade
var idade = 23;

//Declara uma váriavel com a sua comida favorita e não atribuir valor
var comida;

//Atribuir valor a sua comida favotida
var comida = 'Lasanha';

//Declara 5 váriaveis diferentes sem valores

var casa;
var saude;
var cidade;
var cep;
var rua;

console.log(nome,'tem', idade, 'anos','e gosta de', comida);
