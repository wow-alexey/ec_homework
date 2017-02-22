// ;(function ($) {
//     var tabs = $('.toggle-task-list a');
//
//     var task = $('.task-content');
//
//     tabs.on('click', function (e) {
//         e.preventDefault();
//         $(this).attr("href");
//
//         if($(this).hasClass('active')){
//
//
//         } else {
//             tabs.removeClass('active');
//             $(this).addClass('active');
//         }
//     });
//
//
// })(jQuery);


;(function ($) {
    var taskLink = $('.toggle-task-list a');

    var taskContent = $('.task-content');

    var taskHeader = $('.task-header');

    var toDoTask = $('.to-do');


    function tabTask(e) {

        e.preventDefault();
        var activeBlock = $(this).attr('href');
        taskLink.removeClass('active');
        taskContent.removeClass('active');
        $(this).addClass('active');
        $(activeBlock).addClass('active');
    }

    function taskAccordion(e) {
        var parentTask = $(this).closest('.task');
        var taskContent = $(parentTask).find('.task-content-wrap');
        if ($(parentTask).hasClass('open')) {
            $(taskContent).slideUp(500, function () {
                $(parentTask).removeClass('open');
            });
        } else {
            $(taskContent).slideDown(500, function () {
                $(parentTask).addClass('open');
            });
        }
    }
    function toDoFunc(e) {
        var parentTask = $(this).closest('.task');
        if($(parentTask).hasClass('success')){
            $(parentTask).removeClass('success');
            $(this).text('Задача еще не выполнена');
        } else{
            $(parentTask).addClass('success');
            $(parentTask).removeClass('warning');
            $(this).text('Я выполнил задачу');
        }
    }

    taskLink.on('click', tabTask);
    taskHeader.on('click', taskAccordion);
    toDoTask.on('click', toDoFunc);

})(jQuery);
