function areaQuadrado(lado) {
    return lado * lado;
}

console.log(areaQuadrado(10));

function pi() {
    return 3.14;
}

var total = 5 * pi(); //15.7
console.log(total);

function imc(peso, altura) {
    var imc = peso / (altura * altura);
    return imc;
}

console.log(imc(80, 1.73));

function corFavorita(cor) {
    if(cor === 'verde') {
        return 'Eu gosto do Palmeiras';
    }
    else if(cor === 'azul') {
        return 'Eu gosto do céu';
    }
    else {
        return 'Eu não gosto de cores';
    }
}

console.log(corFavorita('outra'))

addEventListener('click', function(){
    console.log('Clicou');
})