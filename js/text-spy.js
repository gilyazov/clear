$('.animated-tiles.owl-carousel').viewportChecker({
    classToAdd: '',
    offset: -150,
    callbackFunction: function (elem, action) {
        let step = 500;
        let eq = 0;
        let length = $(elem).find('.owl-item').length;

        const interval = setInterval(() => {
            $(elem).find('.owl-item.active').eq(eq).addClass('fadeFromBottom');
            eq++;
            if (eq === 3) {
                step = 0;
            }
            if (eq === 4) {
                clearInterval(interval);
                $(elem).find('.owl-item').addClass('fadeFromBottom');
            }
        }, step);
    }
});

$('[data-spy="square"]').viewportChecker({
    classToAdd: 'square',
    offset: -200,
});