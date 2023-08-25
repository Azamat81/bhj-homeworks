const tasksInput = document.querySelector('.tasks__input');
const tasksControl = document.querySelector('.tasks__control');
const tasksList = document.querySelector('.tasks__list');

tasksControl.addEventListener('submit', (e) => {
    e.preventDefault();

    if (tasksInput.value.trim()) {
        tasksList.insertAdjacentHTML('afterBegin', `<div class="task"><div class="task__title">${tasksInput.value}</div><a href="#" class="task__remove">&times;</a></div>`);
    }

    tasksInput.value = null;
    tasksInput.focus();
})

tasksList.addEventListener('click', (ev) => {
    ev.preventDefault();
    if (ev.target.classList.contains('task__remove')) {
        ev.target.parentElement.remove();
    }
});