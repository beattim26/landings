$(document).ready(function(){
    var $page = $('html, body');
    var allList = document.querySelectorAll('.popup');

    $('a[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 400);
        return false;
    });

    $('.for-popup-1').click(function(evt) {
        evt.preventDefault();
        $('.overlay').show();
        $('.popup-1').css('display', 'flex');
    });

    $('.close-button').click(function(evt) {
        evt.preventDefault();
        $('.overlay').hide();
        $('.popup-1').css('display', 'none');
    });

    $('.overlay').click(function() {
        $('.overlay').hide();
        $('.popup-1').css('display', 'none');
    });

    $('.for-popup-2').click(function(evt) {
        evt.preventDefault();
        $('.overlay').show();
        $('.popup-2').css('display', 'flex');
    });

    $('.close-button').click(function(evt) {
        evt.preventDefault();
        $('.overlay').hide();
        $('.popup-2').css('display', 'none');
    });

    $('.overlay').click(function() {
        $('.overlay').hide();
        $('.popup-2').css('display', 'none');
    });

    $('.for-popup-3').click(function(evt) {
        evt.preventDefault();
        $('.overlay').show();
        $('.popup-3').css('display', 'flex');
    });

    $('.close-button').click(function(evt) {
        evt.preventDefault();
        $('.overlay').hide();
        $('.popup-3').css('display', 'none');
    });

    $('.overlay').click(function() {
        $('.overlay').hide();
        $('.popup-3').css('display', 'none');
    });

    $('.for-popup-4').click(function(evt) {
        evt.preventDefault();
        $('.overlay').show();
        $('.popup-4').css('display', 'flex');
    });

    $('.close-button').click(function(evt) {
        evt.preventDefault();
        $('.overlay').hide();
        $('.popup-4').css('display', 'none');
    });

    $('.overlay').click(function() {
        $('.overlay').hide();
        $('.popup-4').css('display', 'none');
    });

    $('.for-popup-5').click(function(evt) {
        evt.preventDefault();
        $('.overlay').show();
        $('.popup-5').css('display', 'flex');
    });

    $('.close-button').click(function(evt) {
        evt.preventDefault();
        $('.overlay').hide();
        $('.popup-5').css('display', 'none');
    });

    $('.overlay').click(function() {
        $('.overlay').hide();
        $('.popup-5').css('display', 'none');
    });

    $('.for-popup-6').click(function(evt) {
        evt.preventDefault();
        $('.overlay').show();
        $('.popup-6').css('display', 'flex');
    });

    $('.close-button').click(function(evt) {
        evt.preventDefault();
        $('.overlay').hide();
        $('.popup-6').css('display', 'none');
    });

    $('.overlay').click(function() {
        $('.overlay').hide();
        $('.popup-6').css('display', 'none');
    });

    $('.for-popup-7').click(function(evt) {
        evt.preventDefault();
        $('.overlay').show();
        $('.popup-7').css('display', 'flex');
    });

    $('.close-button').click(function(evt) {
        evt.preventDefault();
        $('.overlay').hide();
        $('.popup-7').css('display', 'none');
    });

    $('.overlay').click(function() {
        $('.overlay').hide();
        $('.popup-7').css('display', 'none');
    });

    $('.for-popup-8').click(function(evt) {
        evt.preventDefault();
        $('.overlay').show();
        $('.popup-8').css('display', 'flex');
    });

    $('.close-button').click(function(evt) {
        evt.preventDefault();
        $('.overlay').hide();
        $('.popup-8').css('display', 'none');
    });

    $('.overlay').click(function() {
        $('.overlay').hide();
        $('.popup-8').css('display', 'none');
    });

    $('.for-popup-9').click(function(evt) {
        evt.preventDefault();
        $('.overlay').show();
        $('.popup-9').css('display', 'flex');
    });

    $('.close-button').click(function(evt) {
        evt.preventDefault();
        $('.overlay').hide();
        $('.popup-9').css('display', 'none');
    });

    $('.overlay').click(function() {
        $('.overlay').hide();
        $('.popup-9').css('display', 'none');
    });

    $('.for-popup-10').click(function(evt) {
        evt.preventDefault();
        $('.overlay').show();
        $('.popup-10').css('display', 'flex');
    });

    $('.close-button').click(function(evt) {
        evt.preventDefault();
        $('.overlay').hide();
        $('.popup-10').css('display', 'none');
    });

    $('.overlay').click(function() {
        $('.overlay').hide();
        $('.popup-10').css('display', 'none');
    });

    $('.for-popup-11').click(function(evt) {
        evt.preventDefault();
        $('.overlay').show();
        $('.popup-11').css('display', 'flex');
    });

    $('.close-button').click(function(evt) {
        evt.preventDefault();
        $('.overlay').hide();
        $('.popup-11').css('display', 'none');
    });

    $('.overlay').click(function() {
        $('.overlay').hide();
        $('.popup-11').css('display', 'none');
    });
});