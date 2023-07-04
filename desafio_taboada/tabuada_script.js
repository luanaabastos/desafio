function Tabuada() {
    var num = document.getElementById('num')
    var end = document.getElementById('end')
    if (num.value.lenght == 0 || end.value.lenght == 0) {
        window.alert('[ERRO] Confira os dados!')
    } else {
        var n = Number(num.value)
        var e = Number(end.value)
        var x = 0
        var r = ''
        var resp = document.getElementById('resposta')
        resp.innerHTML = `A tabuada do ${n} é: <br>`

        do {
            r = n * x
            resp.innerHTML += `${x} x ${n} = ${r} <br>`
            x++
        } while (x <= e)

    }
}