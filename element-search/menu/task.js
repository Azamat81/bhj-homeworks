const menuLink = document.querySelectorAll('.menu__link');

for (let link of menuLink) {
    link.onclick = function (e) {
        const menuSub = link.parentElement.querySelector('.menu_sub');
        if (menuSub) {
            e.preventDefault();
            menuSub.classList.toggle('menu_active')
        }
    }
}
