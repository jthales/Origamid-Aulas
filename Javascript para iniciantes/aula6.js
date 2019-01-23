function areaQuadrado(lado) {
    return lado * lado;
}

console.log(areaQuadrado(2));

function pi() {
    return 3.14;
}
var total = 5 * pi(); // 15.7

console.log(total)

// () executa a função

function imc(peso, altura) {
    var imc = peso / (altura ** 2);
    return imc;
}

console.log(imc(80, 1.80)); // 80 e 1.80 são os argumentos
console.log(imc(60, 1.70)) // 60 e 1.70 são os argumentos

function corFavorita(cor) {
    if(cor === 'azul'){
        return 'Eu gosto do azul';
    } else if (cor === 'verde') {
        return 'Eu gosto do Palmeiras!';
    } else {
        return 'Eu não gosto de cores!';
    }

};

// Argumentos podem ser funções

// Está é uma função anônima

addEventListener('click', function() {
    console.log('Clicou');
});

// se não definirmos o return ele irá retornar undefined

function imc2(peso, altura) {
    var imc = peso / (altura ** 2);
    console.log(imc);
}

imc2(80, 1.80);

// Uma função pode retornar qualquer tipo de dado e até outras funções.

function terceiraIdade(idade) {
    if(typeof idade !== 'number') {
        return 'informe sua idade';
    } else if(idade >= 60) {
        return true;
    } else {
        return false;
    }
    console.log('testando');
}

console.log(terceiraIdade(60));

// Escopo var e functions definidade dentro de um bloco {}, não são visiveis fora dele.
var totalPaises = 193;
function precisoVisitar(paiseVisitado) {
    return `Ainda faltam ${totalPaises - paiseVisitado} paises para visitar`;
}

console.log(totalPaises);

// Escopo Léxico functions conseguer acessar var com o contexto 'pai'

var profissao = 'Designer';

function dados() {
    var nome = 'Thales';
    var idade = 23;
    function outrosDados() {
        var endereco = 'Sampa';
        var idade = 29;
        return `${nome}, ${idade}, ${endereco}, ${profissao}`;
    }
    return outrosDados();
}

console.log(dados());


// Exercicios

// Crie uma função para verificar se um valor é Truthy
// ela deve possuir os parâmetros: nome e sobrenome

var nome = 'Thales';
var sobrenome = 'Henrique';

function verificarValor(nome, sobrenome) {
    return `O valor de nome é ${!!!nome} e sobrenome é ${!!!sobrenome} `
};

console.log(verificarValor());

// Crie uma função que verifica se um número é par

var num = 5;

function verificaPar(num) {
    if(num % 2 == 0){
        return `O número é par`;
    } else {
        return `O número é impar`;
    }
}

console.log(verificaPar());

// Crie uma função que retorne o tipo de dado do argumento passa nela (typeof)

function tipoDeDado(dado) {
    return typeof dado;
}

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome complet
// quando o evento 'scroll' ocorrer.

addEventListener('scroll', function(){
    console.log('Thales Henrique da Silva')
});

// Corrija o erro abaixo
var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`
}

function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises}`
}

precisoVisitar(20);
jaVisitei(20);

