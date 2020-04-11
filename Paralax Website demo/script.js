//Изменение масштаба фонового рисунка при прокрутке, JQuery


$(window).scroll(function(){
    var scrollPos = $(window).scrollTop()/30;
    $('.bgimage1').css({
        'background-size' : 100 + scrollPos + '%'
    });

});

//Попап
$('.bgimage1 .bgcontent .text').click(function(){
    $('.overlay').css({
        'display' : 'block'
    });

    $('.inner_image').css({
        'background-image' : 'url("assets/img/low-day.jpeg")'
    });
});

$('.bgimage2 .bgcontent .text').click(function(){
    $('.overlay').css({
        'display' : 'block'
    });

    $('.inner_image').css({
        'background-image' : 'url("assets/img/blur-lights.jpg")'
    });
});

$('.bgimage3 .bgcontent .text').click(function(){
    $('.overlay').css({
        'display' : 'block'
    });

    $('.inner_image').css({
        'background-image' : 'url("assets/img/highway-blur.jpeg")'
    });
});

$('.bgimage4 .bgcontent .text').click(function(){
    $('.overlay').css({
        'display' : 'block'
    });

    $('.inner_image').css({
        'background-image' : 'url("assets/img/people-walk.jpeg")'
    });
});

$('.cross_btn').click(function(){
    $('.overlay').css({
        'display': 'none'
    });
});



