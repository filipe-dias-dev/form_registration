const dataNascimento = document.querySelector('#nascimento')

dataNascimento.addEventListener('blur', (evento) => {
    validaDataNascimento(evento.target)
})

function validaDataNascimento(input) {
    const dataReceived = new Date(input.value)
    let mensagem = ''

    if(!maiorQue18(dataReceived)) {
    mensagem = 'Você deve ser maior que 18 anos para se cadastrar.'
    }

    input.setCustomValidity(mensagem)
}

function maiorQue18(data) {
    const dataAtual = new Date()
    const dataMais18 = new Date(data.getUTCFullYar() + 18, data.getUTCMonth(), data.getUTCDate())

    return dataMais18 <= dataAtual
}