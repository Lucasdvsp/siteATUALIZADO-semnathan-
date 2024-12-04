const botoes = document.getElementsByClassName("thenewworldorder");
for (let i = 0; i < botoes.length; i++) {
    botoes[i].addEventListener("mouseover", function () {
        botoes[i].style.backgroundColor = "black";  // Muda a cor de fundo para preto
        botoes[i].style.color = "white";  // Muda a cor do texto para branco
    });
    
    botoes[i].addEventListener("mouseout", function () {
        botoes[i].style.backgroundColor = "";  // Restaura a cor de fundo original
        botoes[i].style.color = "";  // Restaura a cor do texto original
    });
}
const botoes2 = document.getElementsByClassName("fa-solid");
for (let i = 0; i < botoes2.length; i++) {
    botoes2[i].addEventListener("mouseover", function () {
        botoes2[i].style.backgroundColor = "";  // Muda a cor de fundo para preto
        botoes2[i].style.color = "rgb(0, 255, 255)";  // Muda a cor do texto para branco
    });
    
    botoes2[i].addEventListener("mouseout", function () {
        botoes2[i].style.color = "white";  // Restaura a cor do texto original
    });
}
const ini = document.getElementById("stat");
ini.addEventListener("click", function() {
    document.body.classList.add('fade-out');
    // Aguarda a transição terminar antes de redirecionar
    setTimeout(function() {
        window.location.href = 'inicio2.html'; // Redireciona para a próxima página
    }, 250); // 500ms para coincidir com a duração da transição
});
const info = document.getElementById("info");
info.addEventListener("click", function() {
    document.body.classList.add('fade-out');
    // Aguarda a transição terminar antes de redirecionar
    setTimeout(function() {
        window.location.href = 'tela2.html'; // Redireciona para a próxima página
    }, 250); // 500ms para coincidir com a duração da transição
});
const motives = document.getElementById("motives");
motives.addEventListener("click", function() {
    document.body.classList.add('fade-out');
    // Aguarda a transição terminar antes de redirecionar
    setTimeout(function() {
        window.location.href = 'tela3.html'; // Redireciona para a próxima página
    }, 250); // 500ms para coincidir com a duração da transição
});
const simpsons = document.getElementById("simpsons");
simpsons.addEventListener("click", function() {
    document.body.classList.add('fade-out');
    // Aguarda a transição terminar antes de redirecionar
    setTimeout(function() {
        window.location.href = 'tela4.html'; // Redireciona para a próxima página
    }, 250); // 500ms para coincidir com a duração da transição
});
const help = document.getElementById("help");
help.addEventListener("click", function() {
    document.body.classList.add('fade-out');
    // Aguarda a transição terminar antes de redirecionar
    setTimeout(function() {
        window.location.href = 'tela5.html'; // Redireciona para a próxima página
    }, 250); // 500ms para coincidir com a duração da transição
});
const game = document.getElementById("game");
game.addEventListener("click", function() {
    document.body.classList.add('fade-out');
    // Aguarda a transição terminar antes de redirecionar
    setTimeout(function() {
        window.location.href = 'tela7.html'; // Redireciona para a próxima página
    }, 250); // 500ms para coincidir com a duração da transição
});
const exti = document.getElementsByClassName("fa-right-from-bracket");
for (let i = 0; i < exti.length; i++) {
    exti[i].addEventListener("click", function() {
    document.body.classList.add('fade-out');
    // Aguarda a transição terminar antes de redirecionar
    setTimeout(function() {
        window.location.href = 'login.html'; // Redireciona para a próxima página
    }, 250);  // Muda a cor do texto para branco
    });
}
const thistookwaytoolong = document.getElementById("thistookwaytoolong");
thistookwaytoolong.addEventListener("click", function() {
    document.body.classList.add('fade-out');
    // Aguarda a transição terminar antes de redirecionar
    setTimeout(function() {
        window.location.href = 'tela6.html'; // Redireciona para a próxima página
    }, 250); // 500ms para coincidir com a duração da transição
});
const infoIcon = document.querySelector(".fa-solid.fa-circle-info");

if (infoIcon) {
    infoIcon.addEventListener("click", function() {
        let currentPage = window.location.pathname; // Obtém o caminho da URL
        let message = "";

        // Verifique o caminho da URL e defina a mensagem da descrição
        if (currentPage.includes("inicio2.html")) {
            message = "Página de introdução ao projeto.";
        } else if (currentPage.includes("tela2.html")) {
            message = "Essa tela fala sobre os criadores desse site.";
        } else if (currentPage.includes("tela3.html")) {
            message = "Essa tela fala sobre as causas desse problema.";
        } else if (currentPage.includes("tela4.html")) {
            message = "Essa tela fala sobre os sintomas causados por cyber-dependencia";
        } else if (currentPage.includes("tela5.html")) {
            message = "Essa tela fala sobre onde conseguir ajuda para esse problema.";
        } else if (currentPage.includes("tela6.html")) {
            message = "Essa tela têm um link para baixar um artigo ciêntifico sobre o assunto.";
        } else if (currentPage.includes("tela7.html")) {
            message = "Essa tela têm um link para baixar uma alicação de computador sobre o assunto";
        } else {
            message = "Informações não disponíveis para esta página.";
        }

        // Exibe a descrição
        alert(message);
    });
}
