const btn = Array.from(document.querySelectorAll('.has-tooltip'));
const tooltipActive = document.createElement('div');

tooltipActive.className = 'tooltip';

btn.forEach((e) => {
    e.addEventListener('click', (el) => {
        el.preventDefault();
        target = el.target;

        if (target.title === tooltipActive.innerText) {
            tooltipActive.classList.toggle('tooltip_active');
            return;
        } 

        tooltipActive.innerText = target.title;
        const { bottom, left } = target.getBoundingClientRect();
        tooltipActive.style = `left: ${left}px; top: ${bottom}px`;
        target.insertAdjacentElement('afterEnd', tooltipActive);
        tooltipActive.classList.add('tooltip_active');
    })
})