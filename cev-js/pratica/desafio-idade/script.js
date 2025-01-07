function verificar() {
    var data = new Date()
    var atual = data.getFullYear()
    var nasc = document.getElementById('txtano')

    if (nasc.value.length == 0 || nasc.value > atual || nasc.value <= 0) {
        alert('Verifique os dados novamente')
    } else {
        var idade = atual - Number(nasc.value)
        var sexo = document.getElementsByName('radsex')
        var gênero = ''
        var img = document.createElement('img')
        var res = document.getElementById('res')

        img.setAttribute('id', 'img')

        if (sexo[0].checked) {
            gênero = 'masculino'
            if (idade >= 0 && idade < 4) {
                img.src = 'bebe-h-pq.png'
            } else if (idade < 9) {
                img.src = 'crianca-h-pq.png'
            } else if (idade < 29) {
                img.src = 'jovem-h-pq.png'
            } else if (idade < 49) {
                img.src = 'adulto-h-pq.png'
            } else {
                img.src = 'idoso-h-pq.png'
            }
        } else if (sexo[1].checked) {
            gênero = 'feminino'
            if (idade >= 0 && idade < 4) {
                img.src = 'bebe-m-pq.png'
            } else if (idade < 9) {
                img.src = 'crianca-m-pq.png'
            } else if (idade < 29) {
                img.src = 'jovem-m-pq.png'
            } else if (idade < 49) {
                img.src = 'adulto-m-pq.png'
            } else {
                img.src = 'idoso-m-pq.png'
            }
        }

        res.innerText = `Você é do sexo ${gênero} e tem ${idade} anos`
        res.appendChild(img)
        res.style.textAlign = 'center'
    }
}