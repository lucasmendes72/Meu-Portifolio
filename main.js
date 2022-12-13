const botaoAbreCertificado = document.querySelector('.abre-certificacoes');
const botaoFechaCertificado = document.querySelector('.fecha-div');
var divCertificados = document.querySelector('.certificados');

botaoAbreCertificado.addEventListener('click', apareceJanela);

var meuMain = document.getElementsByTagName('main');

function apareceJanela() {
    divCertificados.style.display = "block"
    meuMain[0].classList.add("teste");
}

botaoFechaCertificado.addEventListener('click', fechaJanela)

function fechaJanela(){
    
}
