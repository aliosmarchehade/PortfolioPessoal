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
