(function () {
  //Бургер

  document.addEventListener("click", burgerInit);

  function burgerInit(e) {
    const burgerIcon = e.target.closest(".burger-icon");
    const burgerNavLink = e.target.closest(".nav__link");

    if (!burgerIcon && !burgerNavLink) return;
    if (document.documentElement.clientWidth > 780) return;

    if (!document.body.classList.contains("body--opened-menu")) {
      document.body.classList.add("body--opened-menu");
    } else {
      document.body.classList.remove("body--opened-menu");
    }
  }

  //Табы

  const tabControls = document.querySelector(".tab-control");

  tabControls.addEventListener("click", toggleTab);

  function toggleTab(e) {
    e.preventDefault();

    const tabButton = e.target.closest(".tab-control__link");
    if (document.documentElement.clientWidth < 900) return;

    if (!tabButton) return;

    const tabContendID = tabButton.getAttribute("href");

    document
      .querySelector(".tab-content--active")
      .classList.remove("tab-content--active");
    document.querySelector(tabContendID).classList.add("tab-content--active");

    document
      .querySelector(".tab-control__link--active")
      .classList.remove("tab-control__link--active");
    tabButton.classList.add("tab-control__link--active");
  }

  //Аккордеон на адаптиве
  const oppAccordionItem = document.querySelectorAll(".accordion-list");

  oppAccordionItem.forEach((e) => {
    e.addEventListener("click", (e) => {
      const accordionControl = e.target.closest(".accordion-list__control");
      if (!accordionControl) return;
      if (document.documentElement.clientWidth > 900) return;

      const accordionItem = accordionControl.parentElement;
      const accordionContent = accordionControl.nextElementSibling;

      accordionItem.classList.toggle("accordion-list__item--opened");

      if (accordionItem.classList.contains("accordion-list__item--opened")) {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
      } else {
        accordionContent.style.maxHeight = null;
      }
    });
  });

  // Табы с тарифами
  const tarifTabControls = document.querySelector(".tariff__tab-control");

  tarifTabControls.addEventListener("click", tarifToggleTab);

  function tarifToggleTab(e) {
    e.preventDefault();

    const tarifTabButton = e.target.closest(".tariff__tab-link");

    if (!tarifTabButton) return;

    const tarifTabContendID = tarifTabButton.getAttribute("href");

    document
      .querySelector(".tariffs__content-tab--active")
      .classList.remove("tariffs__content-tab--active");
    document
      .querySelector(tarifTabContendID)
      .classList.add("tariffs__content-tab--active");

    document
      .querySelector(".tariff__tab-link--active")
      .classList.remove("tariff__tab-link--active");
    tarifTabButton.classList.add("tariff__tab-link--active");
  }
  //Аккордеон FAQ
  const faqAccordionItem = document.querySelectorAll(".faq__accordion-list");

  faqAccordionItem.forEach((e) => {
    e.addEventListener("click", (e) => {
      const faqAccordionControl = e.target.closest(
        ".faq__accordion-list__control"
      );
      if (!faqAccordionControl) return;

      const faqAccordionItem = faqAccordionControl.parentElement;
      const faqAccordionContent = faqAccordionControl.nextElementSibling;

      faqAccordionItem.classList.toggle("faq__accordion-list__item--opened");

      if (
        faqAccordionItem.classList.contains("faq__accordion-list__item--opened")
      ) {
        faqAccordionContent.style.maxHeight =
          faqAccordionContent.scrollHeight + "px";
      } else {
        faqAccordionContent.style.maxHeight = null;
      }
    });
  });

  // Слайдер

  const swiper = new Swiper(".swiper", {
    spaceBetween: 40,
    navigation: {
      nextEl: ".testimonials__nav-right",
      prevEl: ".testimonials__nav-left",
    },
    pagination: {
      el: ".testimonials__swiper-pagination",
      clickable: true,
      type: "bullets",
    },
    keyboard: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      781: {
        slidesPerView: 2,
      },
    },
  });

  // кнопка "Читать полностью"
  const readBtn = document.querySelectorAll(".testimonials__btn--active");
  readBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("testimonials__btn--active");
      const reviewsCard = btn.closest(".testimonials__swiper-slide");
      const reviewsText = reviewsCard.querySelector(".testimonials__text");
      reviewsText.classList.toggle("testimonials__text--open");
      const reviewsBottom = reviewsCard.querySelector(
        ".testimonials__text-bottom"
      );
      reviewsBottom.classList.toggle("testimonials__text-bottom--close");
    });
  });

  // Модалка регистрации

  document.addEventListener("click", regOpenModal);

  function regOpenModal(e) {
    const changeToSingin = e.target.closest(".change__to-singin");
    const regButton =
      e.target.closest(".nav__enterence-singup");
    const regCloseButton = e.target.closest(".reg-modal__close-btn");

    if (!regButton && !regCloseButton) return;

    if (!document.body.classList.contains("open-reg")) {
      document.body.classList.add("open-reg");
    } else {
      document.body.classList.remove("open-reg");
    }

    if(changeToSingin){
      document.body.classList.remove("open-reg");
      document.body.classList.add("open-entry");
    }
  }

  // Модалка входа

  document.addEventListener("click", entryOpenModal);

  function entryOpenModal(e) {
    const changeToSingup = e.target.closest(".change__to-singup");
    const entButton =
      e.target.closest(".nav__enterence-singin");
    const entButtonPhone =
      e.target.closest(".enterece__modal");
    const entCloseButton = e.target.closest(".in-modal__close-btn");

    if (!entButton && !entCloseButton && !entButtonPhone) return;

    if (!document.body.classList.contains("open-entry")) {
      document.body.classList.add("open-entry");
    } else {
      document.body.classList.remove("open-entry");
    }
    if(changeToSingup){
      document.body.classList.remove("open-entry");
      document.body.classList.add("open-reg");
    }
  }
})();
