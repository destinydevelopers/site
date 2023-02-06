$(window).on('scroll', function() {
    var scrollTop = $(this).scrollTop();
    var sectionTop = $('#mySection').offset().top;
    var sectionHeight = $('#mySection').outerHeight();

    if (scrollTop >= sectionTop && scrollTop < (sectionTop + sectionHeight)) {
        $('#mySection').css({
            'opacity': 1,
            'transform': 'translateY(0)'
        });
    }
});