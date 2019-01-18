
// verficiar tipo de dado "typeof"

var idade = 28;
var time = null;
var simbolo = Symbol();
console.log(typeof simbolo);

var nome = 'Thales';
var sobrenome = 'Henrique';
var nomecompleto = nome + ' ' + sobrenome;

console.log(nomecompleto);

// Maneira 1 (mais difícil)

var gols = 1000;
var frase = 'Romário fez ' + gols + ' gols';
console.log(frase);

// Maneira 2 (mais fácil) template strin `frase ${variavel - 20} testes`

var gols = 1000;
var frase = `Romário fez ${gols * 2} gols`;
console.log(frase);

var ano = 2018;
var mes = 8;
console.log(ano + mes);

// Exercicios aula 2

// Declare uma váriavel contendo uma String
var comida = 'Lasanha';
console.log(`Minha comida favorita é ${comida}`)

// Declare uma váriavel contendo um número dentro de uma String
var messi = '2000';
console.log(`Messi marcou ${messi} gols`)

// Declare uma váriavel com sua idade
var idade = 23;
console.log(`Minha idade é ${idade}`)

// Declare duas váriaveis uma com nome e outra com sobrenome
var name = "Thales";
var lastName = "da Silva";
var completename = name + ' ' + lastName;
console.log(`Meu nome completo é ${completename}`)

// Coloque a seguinte frase em uma váriavel: It's time
var time = "It's time"
console.log(`A melhor música é ${time}`)

// Verifique o tupo da váriavel que contém o seu nome
console.log(typeof name)