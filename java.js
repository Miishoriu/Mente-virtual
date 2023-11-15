var usuarios = [];

var usuariosSalvos = localStorage.getItem('usuarios');
if (usuariosSalvos) {
    usuarios = JSON.parse(usuariosSalvos);
}

function cadastrar() {
    var nome = document.getElementById('validationCustom01').value;
    var sobrenome = document.getElementById('validationCustom02').value;
    var usuario = document.getElementById('validationCustom02').value;
    var email = document.getElementById('floatingInputInvalid').value;
    var senha = document.getElementById('floatingInputInvalid').value;
    var endereco = document.getElementById('validationCustom03').value;
    var genero = document.getElementById('validationCustom04').value;
    var telefone = document.getElementById('validationCustom05').value;

    // objeto usuário
    var novoUsuario = {
        nome: nome,
        sobrenome: sobrenome,
        usuario: usuario,
        email: email,
        senha: senha,
        endereco: endereco,
        genero: genero,
        telefone: telefone
    };

    usuarios.push(novoUsuario);

    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    localStorage.setItem('loginInfo', JSON.stringify({
        usuario: usuario,
        senha: senha
    }));

    limparCampos();

    alert('Cadastro realizado com sucesso!');

    window.location.href='login.html';
}

function limparCampos() {
    document.getElementById('validationCustom01').value = '';
    document.getElementById('validationCustom02').value = '';
    document.getElementById('validationCustom02').value = '';
    document.getElementById('floatingInputInvalid').value = '';
    document.getElementById('floatingInputInvalid').value = '';
    document.getElementById('validationCustom03').value = '';
    document.getElementById('validationCustom04').value = '';
    document.getElementById('validationCustom05').value = '';
}
