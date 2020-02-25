// slider
$('.animated-tiles.owl-carousel').viewportChecker({
    classToAdd: '',
    offset: parseInt($(this).attr('data-spy-offset')) || 0,
    callbackFunction: function(elem, action) {
        let step = 500;
        let eq = 0;
        let eq2 = 0;
        let length = $(elem).find('.owl-item').length;

        const interval = setInterval(() => {
            $(elem).find('.owl-item.active').eq(eq).addClass('fadeFromBottom');
            eq++;
            if(eq === 2){
                step=0;
            }
            if(eq === 3) {
                clearInterval(interval);
                $(elem).find('.owl-item').addClass('fadeFromBottom');
            }
        }, step);

    }
});

// Картинки с блоками
$('[data-spy="square"]').viewportChecker({
    classToAdd: 'square',
    offset: 0,
});


// Офферы
$('.offers .section__title').viewportChecker({
    classToAdd: 'fadeIn',
    offset: 150,
    callbackFunction: function(elem, action) {
        let step = 200;
        let eq = 0;

        const interval = setInterval(() => {
            $('.offers .offers__col').eq(eq).addClass('fadeIn');

            eq++;

            if(eq == 4) {
                clearInterval(interval);
            }
        }, step)

        setTimeout(() => {
            $('.offers .offers__col').css('opacity','1');
        }, step * 4)

    }
});