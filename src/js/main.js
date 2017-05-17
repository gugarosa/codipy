// Flags-Icon JS
window.onload = function () {
    $('.all-flags .flag-icon-background').click(function (event) {
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
(function ($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function (event) {
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
    $('.navbar-collapse ul li a').click(function () {
        $('.navbar-toggle:visible').click();
    });

    // Closes the Responsive Menu on Logo Click
    $('.navbar-header a').click(function () {
        $('.navbar-collapse').collapse('hide');
    });

    // Offset for Main Navigation
    $('#main-nav').affix({
        offset: {
            top: 100
        }
    })

})(jQuery);

$(function () {

    $('#contactForm').validator().on('submit', function (e) {
        if (e.isDefaultPrevented()) {
        } else {
            e.preventDefault();
            var name = $("input#name").val();
            var email = $("input#email").val();
            var subject = $("input#subject").val();
            var msg = $("textarea#msg").val();
            $.ajax({
                url: "./php/contactUs.php",
                type: "POST",
                data: {
                    name: name,
                    email: email,
                    subject: subject,
                    msg: msg
                },
                cache: false,
                success: function () {
                    // Success message
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-success')
                        .append("<strong>Your message has been sent. </strong>");
                    $('#success > .alert-success')
                        .append('</div>');
                    //clear all fields
                    $('#contactForm').trigger("reset");
                },
                error: function () {
                    // Fail message
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-danger').append($("<strong>").text("Sorry " + name + ", it seems that my mail server is not responding. Please try again later!"));
                    $('#success > .alert-danger').append('</div>');
                    //clear all fields
                    $('#contactForm').trigger("reset");
                },
            });
        }
    })
});