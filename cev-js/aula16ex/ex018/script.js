function analisar() {
    let txnum = document.querySelector('#txnum')

    if (txnum.value.length > 0) {
        let num = Number(txnum.value)
        if (num>=0 || num<=100) {
            alert('Tudo Ok')
        } else {
            alert('Reveja os dados')
        }
    }
    
}