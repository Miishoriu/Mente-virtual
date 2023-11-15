function realizarLogin() {
    var usuarioLogin = document.getElementById('loginUsuario').value;
    var senhaLogin = document.getElementById('loginSenha').value;

    var usuariosSalvos = localStorage.getItem('usuarios');
    var loginInfoSalvo = localStorage.getItem('loginInfo');

    if (usuariosSalvos && loginInfoSalvo) {
        /* Converte dados em objetos */
        var usuarios = JSON.parse(usuariosSalvos);
        var loginInfo = JSON.parse(loginInfoSalvo);

        // verifica se as informações estão corretas
        var usuarioEncontrado = usuarios.find(u => u.usuario === usuarioLogin && u.senha === senhaLogin);

        if (usuarioEncontrado) {
            alert('Parabuéins Login bem-sucedido!');
            window.location.href = 'index.html';
        } else {
            alert('Algo de errado não está certo, tente novamente.');
        }
    } else {
        alert('Nenhum usuário cadastrado, cadastre-se primeiro.');
    }
}