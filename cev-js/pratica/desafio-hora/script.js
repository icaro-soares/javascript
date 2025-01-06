function hora() {
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    var txt = document.getElementById('msg')
    var img = document.getElementById('imagem')

    if (hora < 12) {
        //BOM DIA!
        txt.innerText = `Bom dia!! Agora são ${hora}:${min}`
        img.src = 'manha-pq.png'
    } else if (hora < 18) {
        //BOA TARDE!
        txt.innerText = `Boa tarde!! Agora são ${hora}:${min}`
        img.src = 'tarde-pq.png'
    } else {
        //BOA NOITE!
        txt.innerText = `Boa noite!! Agora são ${hora}:${min}`
        img.src = 'noite-pq.png'
    }
}