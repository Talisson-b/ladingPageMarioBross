document.addEventListener('DOMContentLoaded', function(){
    const questions = document.querySelectorAll('[data-faq-question]');
    const resposta = document.querySelectorAll('[data-elemento]')


    // seção Faq accordion
    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', abreOuFecheResposta)
    }
});



// função para abrir ou fechar as perguntas do FAQ
function abreOuFecheResposta(elemento) {
    const classe =  'faq__questions__item--is-open'
    const elementoPai = elemento.target.parentNode

    elementoPai.classList.toggle(classe)
}


