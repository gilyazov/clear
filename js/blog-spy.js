$('.feedback').viewportChecker({
    classToAdd: '',
    offset: 0,
    callbackFunction: function(elem, action) {
        let step = 500;
        let eq = 0;
        let length = $(elem).find('.blog__tile').length;
        console.log(length)
        const interval = setInterval(() => {
            $(elem).find('.blog__tile').eq(eq).addClass('fadeFromBottom');

            eq++;
            if(eq === length) {
                clearInterval(interval);
            }
        }, step);
    }
});