$(document).ready(function () {
    $('.menu-toggle').click(function () {
        $('#responsive-menu').slideToggle(500)
        return false;
    })
    function hide_responsive_menu() {
        $('#responsive-menu').slideUp()
        $('#responsive-menu li i').removeClass('open')

    }
    $(window).resize(function () {
        hide_responsive_menu()
    })
    $(window).scroll(function () {
        hide_responsive_menu()
    })
    $('#responsive-menu li i').click(function () {
        $(this).toggleClass('open')
        $(this).next().slideToggle()
    })


})