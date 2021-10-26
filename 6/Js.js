$(document).ready(function(){
    let $slider = $(".slider");
    $slider.slick({
        dots:true,
        infinite: true,
        arrows:true,
        slidesToShow:4,
        slidesToScroll:4,
        responsive:[
            {
                breakpoint: 785,
                settings: {
                    slidesToShow:2,
                    slidesToScroll:2
                }
            }
        ]
    });
    $slider.on('afterChange', function(event, slick, currentSlide){
        if(window.innerWidth > 784){
            $("#page").text(currentSlide/4 + 1);}
        else {$("#page").text(currentSlide/2 + 1); }
    });

    let p2 = document.getElementById("page2");
    if($(window).width() > 784){p2.innerHTML = "4";}
    else {p2.innerHTML = "8";}
});