const url = 'https://students.netoservices.ru/nestjs-backend/poll';
const poll = document.getElementById('poll__title');
const btn = document.getElementById('poll__answers');


fetch(url)
  .then((response) => response.json())
  .then(function (data) {
    poll.innerHTML += `${data.data.title}`
    let btnRandom = data.data.answers
    for (let i = 0; i < btnRandom.length; i++) {
        btn.innerHTML += `<button class="poll__answer">
        ${btnRandom[i]}</button>`
    }

    const btnArr = Array.from(document.querySelectorAll('button'))
        btnArr.forEach((el) => {
            el.addEventListener('click', (e) => {
            let answBtn = e.target.closest(".poll__answer");
            if (answBtn) {
               alert('Спасибо, ваш голос засчитан!')
               window.location.reload()
            }
        })
    })
})