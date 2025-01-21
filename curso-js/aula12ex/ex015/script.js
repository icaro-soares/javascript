function verificar() {
    var data = new Date()
    var atual = data.getFullYear()
    var nasc = document.querySelector('#txtano')
    
    if (nasc.value <= 0 || nasc.value > atual || nasc.value.length == 0) {
        alert('[ERRO] Os dados inseridos estão incorretos!')
    } else {
        var idade = atual - nasc.value
        var res = document.querySelector('#res')
        var sexo = document.getElementsByName('radsex')
        var genero = ''
        var img = document.createElement('img')
        
        img.setAttribute('id', 'foto')

        if (sexo[0].checked) {
            genero = 'masculino'
            if (idade >= 0 && idade < 5) {
                //Bebe
                img.setAttribute('src', 'bebe-h-pq.png')
            } else if (idade < 14) {
                //Criança
                img.setAttribute('src', 'criança-h-pq.png')
            } else if (idade < 29) {
                // Adolescente
                img.setAttribute('src', 'jovem-h-pq.png')
            } else if (idade < 49) {
                // Adulto
                img.setAttribute('src', 'adulto-h-pq.png')
            } else {
                //Idoso
                img.setAttribute('src', 'idoso-h-pq.png')
            }
        } else if (sexo[1].checked) {
            genero = 'feminino'
            if (idade >= 0 && idade < 5) {
                //Bebe
                img.setAttribute('src', 'bebe-m-pq.png')
            } else if (idade < 14) {
                //Criança
                img.setAttribute('src', 'criança-m-pq.png')
            } else if (idade < 29) {
                // Adolescente
                img.setAttribute('src', 'jovem-m-pq.png')
            } else if (idade < 49) {
                // Adulto
                img.setAttribute('src', 'adulto-m-pq.png')
            } else {
                //Idoso
                img.setAttribute('src', 'idoso-m-pq.png')
            }
        }
        
        res.innerText = `Você é do gênero ${genero} com ${idade} anos`
        res.style.textAlign = 'center'
        res.appendChild(img)
    }
}