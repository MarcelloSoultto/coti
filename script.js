// Aguarda o carregamento do DOM para iniciar o Swiper com segurança
document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper(".mySwiper", {
        loop: true, // Permite que o carrossel reinicie automaticamente

        autoplay: {
            delay: 2000, // Tempo entre slides (em milissegundos)
            disableOnInteraction: false, // Continua mesmo após interação do usuário
        },

        navigation: {
            nextEl: ".swiper-button-next", // Botão de avançar
            prevEl: ".swiper-button-prev", // Botão de voltar
        },

        pagination: {
            el: ".swiper-pagination", // Elemento de paginação (bolinhas)
            clickable: true, // Permite clicar nas bolinhas para trocar de slide
        },

        slidesPerView: 1, // Número de slides visíveis por vez
        spaceBetween: 10, // Espaço entre slides

        // Responsividade: você pode ajustar conforme necessário
        breakpoints: {
            768: {
                slidesPerView: 1,
                spaceBetween: 20,
            }
        }
    });
});
