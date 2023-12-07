let valor = 100;

let numero1 = 0;
let numero2 = valor;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function cuadro() {
    let ret = getRandomInt(valor);
    numero1 += ret;
    numero2 = numero1;
    document.getElementById('idresult').innerHTML = 'R = ' + numero2;
    op();
}

function op() {
    let max = 0;
    for (let i = 0; i <= 8; i++) {
        const valor = document.getElementById(i).innerHTML = numero2;
        while (valor > max) {
            max = valor;
            document.getElementById(i).innerHTML = max;
            break;
        }
    }
}