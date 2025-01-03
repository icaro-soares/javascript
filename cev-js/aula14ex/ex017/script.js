function gerar() {
    var n = document.querySelector('#numero')
    var res = document.querySelector('#res')

    if (n.value.length == 0) {
        alert('Revise os dados colocados')
    } else { 
        let c = 0    
        while (c<=10) {
            res.innerHTML = `${c} x ${n.value}`
            c = c + 1
        }
    }
}