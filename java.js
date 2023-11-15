let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')

let sobrenome = document.querySelector('#sobrenome')
let labelSobrenome = document.querySelector('#labelSobrenome')

let usuario = document.querySelector('#usuario')
let labelUsuario = document.querySelector('#labelUsuario')

let email = document.querySelector('#email')
let labelEmail = document.querySelector('#labelEmail')

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')

let endereco = document.querySelector('#endereco')
let labelEndereco = document.querySelector('#labelEndereco')

let genero = document.querySelector('#genero')
let labelGenero = document.querySelector('#labelGenero')

let telefone = document.querySelector('#telefone')
let labelTelefone = document.querySelector('#labelTelefone')

nome.addEventListener('keyup', () => {
    if (nome.value.length <= 2) {
        labelNome.setAttribute('style', 'color: red')
    } else {
        labelNome.setAttribute('style', 'color: green')
        alert('Passou de 3');
    }
})

function cadastrar() {
    
}