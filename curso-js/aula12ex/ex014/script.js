function horario() {
    var data = new Date
    var hora = data.getHours()
    var min = data.getMinutes()
    var msg = document.getElementById('mensagem')
    var img = document.querySelector('#img')

    if (hora < 12) {
        //BOM DIA
        msg.innerText = `Bom Dia! Agora são ${hora}:${min}`
        img.src = 'manha-pq.png'
    } else if (hora < 18) {
        //BOA TARDE
        msg.innerText = `Boa Tarde! Agora são ${hora}:${min}`
        img.src = 'tarde-pq.png'
    } else {
        //BOA NOITE
        msg.innerText = `Boa Noite! Agora são ${hora}:${min}`
        img.src = 'noite-pq.png'
    }
}