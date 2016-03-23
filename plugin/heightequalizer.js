(function($){
    
    $.fn.heightEqualizer = function () {
        var tallestHeight = 0,
            $stories = this;

        $stories.each(function (i, el) {
            var elHeight = $(el).outerHeight();

            console.log(elHeight);

            if (elHeight > tallestHeight) {
                tallestHeight = elHeight;
            }
        });

        $stories.css('min-height', tallestHeight);
        return this;
    }
    
    
}(jQuery))