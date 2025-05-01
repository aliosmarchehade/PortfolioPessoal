// Funções do menu hamburguer
function hamburg() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(0px)";
}

function cancel() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(-500px)";
}

function closeMenu() {
    cancel(); 
    setTimeout(() => {
        document.body.style.overflow = "auto"; 
    }, 300);
}

//mostrar aviso do Onixx
function mostrarAvisoOnixx() {
    const title = document.getElementById('swal-title').textContent;
    const text = document.getElementById('swal-text').textContent;
    const footer = document.getElementById('swal-footer').innerHTML;

    Swal.fire({
        icon: 'warning',
        title: title,
        text: text,
        footer: footer
    });
}


function enviarMensagem(event) {
    event.preventDefault();
    
    Swal.fire({
        title: 'Mensagem enviada!',
        text: 'Obrigado por entrar em contato. Responderei em breve!',
        icon: 'success',
        confirmButtonColor: '#6d4300'
    });
    
    event.target.reset();
}

// Função para atualizar os textos do typewriter
function updateTypewriterTexts() {
    const texts = {
        desenvolvedor: document.getElementById('text-desenvolvedor').textContent,
        estudante: document.getElementById('text-estudante').textContent,
        parametrizador: document.getElementById('text-parametrizador').textContent,
        investidor: document.getElementById('text-investidor').textContent
    };
    
    // Cria uma nova regra de keyframes com os textos traduzidos
    const style = document.createElement('style');
    style.id = 'typewriter-animation';
    style.innerHTML = `
        @keyframes words {
            0%, 25% { content: "${texts.desenvolvedor}"; }
            25%, 50% { content: "${texts.estudante}"; }
            50%, 75% { content: "${texts.parametrizador}"; }
            75%, 100% { content: "${texts.investidor}"; }
        }
    `;
    
    // Remove a animação anterior se existir
    const oldStyle = document.getElementById('typewriter-animation');
    if (oldStyle) {
        document.head.removeChild(oldStyle);
    }
    
    // Adiciona a nova animação
    document.head.appendChild(style);
}


function traduzirPagina(Linguagem) {
    document.querySelectorAll("[data-i18n]").forEach(elemento => {
        const chave = elemento.getAttribute("data-i18n");
        if (Linguagem[chave]) {
            elemento.textContent = Linguagem[chave];
        }
    });

    document.querySelectorAll("[data-i18n-alt]").forEach(elemento => {
        const chave = elemento.getAttribute("data-i18n-alt");
        if (Linguagem[chave]) {
            elemento.setAttribute("alt", Linguagem[chave]);
        }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(elemento => {
        const chave = elemento.getAttribute("data-i18n-placeholder");
        if (Linguagem[chave]) {
            elemento.setAttribute("placeholder", Linguagem[chave]);
        }
    });
    
    // Atualiza os textos do typewriter após a tradução
    updateTypewriterTexts();
}


function alterarIdioma(idioma) {
    fetch(`json/${idioma}.json`)
        .then(data => data.json())
        .then(data => {
            traduzirPagina(data);
        })
        .catch(error => {
            console.error("Erro ao carregar o arquivo de idioma:", error);
        });
}

document.addEventListener('DOMContentLoaded', function() {
   
    alterarIdioma('pt');
    
    // Configura o scroll do navbar
    var prevScrollpos = window.scrollY;
    window.onscroll = function() {
        var currentScrollpos = window.scrollY;
        if (prevScrollpos > currentScrollpos) {
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = "-150px";
        }
        prevScrollpos = currentScrollpos;
    }
});