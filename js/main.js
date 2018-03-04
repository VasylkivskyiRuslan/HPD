(function($){
    $(document).ready(function(){
        $('.aboutStudent__head').fadeTo(2500, 1);
        $('.info').animate({left: 0}, 1500);
        $('.expirience').animate({right: 0}, 2000);
        $('.courses__head').fadeTo(2500, 1);
        $('.courses__type').animate({top: 0}, 1500);
    });

    $( '.socialMobile ul' ).hide();

    $( '#socialBar' ).click(function(){
        $( '.socialMobile ul' ).slideToggle( 'slow' );
    });

    $(document).on( 'click', function(e) {
        if (!$(e.target).closest( '.socialMobile' ).length) {
            $( '.socialMobile ul' ).hide();
        }
        e.stopPropagation();
    });
})(jQuery);