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