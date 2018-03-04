(function($){
    $( '.social__mobile ul' ).hide();

    $( '#socialBar' ).click(function(){
        $( '.social__mobile ul' ).slideToggle( 'slow' );
    });

    $(document).on( 'click', function(e) {
        if (!$(e.target).closest( '.social__mobile' ).length) {
            $( '.social__mobile ul' ).hide();
        }
        e.stopPropagation();
    });
})(jQuery);