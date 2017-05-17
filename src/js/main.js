// Flags-Icon JS
window.onload = function () {
  $('.all-flags .flag-icon-background').click(function(event){
    var flag = $(event.currentTarget).attr('title');
    var w = 640;
    var h = 480;
    var left = (screen.width / 2) - (w / 2);
    var top = (screen.height / 2) - (h / 2);

    if (flag) {
      window.open('flags/4x3/' + flag + '.svg', 'flag-4x3', 'width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
    }
  });
}

// Create language switcher instance
var lang = new Lang();
lang.dynamic('pt', 'js/langpack/pt.json');
lang.init({
    defaultLang: 'en'
});

// Scrolling function
(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){ 
            $('.navbar-toggle:visible').click();
    });

    // Closes the Responsive Menu on Logo Click
     $('.navbar-header a').click(function(){ 
            $('.navbar-collapse').collapse('hide');
    });

    // Offset for Main Navigation
    $('#main-nav').affix({
        offset: {
            top: 100
        }
    })

})(jQuery);