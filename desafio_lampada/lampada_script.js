var lamp = window.document.getElementById('lampada')

function estaQuebrada() {
    return lamp.src.indexOf('quebrada') > -1
}

function Ligar() {
    if (!estaQuebrada()) {
        lamp.scr = 'ligada.svg'
    }
}

function Desligar() {
    if (!estaQuebrada()) {
        lamp.scr = 'desligada.svg'
    }

    lamp.addEventListener('cliclk', Quebrar)

    function Quebrar() {
        lamp.scr = 'quebrada.svg'
    }
}