;(function ($) {

    function EditTask() {

    }

    EditTask.prototype.init = function () {
        var self = this;
        this.editBtn = $('.edit-task-btn');
        this.addTaskBtn = $(".add-task");
        this.action(self);
    };
    EditTask.prototype.action = function (self) {

        this.editBtn.on("click", function (e) {
            e.preventDefault();
            var thisForm = $(this).closest('form'),
                allInput = $(thisForm).find(".taskAdd"),
                data = {};

            $(allInput).each(function () {
                if ($(this).val() != '') {
                    data[$(this).attr("name")] = $(this).val();
                }
            });
            self.ajaxLoad(data, self);
        })
    };
    EditTask.prototype.ajaxLoad = function (newTask, self) {
        $.ajax({
            method: "POST",
            url: '/edit',
            contentType: 'application/json',
            data: JSON.stringify(newTask),
            success: function (data) {
                self.addTaskBtn.trigger('click');
                console.log('success');
            },
            error: function () {
                console.log('error');
            }
        })
    };
    var editTask = new EditTask();
    editTask.init()

    ;(function () {
        $('#textarea').keyup(function () {
            var textLength = $('#textarea').val().length;
            $('.count').text(textLength);
        })

    })();
    ;(function () {
        $('#textarea').focus(function () {
            $('.count-text').css('visibility', 'visible');
            $('.hint').css('visibility', 'visible');
        });
        $('#textarea').focusout(function () {
            $('.count-text').css('visibility', 'hidden');
            $('.hint').css('visibility', 'hidden');
        })

    })();
})(jQuery);

