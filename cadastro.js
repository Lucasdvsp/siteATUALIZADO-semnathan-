// Array para armazenar os usuários cadastrados
let usuarios = [];

// Tente carregar os usuários existentes do localStorage
if (localStorage.getItem('usuarios')) {
    usuarios = JSON.parse(localStorage.getItem('usuarios')); // Recupera e analisa a lista existente
}

// Função para salvar usuários no localStorage
function salvarUsuarios() {
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
}

// Função para deletar um usuário
function deletarUsuario(nome) {
    // Filtra o array para remover o usuário com o nome especificado
    usuarios = usuarios.filter(usuario => usuario.nome !== nome);
    
    // Atualiza o localStorage com a nova lista de usuários
    salvarUsuarios();
    
    console.log(`Usuário ${nome} deletado com sucesso!`);
}

// Evento de cadastro de usuários
document.getElementById('entrarUser').addEventListener('click', function() {
    const nome = document.getElementById('nomeUser').value.trim(); // Remove espaços em branco
    const senha = document.getElementById('senhaUser').value;
    const senhaConfirm = document.getElementById('senhaUserConfirm').value;
    const resultado = document.getElementById('resultado');

    // Verifica se algum dos campos está vazio
    if (!nome || !senha || !senhaConfirm) {
        resultado.textContent = "Erro! Adicione todos os dados!"; // Mensagem de erro
        return; // Interrompe a execução se houver campos vazios
    }

    // Verifica se as senhas coincidem
    if (senha !== senhaConfirm) {
        resultado.textContent = "As senhas não coincidem. Tente novamente.";
    } else {
        // Adiciona o novo usuário ao array
        usuarios.push({ nome: nome, senha: senha });

        // Salva os usuários no localStorage
        salvarUsuarios();
        
        // Mensagem de sucesso
        resultado.textContent = `Cadastro realizado com sucesso para: ${nome}`; // Usa crase para interpolação
        // Limpar os campos (opcional)
        document.getElementById('formCadastro').reset();

        // Inicia a animação de fade-out
        document.body.classList.add("fade-out");

        // Redirecionar após 5 segundos
        setTimeout(function() {
            window.location.href = "login.html";
        }, 500);
        
        // Exibir usuários cadastrados (opcional, apenas para verificação)
        console.log(usuarios);
    }
});

// reiniciando o sistema de usuários cadastrados
deletarUsuario("Bruno");

deletarUsuario("Lucas");

deletarUsuario("Isaac");


// Verificar os usuários restantes
console.log(usuarios);



