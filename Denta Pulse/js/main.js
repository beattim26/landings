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

var galleryThumbs = new Swiper('.gallery-thumbs', {
	spaceBetween: 10,
	slidesPerView: 4,
	freeMode: true,
	watchSlidesVisibility: true,
	watchSlidesProgress: true,
});

var galleryTop = new Swiper('.gallery-top', {
	spaceBetween: 10,
	thumbs: {
		swiper: galleryThumbs
	}
});

var galleryThumbs = new Swiper('.slider-container', {
	spaceBetween: 5,
	slidesPerView: 1,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	breakpoints: {
		992: {
			slidesPerView: 2,
			spaceBetweenSlides: 5
		},
		1200: {
			slidesPerView: 4,
			spaceBetweenSlides: 5,
			pagination: false
		},
	}
});

// scroll
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

// count buttons

const plusButton = document.querySelector('.jumbotron-value__plus');
const minusButton = document.querySelector('.jumbotron-value__minus');
const basketCount = document.querySelector('.header-basket__span');
const valueCount = document.querySelector('.jumbotron-value__count-span');
const mainPrice = document.querySelector('.prices-new');
const oldPrice = document.querySelector('.prices-old');
const selectItem = document.querySelector('.form-select');

const addItem = (evt) => {
	evt.preventDefault();
	basketCount.textContent = '(2)';
	valueCount.textContent = '2';
	mainPrice.textContent = '€ 69,00';
	oldPrice.textContent = '€ 178,00'
	selectItem.value = 2;
};

const deleteItem = (evt) => {
	evt.preventDefault();
	basketCount.textContent = '(1)';
	valueCount.textContent = '1';
	mainPrice.textContent = '€ 49,00';
	oldPrice.textContent = '€ 89,00';
	selectItem.value = 1;
};

plusButton.addEventListener('click', addItem);
minusButton.addEventListener('click', deleteItem);
