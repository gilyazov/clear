$('.specs__row').viewportChecker({
    classToAdd: '',
    offset: 0,
    callbackFunction: function(elem, action) {
        let step = 400;
        let eq = 0;
        let length = $(elem).find('.specs__item').length;
        console.log(length)
        const interval = setInterval(() => {
            $(elem).find('.specs__item').eq(eq).addClass('fadeFromBottom');

            eq++;
            if(eq === length) {
                clearInterval(interval);
            }
        }, step);
    }
});