document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector(".carousel-inner");
    let carouselWidth = carousel.offsetWidth;
    const card = document.querySelector(".carousel-item");
    let cardWidth = card.clientWidth;
    let scrollPosition = 0;
    console.log(carousel, carouselWidth, card, cardWidth);

    document.querySelector(".carousel-control-next").addEventListener("click", function() {
            if (scrollPosition < carouselWidth - (cardWidth * 4)) {
                scrollPosition = scrollPosition + cardWidth;
                carousel.animate({scrollLeft: scrollPosition}, 600);
            }
        }
    );

    document.querySelector(".carousel-control-prev").addEventListener("click", function() {
        if (scrollPosition > 0) {
            scrollPosition = scrollPosition - cardWidth;
            carousel.animate({scrollLeft: scrollPosition}, 600);

        }
    }
);
})



