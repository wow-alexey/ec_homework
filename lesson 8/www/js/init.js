;(function ($){
    $(window).on('load', function(){
        //init modal
        $('._order-modal-open').on('click', function (){
            $('#order').bPopup({
                closeClass: 'close',
            });
        });

        // formstyler
        $('select').styler({
            selectSmartPositioning: false
        });
        //slick nav
        $('.header-nav').slicknav({
    		prependTo: '.header .container',
    		label: '',
    	});
    })
})(jQuery)