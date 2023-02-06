$(document).ready(function() {
    const swipeCards = $('.swipe-card');
    const leftButton = $('#left-button');
    const rightButton = $('#right-button');
    let currentCard = 0;

    swipeCards.hide();
    $(swipeCards[currentCard]).show().addClass('slideInLeft');

    $(document).on('keydown', function(e) {
        if (e.keyCode === 37) {
            $(swipeCards[currentCard]).removeClass('slideInLeft').addClass('slideOutRight');
            currentCard = currentCard > 0 ? currentCard - 1 : swipeCards.length - 1;
            $(swipeCards[currentCard]).show().addClass('slideInLeft');
        } else if (e.keyCode === 39) {
            $(swipeCards[currentCard]).removeClass('slideInLeft').addClass('slideOutLeft');
            currentCard = currentCard < swipeCards.length - 1 ? currentCard + 1 : 0;
            $(swipeCards[currentCard]).show().addClass('slideInRight');
        }
    });

    leftButton.click(function() {
        $(swipeCards[currentCard]).removeClass('slideInLeft').addClass('slideOutRight');
        currentCard = currentCard > 0 ? currentCard - 1 : swipeCards.length - 1;
        $(swipeCards[currentCard]).show().addClass('slideInLeft');
    });

    rightButton.click(function() {
        $(swipeCards[currentCard]).removeClass('slideInLeft').addClass('slideOutLeft');
        currentCard = currentCard < swipeCards.length - 1 ? currentCard + 1 : 0;
        $(swipeCards[currentCard]).show().addClass('slideInRight');
    });
});