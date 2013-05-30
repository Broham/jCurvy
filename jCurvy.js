(function ($) {
    $.fn.curve = function (options) {
        var settings = {
            x0: 0,
            y0: 0,
            x1: 231,
            y1: -231,
            x2: 693,
            y2: -231,
            x3: 900,
            y3: 0
        };


        if (options) {
            $.extend(settings, options);
        }

        var BezCoords = function (x0, y0, x1, y1, x2, y2, x3, y3, t) {
            var x01 = x0 + t * (x1 - x0);
            var y01 = y0 + t * (y1 - y0);
            var x12 = x1 + t * (x2 - x1);
            var y12 = y1 + t * (y2 - y1);
            var x23 = x2 + t * (x3 - x2);
            var y23 = y2 + t * (y3 - y2);

            var x012 = x01 + t * (x12 - x01);
            var y012 = y01 + t * (y12 - y01);
            var x123 = x12 + t * (x23 - x12);
            var y123 = y12 + t * (y23 - y12);

            return { x: x012 + t * (x123 - x012),
                y: y012 + t * (y123 - y012)
            };
        }

        var max = this.length - 1;
        this.each(function (index) {
            var pos = BezCoords(settings.x0, settings.y0, settings.x1, settings.y1, settings.x2, settings.y2, settings.x3, settings.y3, index / max);
            $(this).css('position','absolute').css('top', pos.y + 'px').css('left', pos.x + 'px');
        });


    };
})(jQuery);