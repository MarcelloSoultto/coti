var swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
        delay: 2000, // Troca de imagem a cada 2 segundos
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});