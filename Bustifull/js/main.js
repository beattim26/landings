const navButton = document.querySelector('.header-button');
const navMenu = document.querySelector('.header-menu');

const showMenu = () => {
    if (navMenu.classList.contains('d-none')) {
        navMenu.classList.remove('d-none');
    } else {
        navMenu.classList.add('d-none');
    }
};

navButton.addEventListener('click', showMenu);

const questionBlocks = document.querySelectorAll('.question-block');
const questionButton = document.querySelector('.question-button');
const answerBlock = document.querySelector('.question-answer');
const questionSection = document.querySelector('.question');

questionButton.addEventListener('click', function (evt) {
	evt.preventDefault();
	questionButton.textContent = 'Купить сейчас';
	questionButton.href = '#main-form';
	ankorLinks();
	answerBlock.classList.remove('d-none');
	questionSection.style.backgroundImage = `url('./img/question2.png')`;
});

if (window.NodeList && !NodeList.prototype.forEach) {
	NodeList.prototype.forEach = Array.prototype.forEach;
}

questionBlocks.forEach(function (item) {
	const questonAnswers = item.querySelectorAll('.question-answers__span');
	questonAnswers.forEach(function (item2) {
		item2.addEventListener('click', function (evt) {
			evt.preventDefault();
			questonAnswers[0].classList.remove('question-active');
			questonAnswers[1].classList.remove('question-active');
			item2.classList.add('question-active');
		});
	});
});

var galleryThumbs = new Swiper('.slider-container', {
	spaceBetween: 5,
	slidesPerView: 1,
	autoHeight: true,
	navigation: {
		nextEl: '.slider-next',
		prevEl: '.slider-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	breakpoints: {
		992: {
			slidesPerView: 2,
			spaceBetween: 20,
			autoHeight: false
		},
	}
});

// scroll
const ankorLinks = () => {
var linkNav = document.querySelectorAll('[href^="#"]'),
    V = .15;
for (var i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', function(e) { 
        e.preventDefault(); 
        var w = window.pageYOffset, 
            hash = this.href.replace(/[^#]*(.*)/, '$1');
        t = document.querySelector(hash).getBoundingClientRect().top,
            start = null;
        requestAnimationFrame(step); 
        function step(time) {
            if (start === null) start = time;
            var progress = time - start,
                r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
            window.scrollTo(0,r);
            if (r != w + t) {
                requestAnimationFrame(step)
            } else {
                location.hash = hash
            }
        }
    }, false);
}
}

ankorLinks();