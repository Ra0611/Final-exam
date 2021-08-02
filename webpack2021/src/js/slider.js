
let $ = require('jquery')

window.jQuery = $
window.$ = window.jQuery



$(function () {
    $('.slider-group').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    centerMode: true,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
        speed: 700,
        easing: 'easy',
    })
})





$(function () {
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        // adaptiveHeight: true,
        speed: 700,
        easing: 'easy',
    })
})

$(function () {
    $('.slider-lengthy').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        // adaptiveHeight: true,
        speed: 700,
        easing: 'easy',
    })
})
