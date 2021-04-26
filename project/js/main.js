'use strict';
const products = [
    {id: 1, title: 'Notebook', price: 20000},
    {id: 2, title: 'Mouse', price: 1500},
    {id: 3, title: 'Keyboard', price: 5000},
    {id: 4, title: 'Gamepad', price: 4500},
];

const renderProduct = (title, price) => {
    return `<div class="product-item">
                <h3>${title}</h3>
                <p>${price}</p>
                <button class="by-btn">Добавить в корзину</button>
              </div>`;
}

//const renderProducts = (list) => {
    //2. Добавьте значения по умолчанию для аргументов функции. Как можно упростить или сократить запись функций?
    // По умолчанию list = products
const renderProducts = (list = products) => {
    //3 задание - запятая - разделитель по умолчанию, используем .join('') в строке ниже
    const productListHTML = list.map((item) => renderProduct(item.title, item.price)).join('');
    // console.log(productListHTML);
    document.querySelector('.products').innerHTML = productListHTML;
}

//renderProducts(products);

renderProducts();
