function verificar() {
    var data = new Date()
    var atual = data.getFullYear()
    var nasc = document.getElementById('txtano')
    var rad = document.getElementsByName('radsex')
    var res = document.getElementById('res')

    if (nasc.value > atual || nasc.value <= 0) {
        alert('Dados incorretos, verifique novamente')
    } else {
        var anoNasc = Number(nasc.value)
        var genero = ''
        var idade = atual - anoNasc
        var img = document.createElement('img')
        if (rad[0].checked) {
            genero = 'homem'
            res.innerText = `Detectamos um ${genero} com ${idade} anos`
            if (idade >= 0 && idade < 6) {
                //Bebê
            } else if (idade < 12) {
                //Criança
            } else if (idade < 25) {
                //Jovem
            } else if (idade < 49) {
                //Adulto
            } else {
                //Idoso
            }
        } else if (rad[1].checked) {
            genero = 'mulher'
            res.innerText = `Detectamos uma ${genero} com ${idade} anos`
            if (idade >= 0 && idade < 6) {
                //Bebê
            } else if (idade < 12) {
                //Criança
            } else if (idade < 25) {
                //Jovem
            } else if (idade < 49) {
                //Adulto
            } else {
                //Idoso
            }
        }
    }
}