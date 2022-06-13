$(function () {
    $('.visual_slider').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
    })

    $('.slider01').slick({
        autoplay: true,
        arrows: false,
        autoplaySpeed: 4000,
        // 1000이 1초
        dots: true,
        pauseOnHover: false,
    });

    $('.slider02').slick({
        slidesToShow: 3,
    })
})