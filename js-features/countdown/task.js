const timer = document.getElementById("timer");

const timeСountdown = function() {
  timer.textContent --;

  if(timer.textContent <= 0){
    clearInterval(timerId);
    setTimeout (() => {
        alert('Вы победили в конкурсе!'); // alert обернул в setTimeout т.к alert вызывается быстрее чем счётчик дойдёт до нуля.
    }, 400)
  }
}

let timerId = setInterval(timeСountdown, 1000);