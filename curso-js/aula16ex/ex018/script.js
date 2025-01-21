function analisar() {
    let txn = document.querySelector('#txn')
    let res = document.querySelector('#res')

    if (txn.value.length == 0) {
        alert('Reveja os dados')
    } else {
        let n = Number(txn.value)
        if (n <= 0 || n > 100) {
            alert('Por favor, digite um número en 1 e 100')
        } else {
            
        }
    }
}