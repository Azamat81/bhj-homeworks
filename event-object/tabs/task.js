const tabs = Array.from(document.querySelectorAll('.tab'))
const tabsCurent = Array.from(document.querySelectorAll('.tab__content'))
tabs.forEach((el, idx) => {
    el.addEventListener('click', (e) => {
        e.preventDefault();
        tabs.forEach((elem) => {
            elem.classList.remove('tab_active')
        })
        el.classList.add('tab_active')
        tabsCurent.forEach((elem) => {
            elem.classList.remove('tab__content_active')
        })
        tabsCurent[idx].classList.add('tab__content_active')
    })
})