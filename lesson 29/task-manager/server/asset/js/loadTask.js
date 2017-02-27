;(function ($) {
    function LoadTask() {

    }

    LoadTask.prototype.init = function () {
        var self = this;
        this.ajaxLoad();
    };
    LoadTask.prototype.ajaxLoad = function () {
        $.ajax({
            method: 'POST',
            url: '/alltasks',
            success: function (data) {
                // console.log(data);
            },
            error: function () {
                console.log('error');
            }
        })
    };
    var loadTask = new LoadTask();
    loadTask.init();
})(jQuery);