(function () {
	document.addEventListener('click', burgerInit)

	function burgerInit(e) {

		const burgerIcon = e.target.closest('.burger-icon')
		const burgerNavLink = e.target.closest('.nav__link')

		if (!burgerIcon && !burgerNavLink) return
		if (document.documentElement.clientWidth > 900) return

		if (!document.body.classList.contains('body--opened-menu')) {
			document.body.classList.add('body--opened-menu')
		} else {
			document.body.classList.remove('body--opened-menu')
		}

	}

	const modal = document.querySelector('.modal')
	const modalButton = document.querySelector('.about__img-button')

	modalButton.addEventListener('click', openModal)
	modal.addEventListener('click', closeModal)

	function openModal(e) {
		e.preventDefault()
		document.body.classList.toggle('body--opened-modal')
	}

	function closeModal(e) {
		e.preventDefault()

		const target = e.target

		if (target.closest('.modal__cancel') || target.classList.contains('modal')) {
			document.body.classList.remove('body--opened-modal')
		}
	}

	// tabs

	const tabControls = document.querySelector('.tabs-control')

	tabControls.addEventListener('click', toggelTab)

	function toggelTab(e) {
		const tabControls = e.target.closest('.tabs-control__link')

		if (!tabControls) return
		e.preventDefault()
		if (tabControls.classList.contains('tabs-control__link-active')) return

		const tabContendID = tabControls.getAttribute('href')
		const tabContend = document.querySelector(tabContendID)
		const activeTab = document.querySelector('.tabs-control__link-active')
		const activeControle = document.querySelector('.tab-contend--show')

		activeTab.classList.remove('tabs-control__link-active')
		tabControls.classList.add('tabs-control__link-active')

		activeControle.classList.remove('tab-contend--show')
		tabContend.classList.add('tab-contend--show')
	}

	// Аккордеон

	const accordionLists = document.querySelectorAll('.accordion-list');

	accordionLists.forEach(el => {
		el.addEventListener('click', (e) => {

			const accordionList = e.currentTarget
			const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened')
			const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')

			const accordionControl = e.target.closest('.accordion-list__control');
			if (!accordionControl) return
			e.preventDefault()
			const accordionItem = accordionControl.parentElement;
			const accordionContent = accordionControl.nextElementSibling;

			if (accordionOpenedItem && accordionOpenedItem != accordionItem) {
				accordionOpenedItem.classList.remove('accordion-list__item--opened');
				accordionOpenedContent.style.maxHeight = null
			}
			accordionItem.classList.toggle('accordion-list__item--opened');

			if (accordionItem.classList.contains('accordion-list__item--opened')) {
				accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
			} else {
				accordionContent.style.maxHeight = null;
			}
		})
	})

	// слайдер

	const swiper = new Swiper('.gallery__slider', {
		spaceBetween: 15,
		slidesPerView: 1.5,
		pagination: {
			el: '.gallery__pagination',
			type: 'fraction',
		},

		navigation: {
			nextEl: '.gallery__next',
			prevEl: '.gallery__prev',
		},

		breakpoints: {
			451: {
				slidesPerView: 2,
			},
			601: {
				slidesPerView: 3,
			},
			801: {
				spaceBetween: 32,
			},
			1101: {	
				slidesPerView: 4,
			}
		}
	});

		// слайдер-отзывы

    new Swiper('.testimonials__slider', {

			spaceBetween: 0,
			slidesPerView: 1,
			centeredSlides: true,

			navigation: {
					nextEl: '.testimonials__next',
					prevEl: '.testimonials__prev',
			},

			scrollbar: {
					el: '.swiper-scrollbar',
					draggable: true,
			},

			breakpoints: {
				901: {
					slidesPerView: 1.5,
				},
				1201: {
					slidesPerView: 2.1,
				}
			}
	});

	// Маска телефона

	const telInputs = document.querySelectorAll('input[type="tel"]')
	const im = new Inputmask('+7 (999) 999-99-99')
	im.mask(telInputs)

})()