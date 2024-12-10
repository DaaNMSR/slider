$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        slidesToShow: 3,
        speed: 200,
        draggable: false,
        waitForAnimate: false,
        centerMode: true,
        responsive:[
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
})
