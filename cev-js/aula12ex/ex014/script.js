function carregar() {
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minuto}`
    if (hora > 0 && hora <= 12) {
        // BOM DIA
        img.src = '../assets/manha.png'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE
        img.src = '../assets/tarde.png'
    } else {
        // BOA NOITE
        img.src = '../assets/noite.png'
    }
}