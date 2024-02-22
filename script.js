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

    if (e.inputType === 'deleteContentBackward') return

    if (inputTelefone.value.length == 1)
        inputTelefone.value = '(' + inputTelefone.value
    if (inputTelefone.value.length == 3)
        inputTelefone.value = telefone.value + ') '
    if (inputTelefone.value.length == 6)
        inputTelefone.value = inputTelefone.value + ' '
    if (inputTelefone.value.length == 11)
        inputTelefone.value = inputTelefone.value + '-'

    console.log(e)
}
