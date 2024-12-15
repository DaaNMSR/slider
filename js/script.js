$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        easing: 'ease',
        draggable: false,
        waitForAnimate: false,
        responsive: [
            {
                breakpoint: 1460,
                settings: {
                    slidesToShow:2,
                    slidesToScroll: 2
                }
            }, {
                breakpoint: 1401,
                settings: {
                    arrows: false,
                    slidesToShow:1,
                    slidesToScroll: 1
                }
            }   
        ]
        
    });
})
