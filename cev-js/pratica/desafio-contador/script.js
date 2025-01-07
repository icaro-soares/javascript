function contar() {
    let inicio = document.querySelector('#txtini')
    let fim = document.querySelector('#txtfim')
    let passo = document.querySelector('#txtpas')
    let res = document.querySelector('#res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('Verifique os dados')
    } else {
        res.innerHTML = `Contando:<br>`
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
                
        if (i < f) {
            for (let c=i; c<=f; c+=p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        } else if (i > f) {
            for (let c=i; c>=f; c-=p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}