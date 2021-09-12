(function($){
    "use-strict"

    jQuery(document).ready(function(){

        $(document).on('click', '#nav-control', function() {
            $('main').toggleClass('mini-nav');
            console.log($('#nav-control').html());
        });

        //active navigation class
        var current = location.pathname;
        $('.navigation-menu ul li a').each(function () {
            var $this = $(this);
             if (current == '/' || current == '/admin' || current == '/admin/') {
                 $('.index-link').closest('li').addClass('active');
                 return false;
             }else if ($this.attr('href').indexOf(current) !== -1) {
                $this.closest('.treeview').addClass('nav-open');
                $this.closest('.treeview-menu').show();
                $this.closest('li').addClass('active');
            }
        });
        
    });

    jQuery(window).on('load', function() {
        
    });



}(jQuery))
