$(document).ready(function(){
    var $page = $('html, body');

    $('a[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 400);
        return false;
        
    });

    $('.about3-slider').slick({ // подключаем slick slider
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 2000
    });

    $('.reviews-images').slick({ // подключаем slick slider
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 2000
    });

    var aboutLink = document.querySelector('.about5-button__link');
    var template1 = document.querySelector('.template1');
    var template2 = document.querySelector('.template2');
    var certificateLink = document.querySelector('.certificate-images');
    var certificateClose = document.querySelector('.template2-close');

    var closeTemplate = function(evt) {
        evt.preventDefault();
        evt.target.innerHTML = 'Нажми здесь, чтобы развернуть';
        template1.style.display = 'none';
        aboutLink.removeEventListener('click', closeTemplate);
        aboutLink.addEventListener('click', showTemplate);
    };

    var showTemplate = function(evt) {
        evt.preventDefault();
        evt.target.innerHTML = 'Нажми здесь, чтобы свернуть';
        template1.style.display = 'block';
        aboutLink.removeEventListener('click', showTemplate);
        aboutLink.addEventListener('click', closeTemplate);
    };

    var showCertificate = function(evt) {
        evt.preventDefault();
        template2.style.display = 'block';
        $('.template2-slider').slick({ // подключаем slick slider
            dots: false,
            arrows: true,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear'
        });
        certificateClose.addEventListener('click', closeCertificate);
        document.querySelector('.template2-overlay').addEventListener('click', closeCertificate);
    };

    var closeCertificate = function(evt) {
        evt.preventDefault();
        if (evt.target.className === 'template2-overlay' || evt.target.className === 'template2-close') {
            template2.style.display = 'none';
        }
    };

    aboutLink.addEventListener('click', showTemplate);
    certificateLink.addEventListener('click', showCertificate);
});