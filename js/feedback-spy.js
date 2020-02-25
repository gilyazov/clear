$('.feedback').viewportChecker({
    classToAdd: '',
    offset: 0,
    callbackFunction: function(elem, action) {
        let step = 400;
        let eq = 0;
        let length = $(elem).find('.feedback__item').length;
        console.log(length)
        const interval = setInterval(() => {
            $(elem).find('.feedback__item').eq(eq).addClass('fadeFromBottom');

            eq++;
            if(eq === length) {
                clearInterval(interval);
            }
        }, step);
    }
});