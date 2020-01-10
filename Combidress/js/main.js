$(document).ready(function(){
    var $page = $('html, body');

    $('a[href*="#"]').click(function() {
        if (pageYOffset > 28) {
            $page.animate({
                scrollTop: $($.attr(this, 'href')).offset().top - 65
            }, 400);
        } else {
            $page.animate({
                scrollTop: $($.attr(this, 'href')).offset().top - 190
            }, 400);
        }
        return false;
    });

    $('.review-comments').slick({ // подключаем slick slider
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

    var jumboTitle = document.querySelector('.jumbotron-title');
    var JumboContent = document.querySelector('.jumbotron-content-block');
    var menu = document.querySelector('.mobile-menu');
    var menuButtons = document.querySelectorAll('.mobile-menu__link');
    var menuPopup = document.querySelector('.mobile-menu__container');
    var menuCheck = document.querySelector('.mobile-menu__checkbox');

    var toScrollJumboUp = function() {
        menu.style.position = 'fixed';
        jumboTitle.style.marginTop = '.59rem';
        JumboContent.style.marginTop = '-' + (((pageYOffset - 42) * 1.3) / 100)  + 'rem';
        jumboTitle.style.opacity = 40 / pageYOffset;
    }
    var toScrollJumboDown = function() {
        jumboTitle.style.marginTop = '0';
        JumboContent.style.marginTop = '0';
        menu.style.position = 'relative';
        jumboTitle.style.opacity = '1';
    }

    window.addEventListener('scroll', function() {
        if (pageYOffset > 28 && pageYOffset < 200) {
            toScrollJumboUp();
        } else if (pageYOffset < 28) {
            toScrollJumboDown();
        }
    });

    if (pageYOffset > 28) {
        menu.style.position = 'fixed';
        jumboTitle.style.marginTop = '.59rem';
        JumboContent.style.marginTop = '-1.911rem';
    } else {
        toScrollJumboDown();
    }

    menuButtons.forEach(function(item) {
        item.addEventListener('click', function(){
            menuPopup.css = 'height: 0';
            menuPopup.css = 'padding: 0';
            menuCheck.checked = false;
        });
    });

    var buyButton = document.querySelector('.attention-button');
    var basket = document.querySelector('.basket');
    var basketClose = document.querySelector('.basket-close');
    var orderForm = document.querySelector('.form');
    var basketNextBtn = document.querySelector('.basket-button__link');
    var formClose = document.querySelector('.form-close');
    var jumboBtn = document.querySelector('.jumbotron-content-button');
    var selectSize = document.querySelector('.basket-form__label-selectsize');
    var selectColor = document.querySelector('.basket-form__label-selectcolor');
    var formSize = document.querySelector('.form-text__span-size');
    var formColor = document.querySelector('.form-text__span-color');
    var testBtn = document.querySelector('.test-button');
    var firstTest = document.querySelector('.template-first');
    var secondTest = document.querySelector('.template-second');
    var thirdTest = document.querySelector('.template-third');
    var fourthTest = document.querySelector('.template-fourth');
    var overlay = document.querySelector('.overlay');
    var discountBtn = document.querySelector('.discount-button');
    var templateFirstButton = firstTest.querySelector('.template-button__link');
    var templateSecondButton = secondTest.querySelector('.template-button__link');
    var templateThirdButton = thirdTest.querySelector('.template-button__link');
    var firstLabls = firstTest.querySelectorAll('.template-label');
    var headerBasket = document.querySelector('.header-backet');
    var lastTestButtons = fourthTest.querySelectorAll('.template-button__link');
    var closeTemplateButtons = document.querySelectorAll('.template-close');
    var htmlTag = document.getElementsByTagName('html')[0];
    var bodyTag = document.getElementsByTagName('body')[0];
    var isLarge = 0;
    var isMedium = 0;
    var isSmall = 0;

    var showBasket = function(evt) {
        evt.preventDefault();
        htmlTag.style.overflow = 'hidden';
        bodyTag.style.overflow = 'hidden';
        bodyTag.classList.add('fixed');
        fourthTest.style.display = 'none';
        overlay.style.display = 'none';
        basket.style.display = 'block';
        document.querySelector('.header-backet').classList.add('header-backet-item');
        if (evt.target.classList.contains('template-button__link')) {
            selectSize.value = evt.target.lastChild.textContent;
        }
    }

    var closeBasket = function(evt) {
        evt.preventDefault();
        htmlTag.style.overflow = 'auto';
        bodyTag.style.overflow = 'auto';
        bodyTag.classList.remove('fixed');
        basket.style.display = 'none';
    }

    var showForm = function(evt) {
        evt.preventDefault();
        htmlTag.style.overflow = 'hidden';
        bodyTag.style.overflow = 'hidden';
        bodyTag.classList.add('fixed');
        var nowSize = selectSize.value;
        var nowColor = selectColor.value;

        formSize.innerHTML = nowSize;
        formColor.innerHTML = nowColor;
        basket.style.display = 'none';
        orderForm.style.display = 'block';
    }

    var closeForm = function(evt) {
        evt.preventDefault();
        htmlTag.style.overflow = 'auto';
        bodyTag.style.overflow = 'auto';
        bodyTag.classList.remove('fixed');
        orderForm.style.display = 'none';
    }

    var showFirstTemplate = function(evt) {
        evt.preventDefault();
        htmlTag.style.overflow = 'hidden';
        bodyTag.style.overflow = 'hidden';
        firstTest.style.display = 'block';
        overlay.style.display = 'block';
    }

    var closeTemplate = function(evt) {
        evt.preventDefault();
        htmlTag.style.overflow = 'auto';
        bodyTag.style.overflow = 'auto';
        bodyTag.classList.remove('fixed');
        firstTest.style.display = 'none';
        secondTest.style.display = 'none';
        thirdTest.style.display = 'none';
        fourthTest.style.display = 'none';
        overlay.style.display = 'none';
    }

    var showSecondTemplate = function(evt) {
        evt.preventDefault();
        htmlTag.style.overflow = 'hidden';
        bodyTag.style.overflow = 'hidden';
        var templateFirstSize1 = firstTest.querySelector('#radio1');
        var templateFirstSize2 = firstTest.querySelector('#radio2');
        var templateFirstSize3 = firstTest.querySelector('#radio3');
        var templateFirstSize4 = firstTest.querySelector('#radio4');

        if (!templateFirstSize1.checked && !templateFirstSize2.checked && !templateFirstSize3.checked && !templateFirstSize4.checked) {
            return;
        }
        if (templateFirstSize1.checked) {
            isSmall += 1;
        } else if (templateFirstSize2.checked || templateFirstSize4.checked) {
            isLarge += 1;
        } else if (templateFirstSize3.checked) {
            isMedium += 1;
        }

        firstTest.style.display = 'none';
        secondTest.style.display = 'block';

        setTimeout(function() {
            $('.template-images1').slick('refresh');
        }, 1)

        $('.template-images1').slick({ // подключаем slick slider
            dots: true,
            arrows: true,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear'
        });
    }

    var showThirdTemplate = function(evt) {
        evt.preventDefault();
        htmlTag.style.overflow = 'hidden';
        bodyTag.style.overflow = 'hidden';
        var secondTemplateSmall = secondTest.querySelector('#slick-slide-control10').attributes[6];
        var secondTemplateMedium = secondTest.querySelector('#slick-slide-control11').attributes[6];
        var secondTemplateLarge = secondTest.querySelector('#slick-slide-control12').attributes[6];

        if (secondTemplateSmall) {
            isSmall += 1;
        } else if (secondTemplateMedium) {
            isMedium += 1;
        } else if (secondTemplateLarge) {
            isLarge += 1;
        }

        secondTest.style.display = 'none';
        thirdTest.style.display = 'block';

        setTimeout(function() {
            $('.template-images2').slick('refresh');
        }, 1)

        $('.template-images2').slick({ // подключаем slick slider
            dots: true,
            arrows: true,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear'
        });
    }
    
    var showFourthTemplate = function(evt) {
        evt.preventDefault();
        htmlTag.style.overflow = 'hidden';
        bodyTag.style.overflow = 'hidden';
        var thirdTemplateSmall = thirdTest.querySelector('#slick-slide-control20').attributes[6];
        var thirdTemplateMedium = thirdTest.querySelector('#slick-slide-control21').attributes[6];
        var thirdTemplateLarge = thirdTest.querySelector('#slick-slide-control22').attributes[6];
        var progressBars = fourthTest.querySelectorAll('.template-progress__full-progress');
        var mainSizeName = fourthTest.querySelector('.template-size__paragraph');
        var otherNamesSize = fourthTest.querySelectorAll('.template-progress__title-first');
        var otherProgressSizes = fourthTest.querySelectorAll('.template-progress__title-second');
        var sizesInButton = fourthTest.querySelectorAll('.template-button__link-size');

        if (thirdTemplateSmall) {
            isSmall += 1;
        } else if (thirdTemplateMedium) {
            isMedium += 1;
        } else if (thirdTemplateLarge) {
            isLarge += 1;
        }

        var setProgress = function(progress1, progress2, name1, name2) {
            mainSizeName.innerHTML = name1;
            otherNamesSize[0].innerHTML = name1;
            otherNamesSize[1].innerHTML = name2;
            otherProgressSizes[0].innerHTML = progress1 + '%';
            otherProgressSizes[1].innerHTML = progress2 + '%';
            sizesInButton[0].innerHTML = name1;
            sizesInButton[1].innerHTML = name2;

            setTimeout(function() {
                progressBars[0].style.width = progress1 + '%';
                progressBars[1].style.width = progress2 + '%';
            }, 500)
        }

        if (isSmall === 3) {
            setProgress(90, 10, 'S', 'M');
        } else if (isSmall === 2 && isMedium === 1) {
            setProgress(80, 20, 'S', 'M');
        } else if (isSmall === 1 && isMedium === 2) {
            setProgress(80, 20, 'M', 'S');
        } else if (isSmall === 1 && isLarge === 2) {
            setProgress(70, 30, 'M', 'L');
        } else if (isSmall === 2 && isLarge === 1) {
            setProgress(70, 30, 'S', 'M');
        } else if (isMedium === 3) {
            setProgress(90, 10, 'M', 'S');
        } else if (isMedium === 2 && isLarge === 1) {
            setProgress(80, 20, 'M', 'L');
        } else if (isMedium === 1 && isLarge === 2) {
            setProgress(70, 30, 'M', 'L');
        } else if (isLarge === 3) {
            setProgress(80, 20, 'L', 'M');
        } else if (isSmall === 1 && isMedium === 1 && isLarge === 1) {
            setProgress(70, 30, 'S', 'M');
        }
        
        thirdTest.style.display = 'none';
        fourthTest.style.display = 'block';
        isSmall = 0;
        isMedium = 0;
        isLarge = 0;
    }

    buyButton.addEventListener('click', showBasket);
    jumboBtn.addEventListener('click', showBasket);
    lastTestButtons[0].addEventListener('click', showBasket);
    lastTestButtons[1].addEventListener('click', showBasket);
    menuButtons[5].addEventListener('click', showBasket);
    headerBasket.addEventListener('click', showBasket)
    discountBtn.addEventListener('click', showBasket);
    basketClose.addEventListener('click', closeBasket);
    basketNextBtn.addEventListener('click', showForm);
    formClose.addEventListener('click', closeForm);
    testBtn.addEventListener('click', showFirstTemplate);
    templateFirstButton.addEventListener('click', showSecondTemplate);
    firstLabls.forEach(function(item) {
        item.addEventListener('click', function(){
            templateFirstButton.classList.add('template-button__link-active');
        });
    });
    templateSecondButton.addEventListener('click', showThirdTemplate);
    templateThirdButton.addEventListener('click', showFourthTemplate);
    closeTemplateButtons.forEach(function(item) {
        item.addEventListener('click', closeTemplate);
    });
});
