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

    var logout = $('.logout');

    var status = $('.task-status');

    var addTaskBtn = $('.add-task');

    var overlay = $('.overlay');

    var editTaskBlock = $('.edit-task');

    var task = $('.task');

    ;(function(){
        if (task.hasClass('warning')){
            status.css('display', 'flex');
        } else if (task.hasClass('success')){
            status.css('display', 'flex');
        }
        if (!task.hasClass('warning' || 'success')){
            status.css('display', 'none');
        }
    })();
    
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
        if ($(parentTask).hasClass('success')) {
            $(parentTask).removeClass('success');
            $(this).text('Задача еще не выполнена');
        } else {
            $(parentTask).addClass('success');
            $(parentTask).removeClass('warning');
            $(this).text('Я выполнил задачу');
        }
    }

    function logoutFunc() {
        // for(key in sessionStorage) {
        //     delete sessionStorage[key];
        // }
        // for(key in localStorage) {
        //     delete localStorage[key];
        // }
        localStorage.removeItem("User's ID");
        sessionStorage.removeItem("User's ID");
        window.location = '/login';
    }

    function setStatus() {
        var parentTask = $(this).closest('.task');
        var statusFind = $(parentTask).find('.task-status')
        if ($(parentTask).hasClass('success')) {
            statusFind.css('display', 'flex');
        } else {
            statusFind.css('display', 'none');
        }
    }

    function openEditBlock() {
        // addTaskBtn.toggleClass('open');
        // overlay.toggleClass('open');
        // editTaskBlock.toggleClass('open');
        $([this, overlay, editTaskBlock]).toggleClass('open');
    }

    function closeThrowOverlay() {
        overlay.removeClass('open');
        addTaskBtn.removeClass('open');
        editTaskBlock.removeClass('open');
    }

    taskLink.on('click', tabTask);
    taskHeader.on('click', taskAccordion);
    toDoTask.on('click', toDoFunc);
    logout.on('click', logoutFunc);
    toDoTask.on('click', setStatus);
    addTaskBtn.on('click', openEditBlock);
    overlay.on('click', closeThrowOverlay);

})(jQuery);
