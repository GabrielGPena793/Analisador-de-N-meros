let num = document.querySelector('input#numero')
let seletor = document.querySelector('select#seletor')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else{
        return false
    }

}

function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}
 




function adicionar() {
    if(isNumero(num.value)  && !inLista(num.value, valores)) {//se for um número e se o número  não estiver na lista.
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado `
        seletor.appendChild(item)
        res.innerHTML = '' // quando eu adicionar outro resultado meu res vai ficar vazio.
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = '' // apagando o número colocado no input  que o cliente coloca 
    num.focus() // voltando o foco para o input
    
   

}

function finalizar(){
    if(valores.length == 0){
    alert('Adicione valores antes de finalizar!') 
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores ){//pra cada posição em valores vou fazer um teste
            soma += valores[pos]
            if(valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
           
    }

    media = soma / tot    
    res.innerHTML = ''
    res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
    res.innerHTML += `<p> O maior valor informado foi ${maior}.</p>`
    res.innerHTML += `<p> O menor valor indormado foi ${menor}.</p>`
    res.innerHTML += `<p> Somando todos os valores, temos ${soma}</p>`
    res.innerHTML += `<p> A media de todos os valores é ${media}.</p>`
    }
}