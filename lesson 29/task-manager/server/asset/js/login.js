;(function (cash) {
    var defaults = {
        errorClass: 'wrong-input',
    };
    function Login(element, options) {
        this.config = $.extend({}, defaults, options);
        this.element = element;
        this.init();
    }
    Login.prototype.init = function () {
        var self = this;
        this.allInput = $('input[name="login"], input[name="password"]');
        this.saveMe = $('input[name="saveMe"]');

        localStorage["User's ID"] || sessionStorage["User's ID"]? window.location = '/task':this.action(self);



    };
    Login.prototype.action = function (self) {
        this.element.on('click', function (e) {
            e.preventDefault();
            var data = {};
            self.trigger = true;
            self.allInput.each(function () {
                if(!this.value){
                    $(this).addClass(self.config.errorClass);
                    self.trigger = false;
                } else{
                    $(this).removeClass(self.config.errorClass);
                    data[$(this).attr('name')] = $(this).val();
                }
            });
            console.log(data);
            self.trigger ? self.ajax(self, data) : console.log('ошибка');
        })
    };
    Login.prototype.ajax = function (self, data) {
        $.ajax({
            method: "POST",
            data: JSON.stringify(data),
            contentType: 'application/json',
            success: function (data) {
                var id = data._id;

                self.saveMe.prop('checked') ? localStorage.setItem("User's ID", id) : sessionStorage.setItem("User's ID", id);

                window.location = '/task';
            },
            error: function () {
                console.log('ошибка такого пользователя нет');
            }
        })
    };
    // function redirect() {
    //     if(localStorage["User's ID"] || sessionStorage["User's ID"]) {
    //         window.location = '/task'
    //     }
    // };
    $.fn.login = function (options) {
        new Login(this, options)
    };
})(jQuery);