;(function($){
    // $.fn.myPlagin = function () {
    //    this.css({
    //         'opacity': '0.3',
    //         'transition': '2s'
    //    }); 
    //    return this;
    // }

    // $('p').myPlagin()
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
(function( $ ){

  $.fn.myPlugin = function() {
    this.click(function(){
        $(this).css({'opacity' : '1', 
                    'transition':'3s',
                    'fontSize':'16px'});
    });
  };
  $('p').myPlugin();
})( jQuery ); //тут я хотел чтобы при клике на параграф, он исчезал - не иогу понять где ошибка