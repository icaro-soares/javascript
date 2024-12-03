var agora = new Date()
var hora = agora.getHours()
var turno

if (hora < 12) {
    turno = 'AM'
} else {
    turno = 'PM'
}

console.log(`Agora são exatamente ${hora} ${turno}`)
if (hora <= 5) {
    console.log('Boa madrugada!')
} else if (hora < 12) {
    console.log('Bom dia!')
} else if (hora <= 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}