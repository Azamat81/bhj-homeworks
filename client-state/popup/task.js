const popup = document.getElementById('subscribe-modal');
const close = popup.querySelector('.modal__close');

window.addEventListener('load', checkCookie);
close.addEventListener('click', closePopup);

function checkCookie() {
    if (!getCookie('isClosed')) {
        setTimeout (() => {
            popup.classList.add('modal_active');
        }, 1500);
    }
}

const getCookie = (name) => {
    const value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length === 2) {
        return parts.pop().split(";").shift();
    }
}

function closePopup(e) {
    e.preventDefault();
    document.cookie = 'isClosed=true';
    popup.classList.remove('modal_active');
}