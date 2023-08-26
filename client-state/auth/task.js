let singbtn = document.getElementById('signin__btn');
let userId = document.getElementById('user_id');
let welcom = document.getElementById('welcome');
let signinForm = document.getElementById('signin__form');
let singIn = document.getElementById('signin');

if (localStorage.userId) {
    singIn.classList.remove('signin_active');
    welcom.classList.add('welcome_active');
    userId.innerText = localStorage.userId;
  } 

    signinForm.addEventListener ('submit', (el) => {
    el.preventDefault();
    let xhr = new XMLHttpRequest();
    let formData = new FormData(signinForm);
    xhr.addEventListener ('load', () => {
        let xhrAnswer = xhr.response;
        let id = xhrAnswer.user_id;
        if (xhrAnswer.success === false) {
            alert('Неверный логин/пароль');
        } else {
            localStorage.setItem('user_id', id);
            singIn.classList.remove('signin_active');
            welcom.classList.add('welcome_active');
            userId.innerText = localStorage.getItem('user_id');
        }
    })
    xhr.responseType = 'json';
    xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/auth");
    xhr.send(formData);
})