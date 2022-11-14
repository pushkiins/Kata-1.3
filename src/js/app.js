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