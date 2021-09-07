(function($){
    "use-strict"

    jQuery(document).ready(function(){

        $(document).on('click', '#nav-control', function() {
            $('main').toggleClass('mini-nav');
        })
        
    });

    jQuery(window).on('load', function() {
        
    });



}(jQuery))
