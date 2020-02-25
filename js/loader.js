window.addEventListener('load', (event) => {
    $('.loader img').animate({
        opacity:0
    },500);

    setTimeout(function () {
        $('.loader').animate({
            opacity:0
        },200);
    },500);
    setTimeout(function () {
        $('header').addClass('fadeFromTop');

    },500);
    setTimeout(function () {
        $('.loader').hide();
    },600);
});