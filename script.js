    function hamburg(){
        const navbar = document.querySelector(".dropdown")
        navbar.style.transform = "translateY(0px)"
    }
    function cancel(){
        const navbar = document.querySelector(".dropdown")
        navbar.style.transform = "translateY(-500px)"
    }

    var prevScrollpos = window.scrollY;
    window.onscroll=function () {
        var currentScrollpos = window.scrollY;
        if(prevScrollpos > currentScrollpos){
            document.getElementById("navbar").style.top = "0";
        }
        else{
            document.getElementById("navbar").style.top = "-150px";
        }
        prevScrollpos = currentScrollpos;
    }
    function mostrarAvisoOnixx() {
        Swal.fire({
            icon: 'warning',
            title: '🚧 Projeto em Construção 🚧',
            text: 'O projeto Onixx ainda está sendo desenvolvido. Em breve traremos novidades!',
            footer: '<i>Acompanhe pelo meu GitHub ou redes sociais para atualizações!</i>'
        });
    }

    function closeMenu() {
        cancel(); 
        
        setTimeout(() => {
            document.body.style.overflow = "auto"; 
        }, 300);
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

let idiomarAtual = "en";

function alterarIdioma(idioma){
    fetch(`json/${idioma}.json`)
    .then(data => data.json())
    .then(data =>{
        traduzirPagina(data);
    })
}
function traduzirPagina(Linguagem){
    document.querySelectorAll("[data-i18n]").forEach(elemento=>{
        const chave = elemento.getAttribute("data-i18n");
        if(Linguagem[chave]){
            elemento.textContent = Linguagem[chave];
        }
    })

document.querySelectorAll("[data-i18n-alt]").forEach(elemento=>{
    console.log(elemento);
    const chave = elemento.getAttribute("data-i18n-alt");
    console.log(chave);
    if(Linguagem[chave]){
        elemento.setAttribute("alt", Linguagem[chave]);
    }

})

document.querySelectorAll("[data-i18n-placeholder]").forEach(elemento=>{
    console.log(elemento);
    const chave = elemento.getAttribute("data-i18n-placeholder");
    console.log(chave);
    if(Linguagem[chave]){
        elemento.setAttribute("placeholder", Linguagem[chave]);
    }

})};