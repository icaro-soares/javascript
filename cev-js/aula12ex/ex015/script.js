/*
 0 a 14 BEBE
 15 a 29 JOVEM
 30 a 49 ADULTO
 >= 50 IDOSO
*/

var data = new Date()
var atual = data.getFullYear()
var txtano = document.querySelector('#txtano')
var res = document.querySelector('#res')
var img = document.createElement('img')
img.setAttribute('id', 'foto')

function verificar() {
    if (Number(txtano.value).length == 0 || Number(txtano.value) > atual) {
        window.alert('Erro, data inválida!')
    } else {
        var idade = atual - Number(txtano.value)
        var fsex = document.getElementsByName('radsex')
        var gênero = ''
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // BEBÊ
                img.setAttribute('src', 'bebe-h.png')
            } else if (idade < 21) { // Se for acima de 10 até 21
                // JOVEM
                img.setAttribute('src', 'jovem-h.png')
            } else if (idade < 50) { // Se for acima de 21 até 50
                // ADULTO
                img.setAttribute('src', 'adulto-h.png')
            } else {
                // IDOSO
                img.setAttribute('src', 'idoso-h.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // BEBÊ
                img.setAttribute('src', 'bebe-m.png')
            } else if (idade < 21) { // Se for acima de 10 até 21
                // JOVEM
                img.setAttribute('src', 'jovem-m.png')
            } else if (idade < 50) { // Se for acima de 21 até 50
                // ADULTO
                img.setAttribute('src', 'adulto-m.png')
            } else {
                // IDOSO
                img.setAttribute('src', 'idoso-m.png')
            }
        }
        res.innerHTML = `Detectamos ${gênero} de ${idade} anos.`
        res.appendChild(img)
    }
}