const allSlides = Array.from(document.querySelectorAll(".slider__item")); 
const slidePrev = document.querySelector('.slider__arrow_prev');
const slideNext = document.querySelector('.slider__arrow_next');

//const currentSlide = allSlides.findIndex(el => el.classList.contains('slider__item_active'))

function nextSlide() {
    let currentSlide = allSlides.findIndex(el => el.classList.contains('slider__item_active'))
    goToSlide(currentSlide + 1);
}

function previousSlide() {
    let currentSlide = allSlides.findIndex(el => el.classList.contains('slider__item_active'))
    goToSlide(currentSlide - 1);
}

function goToSlide(n) {
    let currentSlide = allSlides.findIndex(el => el.classList.contains('slider__item_active'))
    allSlides[currentSlide].classList.remove('slider__item_active')    
    currentSlide = (n + allSlides.length) % allSlides.length;       
    allSlides[currentSlide].classList.add('slider__item_active')    
}
slideNext.onclick = function() {
    nextSlide();
};
slidePrev.onclick = function() {
    previousSlide();
};