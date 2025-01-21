function contar(){
    let inicio = document.querySelector('#txti')
    let fim = document.querySelector('#txtf')
    let passo = document.querySelector('#txtp')
    let res = document.querySelector('#res')
    
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('Faltam dados!')
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            alert('Passo inválido! Considerando passo 1')
            p = 1
        }
        if (i < f) {
            //Contagem progressiva
            for (let c=i; c<=f; c+=p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }    
        } else {
            //Contagem regressiva
            for (let c=i; c>=f; c-=p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } 
        res.innerHTML += `\u{1F3C1}`
    }
}
