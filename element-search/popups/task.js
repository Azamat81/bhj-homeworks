let element = document.getElementById("modal_main");
    element.classList.add("modal_active");

document.querySelector('.btn').addEventListener('click', function() {
    document.getElementById('modal_main').classList.remove("modal_active");
    document.getElementById('modal_success').classList.add("modal_active");
});

let modalClose = document.querySelectorAll(".modal__close");

for (let e of modalClose){
    e.addEventListener('click',() => {
        e.closest('.modal').classList.remove("modal_active");
   })
}