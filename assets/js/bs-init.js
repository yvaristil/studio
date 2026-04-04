
if (window.innerWidth < 768) {
	[].slice.call(document.querySelectorAll('[data-bss-disabled-mobile]')).forEach(function (elem) {
		elem.classList.remove('animated');
		elem.removeAttribute('data-bss-hover-animate');
		elem.removeAttribute('data-aos');
		elem.removeAttribute('data-bss-parallax-bg');
		elem.removeAttribute('data-bss-scroll-zoom');
	});
}

document.addEventListener('DOMContentLoaded', function() {
	if ('AOS' in window) {
		AOS.init();
	}

	var swipers = document.querySelectorAll('[data-bss-swiper]');
	var swiperNavigations = document.querySelectorAll('.swiper-nav-standalone');

	for (var swiper of swipers) {
		let config = JSON.parse(swiper.dataset.bssSwiper);

		if (!config.navigation) {
			config.navigation = {};

			for (let swiperNavigation of swiperNavigations) {
				if (swiperNavigation.dataset.bssSwiperTarget === '#' + swiper.id) {
					config.navigation.prevEl = swiperNavigation.querySelector('.swiper-button-prev');
					config.navigation.nextEl = swiperNavigation.querySelector('.swiper-button-next');
					break;
				}
			}
		}

		let slider = new Swiper(swiper, config);
	}
}, false);