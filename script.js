/*
$(window).on('scroll', function() {
    var element_position = $('#scroll-mark').offset().top;
    var header = $(".header-first");
    var container =$(".flex-container");

    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_test = element_position;

    if(y_scroll_pos >= scroll_pos_test) {
        header.addClass("header-second");
        container.addClass("extra-padding");
    } else {
        header.removeClass("header-second");
        container.removeClass("extra-padding");
    }
});

function menuOpen() {
    var menu = $(".menu-closed");

    menu.style.display = "flex";
}
*/