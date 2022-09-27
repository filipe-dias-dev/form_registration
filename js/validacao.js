export function valida(input) {
    const tipoDeInput = input.dataset.tipo

    if(validadores[tipoDeInput]){
        validadores[tipoDeInput](input)
    }

    if(input.validity.valid) {
        input.parentElement.classList.remove('input-container--invalido')
    } else {
        input.parentElement.classList.add('input-container--invalido')
    }
}

const mensagensDeErro = {
    nome: {

    valueMissing: 'O campo nome não pode estar vazio.'
    },
    email: {
        valueMissing: 'O campo nome não pode estar vazio.',
        typeMismatch: 'O email digitado não é válido.'
    },
    senha: {
        valueMissing: 'O campo de senha não pode estar vazio.',
        patternMismatch: 'A senha deve conter pelo menos uma letra, pelo menos um número, e ser maior que seis charaters.'
    },
    dataNascimento: {
        valueMissing: 'O campo de data de nascimento não pode estar vazio.',
        customError: 'Você deve ser maior que 18 anos para se cadastrar.'
    },
}

const validadores = {
    dataNascimento: input => validaDataNascimento(input)
}

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