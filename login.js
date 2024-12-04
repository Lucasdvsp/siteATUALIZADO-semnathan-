// Obtém o botão "Entrar" e os elementos de entrada do nome do usuário e senha
let botaoEntrar = document.getElementById('entrarUser');
let usuario = document.getElementById('nomeUser');
let senha = document.getElementById('senhaUser');
let botaoSemcadastro = document.getElementById('botaoSemcadastro'); // Corrigido aqui

// Tente carregar os usuários do localStorage
let usuariosCadastrados = [];
if (localStorage.getItem('usuarios')) {
    usuariosCadastrados = JSON.parse(localStorage.getItem('usuarios')); // Recupera e analisa a lista existente
}

// Adiciona um evento de clique ao botão "Sem cadastro"
botaoSemcadastro.addEventListener('click', function() {
    setTimeout(function() {
        window.location.href = "cadastro.html";
    }, 500); // 500 ms para 0.5 segundos
});

// Adiciona um evento de clique ao botão "Entrar"
botaoEntrar.addEventListener('click', function() {
    // Verifica se o usuário existe no cadastro e se a senha corresponde
    const usuarioEncontrado = usuariosCadastrados.find(u => u.nome === usuario.value && u.senha === senha.value);

    if (usuarioEncontrado) {
        // Adiciona a classe fade-out para iniciar a transição
        document.body.classList.add('fade-out');

        // Redireciona após 500 ms
        setTimeout(function() {
            window.location.href = "inicio2.html";
        }, 500); // 500 ms para 0.5 segundos
    } else {
        // Exibe uma mensagem de erro
        document.getElementById("resultado").innerText = "Usuário ou senha incorretos!";
    }
});




