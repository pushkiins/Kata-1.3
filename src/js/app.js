const burgerOpen = document.querySelector(".header__burger-button");
const burgerClose = document.querySelector(".hide");
const burgerMenu = document.querySelector("#aside");
const body = document.body;
const brendsMore = document.querySelector(".repair-brend__more-button");
const technicsMore = document.querySelector(".repair-technicals__more-button");
// const aboutMoreBtn = document.querySelector(".article__show-more");

const feedbackMsgBtn = document.querySelector(".aside-footer__button--message");
const feedbackPhoneBtn = document.querySelector(".aside-footer__button--phone");
const feedbackMsg = document.querySelector("#feedback");
const feedbackPhone = document.querySelector("#feedback-phone");
const modalClose = document.querySelector("#closefbmsg");
const mdalClosePhone = document.querySelector("#closefbphone");

//modal feed-back
feedbackMsgBtn.onclick = () => {
  feedbackMsg.classList.add("active");
};

feedbackPhoneBtn.onclick = () => {
  feedbackPhone.classList.add("active");
};

modalClose.onclick = () => {
  feedback.classList.remove("active");
};

mdalClosePhone.onclick = () => {
  feedbackPhone.classList.remove("active");
};


//burger
burgerOpen.onclick = () => {
  burgerMenu.classList.add("active");
};

burgerClose.onclick = () => {
  burgerMenu.classList.remove("active");
};



// togle more button
const togleMoreHandler = (button, name) => {
  let active = false;
  if (button.classList.contains("more-button__close")) {
    button.textContent = "Показать все";
    button.classList.remove("more-button__close");
    active = false;
  } else {
    button.textContent = "Скрыть";
    button.classList.add("more-button__close");
    active = true;
  }
  showMore(name, active);
};

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