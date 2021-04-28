class ProductList {
    #goods;
    #allProducts;
    #prop;

    constructor(container = '.products') {
        this.container = container;
        this.#goods = [];
        this.#allProducts = [];

        this.#fetchGoods();
        this.addCartQuantity();
        this.countTotalPrice();
        this.#render();
    }

    get property() {
        return this.#prop;
    }

    set property(value) {
        this.#prop = value;
    }

    #fetchGoods() {
        this.#goods = [
            {id: 1, title: 'Notebook', price: 20000},
            {id: 2, title: 'Mouse', price: 1500},
            {id: 3, title: 'Keyboard', price: 5000},
            {id: 4, title: 'Gamepad', price: 4500},
        ];
    }

    #render() {
        const block = document.querySelector(this.container);

        for (const good of this.#goods) {
            const productObject = new ProductItem(good);
            // console.log(productObject);
            this.#allProducts.push(productObject);
            block.insertAdjacentHTML('afterbegin', productObject.render());
        }
    }

    //Добавляю метод для изменения количества товаров, пока всем 1 автоматически, потом можно прописать при нажатии на кнопку добавления товара в корзину изменения
    addCartQuantity() {
        for (const good of this.#goods) {
            good.quantity = 1;
        }
    }

    countTotalPrice() {
        return this.#goods.reduce((totalPrice, cartItem) => totalPrice + cartItem.price * cartItem.quantity, 0);
    }
}

class ProductItem {
    constructor(product, img = 'https://via.placeholder.com/200x150') {
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.img = img;
    }

    render() {
        return `<div class="product-item" data-id="${this.id}">
                      <img src="${this.img}" alt="Some img">
                      <div class="desc">
                          <h3>${this.title}</h3>
                          <p>${this.price} \u20bd</p>
                          <button class="buy-btn">Купить</button>
                      </div>
                  </div>`;
    }
}

class Cart {
    // метод подсчета суммы всех товаров в корзине, который пока что в классе ProductList
    // метод очистки всей корзины
    // метод для подсчета стоимости доставки по выбранным параметрам (например, курьер или пвз)
    // метод подсчета итоговой стоимости к оплате
}

class CartItem {
    // метод удаления товара из корзины
    // метод для изменения количества товаров
}


// Normal
// class ProductList {
//     constructor(container = '.products') {
//         this.container = container;
//         this._goods = [];
//         this._allProducts = [];
//
//         this._fetchGoods();
//         this._render();
//     }
//
//     _fetchGoods() {
//         this._goods = [
//             {id: 1, title: 'Notebook', price: 20000},
//             {id: 2, title: 'Mouse', price: 1500},
//             {id: 3, title: 'Keyboard', price: 5000},
//             {id: 4, title: 'Gamepad', price: 4500},
//         ];
//     }
//
//     _render() {
//         const block = document.querySelector(this.container);
//
//         for (const good of this._goods) {
//             const productObject = new ProductItem(good);
//             // console.log(productObject);
//             this._allProducts.push(productObject);
//             block.insertAdjacentHTML('afterbegin', productObject.render());
//         }
//     }
// }
//
// class ProductItem {
//     constructor(product, img = 'https://via.placeholder.com/200x150') {
//         this.title = product.title;
//         this.price = product.price;
//         this.id = product.id;
//         this.img = img;
//     }
//
//     render() {
//         return `<div class="product-item" data-id="${this.id}">
//                       <img src="${this.img}" alt="Some img">
//                       <div class="desc">
//                           <h3>${this.title}</h3>
//                           <p>${this.price} \u20bd</p>
//                           <button class="buy-btn">Купить</button>
//                       </div>
//                   </div>`;
//     }
// }


// Stock
// class ProductList {
//     constructor(container = '.products') {
//         this.container = container;
//         this.goods = [];
//         this.allProducts = [];
//
//         this.fetchGoods();
//         this.render();
//     }
//
//     fetchGoods() {
//         this.goods = [
//             {id: 1, title: 'Notebook', price: 20000},
//             {id: 2, title: 'Mouse', price: 1500},
//             {id: 3, title: 'Keyboard', price: 5000},
//             {id: 4, title: 'Gamepad', price: 4500},
//         ];
//     }
//
//     render() {
//         const block = document.querySelector(this.container);
//
//         for (const good of this.goods) {
//             const productObject = new ProductItem(good);
//             // console.log(productObject);
//             this.allProducts.push(productObject);
//             block.insertAdjacentHTML('afterbegin', productObject.render());
//         }
//     }
// }
//
// class ProductItem {
//     constructor(product, img = 'https://via.placeholder.com/200x150') {
//         this.title = product.title;
//         this.price = product.price;
//         this.id = product.id;
//         this.img = img;
//     }
//
//     render() {
//         return `<div class="product-item" data-id="${this.id}">
//                       <img src="${this.img}" alt="Some img">
//                       <div class="desc">
//                           <h3>${this.title}</h3>
//                           <p>${this.price} \u20bd</p>
//                           <button class="buy-btn">Купить</button>
//                       </div>
//                   </div>`;
//     }
// }
const pl = new ProductList();
// const products = [
//     {id: 1, title: 'Notebook', price: 20000},
//     {id: 2, title: 'Mouse', price: 1500},
//     {id: 3, title: 'Keyboard', price: 5000},
//     {id: 4, title: 'Gamepad', price: 4500},
// ];
//
// const renderProduct = (item, img = 'https://via.placeholder.com/200x150') => `<div class="product-item" data-id="${this.id}">
//               <img src="${img}" alt="Some img">
//               <div class="desc">
//                   <h3>${item.title}</h3>
//                   <p>${item.price} \u20bd</p>
//                   <button class="buy-btn">Купить</button>
//               </div>
//           </div>`;
//
// const renderProducts = list => {
//     document.querySelector('.products')
//         .insertAdjacentHTML('beforeend', list.map(item => renderProduct(item)).join(''));
// };
//
// renderProducts(products);

