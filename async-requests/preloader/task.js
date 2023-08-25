const item = document.getElementById('items');
const img = document.querySelector('.loader');
const url = 'https://students.netoservices.ru/nestjs-backend/slow-get-courses';

  fetch(url)
    .then((data) => data.text())
    .then(function (data) {
        img.classList.remove('loader_active')
        let valutes = JSON.parse(data).response.Valute
        for (let key in valutes) {
            item.innerHTML += `<div class="item">
            <div class="item__code">${valutes[key].CharCode}
            </div><div class="item__value">${valutes[key].Value}
            </div><div class="item__currency">руб.</div>`
        }
  })