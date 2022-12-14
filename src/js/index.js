const burgerOpen = document.querySelector(".header__burger-button");
const burgerClose = document.querySelector(".hide");
const burgerMenu = document.querySelector("#aside");
const body = document.body;

const brendsMore = document.querySelector(".repair-brend__more-button");
const technicsMore = document.querySelector(".repair-technicals__more-button");         

const feedbackMsgBtn = document.querySelector(".aside-footer__button--message");
const feedbackPhoneBtn = document.querySelector(".aside-footer__button--phone");
const feedbackMsg = document.querySelector("#feedback");
const feedbackPhone = document.querySelector("#feedback-phone");
const modalClose = document.querySelector("#closefbmsg");
const mdalClosePhone = document.querySelector("#closefbphone");


const showMore = document.querySelector(".article__show-more");

showMore.addEventListener('click', () => {
  showMore.classList.toggle("more-button__close");
  moreTextHandler();
})

const moreTextHandler = () => {
  const textContainer = document.querySelector("#about-text");

  if (textContainer.textContent.length < 1) {
    textContainer.textContent = `Lorem ipsum dolor sit amet,
      consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna
      aliqua. Est sit amet facilisis magna etiam
      tempor orci eu lobortis. Vitae sapien
      pellentesque habitant morbi tristique
      senectus et netus. Dignissim diam quis enim lobortis scelerisque fermentum dui.
      Feugiat sed lectus vestibulum mattis. Hac habitasse
      platea dictumst quisque sagittis purus. Eget lorem dolor sed`;
      showMore.textContent = "Скрыть";
  } else {
    textContainer.textContent = "";
    showMore.textContent = "Читать далее";
  }
};



//modal feed-back

feedbackMsgBtn.addEventListener('click',() => {
  feedbackMsg.classList.add("feedback-active")
});

feedbackPhoneBtn.addEventListener('click', () => {
  feedbackPhone.classList.add("phone-active");
})

modalClose.addEventListener('click',() => {
  feedback.classList.remove("feedback-active");
})

mdalClosePhone.addEventListener('click',() => {
  feedbackPhone.classList.remove("phone-active");
})

body.addEventListener('click', ({ target }) => {
  if (
      !target.closest(".modal__container") &&
      feedbackPhone.classList.contains("phone-active") &&
      !target.closest(".aside-footer__button--phone")
  ) {
    feedbackPhone.classList.remove("phone-active");
  }
})




body.addEventListener('click', ({ target }) => {
  if (
      !target.closest(".modal__container") &&
      feedback.classList.contains("feedback-active") &&
      !target.closest(".aside-footer__button--message")
  ) {
    feedback.classList.remove("feedback-active");
  }
})



//burger

burgerOpen.addEventListener('click',() => {
  burgerMenu.classList.add("active");
})

burgerClose.addEventListener('click',() => {
  burgerMenu.classList.remove("active");
})



const showAll = document.querySelectorAll('.swiper-button');


showAll.forEach((item) => {
    item.addEventListener('click', () => {
        showAllButton(item.parentNode, item)
    })
})
function showAllButton(value, item) {
    const cardItems = value.querySelectorAll('.swiper-wrapper')
    cardItems.forEach((elem) => {
        elem.classList.toggle('show')
        item.classList.toggle('button-clicked')
        if (elem.classList.contains('show')) {
            item.textContent = 'Скрыть'
        } else {
            item.textContent = 'Показать все'
        }
    })
}


let asideLink = document.querySelectorAll('.aside-nav__link')

asideLink.forEach(button => {
  button.addEventListener('click', function () {
    asideLink.forEach(btn => {btn.classList.remove('active')});
    button.classList.add('active');
    
  })
})