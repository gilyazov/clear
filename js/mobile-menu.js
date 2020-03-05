//mobile menu scripts


console.log('Mobile menu scripts')

function openMobileMenu(){
    $('body').addClass('mobile-menu-opened');
    $('.mobile-menu').css('display','block');
    setTimeout(function () {
        $('.mobile-menu').addClass('active');
    },150);
}

function closeMobileMenu(){
    $('body').removeClass('mobile-menu-opened');
    $('.mobile-menu').removeClass('active');
    setTimeout(function () {
        $('.mobile-menu').css('display','none');
    },150);
}

$('.burger.d-lg-none').on('click',openMobileMenu);
$('.mobile-menu .close-block a').on('click',closeMobileMenu)
$('.mobile-menu .bg').on('click',closeMobileMenu)