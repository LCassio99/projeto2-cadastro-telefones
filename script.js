const form = document.getElementById('form-cadastro')
nomes = []
telefones = []

let linhas = ''

form.addEventListener('submit', function (e) {
    e.preventDefault()

    addLinha()
    atualizaTabela()
})

function addLinha() {
    const inputNome = document.getElementById('nome')
    const inputTelefone = document.getElementById('telefone')

    if (telefones.includes(inputTelefone.value)) {
        alert(`O telefone -${inputTelefone.value}- já foi adicionada!`)
    } else {
        nomes.push(inputNome.value)
        telefones.push(inputTelefone.value)

        let linha = '<tr>'
        linha += `<td>${inputNome.value}</td>`
        linha += `<td>${inputTelefone.value}</td>`
        linha += `</tr>`

        linhas += linha
    }

    inputNome.value = ''
    inputTelefone.value = ''
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}

function mascara(e) {
    const inputTelefone = document.getElementById('telefone')

    if (e.inputType === 'deleteContentBackward' || e.inputType === 'deleteContentForward') inputTelefone.value = ''

    if ((!e.inputType || e.inputType === 'insertFromPaste') && e.type === 'input') {
        const numero = inputTelefone.value.replaceAll(' ', '')

        if (numero.length === 11) {
            const numeroFormatado = `(${numero[0] + numero[1]}) 9 ${numero.substring(3).slice(0, -4)}-${numero.substring(7)}`

            inputTelefone.value = numeroFormatado
        }

        if (numero.length === 10) {
            const numeroFormatado = `(${numero[0] + numero[1]}) 9 ${numero.substring(2).slice(0, -4)}-${numero.substring(6)}`

            inputTelefone.value = numeroFormatado
        }
    }

    if (inputTelefone.value.length == 1)
        inputTelefone.value = '(' + inputTelefone.value
    if (inputTelefone.value.length == 3)
        inputTelefone.value = telefone.value + ') '
    if (inputTelefone.value.length == 6)
        inputTelefone.value = inputTelefone.value + ' '
    if (inputTelefone.value.length == 11)
        inputTelefone.value = inputTelefone.value + '-'
}
