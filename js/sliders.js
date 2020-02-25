
//index head slider
var $mainDSlider =$('.main-slider.desktop .owl-carousel');
$mainDSlider.owlCarousel({
    items: 1,
    dots: false,
    mouseDrag: false,
    touchDrag: false,
    loop:true
});
$mainDSlider.parent().find('.prev').on('click',function () {
    $('.main-slider__container .owl-item.active .main-slider__item__desc').animate({
        opacity: 0.25,
        left: 300,
    }, 330);
    setTimeout(function () {
        $mainDSlider.trigger('prev.owl.carousel', [800])
    }, 200);
});
$mainDSlider.parent().find('.next').on('click',function () {
    $('.main-slider__container .owl-item.active .main-slider__item__desc').animate({
        opacity: 0.25,
        left: -300,
    }, 330);
    setTimeout(function () {
        $mainDSlider.trigger('next.owl.carousel', [800])
    }, 200)
});

$mainDSlider.on('translated.owl.carousel',function () {
    $('.main-slider__container .owl-item .main-slider__item__desc').animate({
        opacity: 1,
        left: 0,
    }, 1);
});
//END index head slider
//main mobile slider
var $mainMobileSlider = $('.main-slider.mobile .owl-carousel');
$mainMobileSlider.owlCarousel({
    items: 1,
    dots: true,
    loop: true,
    dotsEach: 1,
    slideBy:1,
    dotsContainer:$('.main-slider.mobile .slider__nav__container')

});
$mainMobileSlider.parent().next().find('.prev').on('click', function () {
    $mainMobileSlider.trigger('prev.owl.carousel')
});
$mainMobileSlider.parent().next().find('.next').on('click', function () {
    $mainMobileSlider.trigger('next.owl.carousel')
});


//blog slider
var $blogSlider = $('.blog-slider .owl-carousel');
$blogSlider.owlCarousel({
    items:3,
    dots:true,
    responsive: {
        0: {
            dotsContainer:$('.d-lg-none [s-control="blog"] .slider__nav__container'),
            slideBy:1,
            dotsEach: 3,
            items: 1,
        },
        1200: {
            dotsContainer:$('.d-lg-block [s-control="blog"] .slider__nav__container'),
            slideBy:3,
            dotsEach: 3,
            items: 3,
        }
    }
});


$('[s-control="blog"] .prev').on('click',function () {
    $blogSlider.trigger('prev.owl.carousel');
});
$('[s-control="blog"] .next').on('click',function () {
    $blogSlider.trigger('next.owl.carousel');
});

//---------------------
//newsSlider
var $newsSlider = $('.news-slider .owl-carousel');
$newsSlider.owlCarousel({
    items:3,
    dots:true,
    dotsEach: 3,
    slideBy:3,
    responsive: {
        0: {
            items: 1,
            dotsContainer:$('.d-lg-none [s-control="news"] .slider__nav__container'),
            slideBy:1,
            dotsEach: 3,
        },
        1200: {
            dotsContainer:$('.d-lg-block [s-control="news"] .slider__nav__container'),
            slideBy:3,
            dotsEach: 3,
            items: 3,
        }
    }
});

$('[s-control="news"] .prev').on('click',function () {
    $newsSlider.trigger('prev.owl.carousel');
});
$('[s-control="news"] .next').on('click',function () {
    $newsSlider.trigger('next.owl.carousel');
});

//toggle menu of blog & news
$('[s-group="one"]').on('click',function () {
    if(!$(this).hasClass('active')){
        //переключение активного заголовка
        $(this).parent().find('.active').removeClass('active');

        $(this).addClass('active');
        var src = $(this).attr('s-src');

        if(src == 'blog'){
            $('.news-slider').removeClass('fadeIn').addClass('fadeOut');
            $('.blog-slider').removeClass('fadeOut').addClass('fadeIn');

            $('[s-control="blog"]').show();
            $('[s-control="news"]').hide();
        }else{
            $('.blog-slider').removeClass('fadeIn').addClass('fadeOut');
            $('.news-slider').removeClass('fadeOut').addClass('fadeIn');
            // $('.news-slider').show();
            // $('.blog-slider').hide();
            $('[s-control="news"]').show();
            $('[s-control="blog"]').hide();
        }
    }else{
        return false
    }
})


if (!$('body').hasClass("is-admin")) {
    //partnersSlider
    var $partnersSlider = $('.partners-slider .owl-carousel');
    $partnersSlider.owlCarousel({
        dots:true,
        margin:60,
        items:8,
        loop:true,
        dotsEach:3,
        slideBy:3,
        dotsContainer:$('[s-control="partners"] .slider__nav__container'),

        responsive: {
            0: {
                items: 3,
                margin: 30
            },
            1200: {
                items: 8,
            }
        }
    });

    $('[s-control="partners"] .prev').on('click',function () {
        $partnersSlider.trigger('prev.owl.carousel');
    });
    $('[s-control="partners"] .next').on('click',function () {
        $partnersSlider.trigger('next.owl.carousel');
    });
}