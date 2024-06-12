// Rolar para cima

window.onscroll = function () {
    rolarFuncao();
}

function rolarFuncao() {
    let voltaAoTopobto = document.getElementById('backtotop');

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        voltaAoTopobto.style.opacity = '1';
    } else {
        voltaAoTopobto.style.opacity = '0';
    }
}

// Rolagem suave para o topo quando o botão é clicado

document.getElementById("backtotop").addEventListener("click", function () {
    scrollToTop(1000); // Rolar para cima em 1 segundo
});

function scrollToTop(duracao){
    let inicio = window.pageXOffset;
    let inicioTempo = performance.now();

    function scroll(){
        let curtoPeriodo = performance.now();
        let tempoDecorrido = curtoPeriodo - inicioTempo;
        window.scrollTo(0, easeInout(tempoDecorrido, inicio, -inicio, duracao));

        if (tempoDecorrido < duracao) {
            requestAnimationFrame(scroll);
        } else {
            window.scrollTo(0, 0);
        }
    }

    function easeInout(t, b, c, d) {
        t /= d / 2;
        if(t<1) return c / 2 * t * t * + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(scroll)

}

// Inicialmente ocultar o botão quando a página carregar
document.getElementById('backtotop').style.opacity = '0';