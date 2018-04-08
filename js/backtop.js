;(function ($) {

    function  BackTop(opts) {

        this.opt = $.extend({}, this.DEFAULTS , opts);

        if (this.opt.type === 'move') {
            this._move();
        } else {
            this._go();
        }
    }

    BackTop.DEFAULTS = {
        time : 800,
        type : "move"
    };

    BackTop.prototype._move = function () {

       $("html,body").animate (  {
           scrollTop: 0
       }, this.opt.time ) ;
    };

    BackTop.prototype._go = function () {
        $("html,body").scrollTop(0);
    };


    $.extend({
        backtop : function ( opts ) {
            new BackTop(opts);
        }
    })

})(jQuery);