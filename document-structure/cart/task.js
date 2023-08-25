const products = document.querySelectorAll('.product')
const productsCard = document.querySelector('.cart__products')

products.forEach((elem) => {
    let prodId = elem.dataset.id;
    const valNumb = elem.querySelector('.product__quantity-value');
    const dec = elem.querySelector('.product__quantity-control_dec');
    const inc = elem.querySelector('.product__quantity-control_inc');
    const img = elem.querySelector('.product__image').src;
    const addProduct = elem.querySelector('.product__add');

    dec.addEventListener('click', () => {
        if (+valNumb.innerHTML > 1) {
            valNumb.innerHTML = valNumb.innerHTML - 1;
        }
    })

    inc.addEventListener('click', () => {
            valNumb.innerHTML = +valNumb.innerHTML + 1;
        })

    addProduct.addEventListener('click', () => {
        const prod = getCard(prodId);
        if (prod) {
            prod.querySelector('.cart__product-count').innerHTML = +prod.querySelector('.cart__product-count').innerHTML + +valNumb.innerHTML; 
        } else {
            productsCard.innerHTML += cartProdHTML(prodId, img, valNumb.innerHTML);
        }
    })  
})

const cartProdHTML = (id, img, count) => (`<div class="cart__product" data-id="${id}">
         <img class="cart__product-image" src="${img}">
         <div class="cart__product-count">${count}</div>
     </div>`)

function getCard(i){
    return document.querySelector(`.cart__product[data-id="${i}"`);
}