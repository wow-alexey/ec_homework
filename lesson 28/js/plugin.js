;(function($){

    $(".hide").click(function () {
        $('p').css({'opacity' : '0', 
                    'transition':'3s',
                    'fontSize':'0'});
        });

    $(".show").click(function () {
        $('p').css({'opacity' : '1', 
                    'transition':'3s',
                    'fontSize':'16px'});
        });


})(jQuery);


//************************************************************************************************************//
;(function( $ ){

  $.fn.myPlugin = function() {

    $(this).click(function () {
       $(this).slideUp(); 
       $(this).css({ 'opacity': '0',                    
                    'transition': 'opacity 0.4s ease-in-out'});
        });

  };
    
    $('.reset').click(function () {
        $('p').slideDown();
        $('p').css({'opacity':'1',
                    'display':'block',
                    'transition': 'opacity 0.4s ease-in-out',
        });
    })
  $('p').myPlugin();
})( jQuery ); 

//************************************************************************************************************//
;(function( $ ){

  $.fn.myPlugin = function() {
    var smth = $(this);
    $('.toggle').click(function () {
        smth.slideToggle();
        smth.fadeToggle();
    })

  };
    
   
  $('p').myPlugin();
})( jQuery ); 
