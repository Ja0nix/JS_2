// class ProductList {
//     #goods;
//     #allProducts;
//     #prop;
//
//     constructor(container = '.products') {
//         this.container = container;
//         this.#goods = [];
//         this.#allProducts = [];
//
//         this.#fetchGoods();
//         this.#render();
//     }
//
//     get property() {
//         return this.#prop;
//     }
//
//     set property(value) {
//         this.#prop = value;
//     }
//
//     #fetchGoods() {
//         this.#goods = [
//             {id: 1, title: 'Notebook', price: 20000},
//             {id: 2, title: 'Mouse', price: 1500},
//             {id: 3, title: 'Keyboard', price: 5000},
//             {id: 4, title: 'Gamepad', price: 4500},
//         ];
//     }
//
//     #render() {
//         const block = document.querySelector(this.container);
//
//         for (const good of this.#goods) {
//             const productObject = new ProductItem(good);
//             // console.log(productObject);
//             this.#allProducts.push(productObject);
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

const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

// Переделать в ДЗ не использовать fetch а Promise
let getRequest = (url, cb) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status !== 200) {
                console.log('Error');
            } else {
                cb(xhr.responseText);
            }
        }
    };
    xhr.send();
};

// –--------------------------------

// Normal
class ProductList {
    constructor(container = '.products') {
        this.container = container;
        this._goods = [];
        this._allProducts = [];
        // this._sum = 0; // Bad

        // this._fetchGoods();
        // this._render();

        this._getProducts()
            .then((data) => {
                this._goods = data;
                this._render();
            });
    }

    sum() {
        // this._sum = this._goods.reduce((sum, { price }) => sum + price, 0); // BAD
        // const sum = this._goods.reduce((sum, { price }) => sum + price, 0);
        // console.log(sum);
        // return sum;
        // return this._goods.reduce((sum, { price }) => sum + price, 0); // Good
    }

    // _fetchGoods() {
    //     getRequest(`${API}/catalogData.json`, (data) => {
    //         this._goods = JSON.parse(data);
    //         console.log(this._goods);
    //         this._render();
    //     });
    // }

    _getProducts() {
        return fetch(`${API}/catalogData.json`)
            .then((response) => response.json())
            .catch((error) => {
                console.log(error);
            });
    }

    _render() {
        const block = document.querySelector(this.container);

        for (const good of this._goods) {
            const productObject = new ProductItem(good);
            // console.log(productObject);
            this._allProducts.push(productObject);
            block.insertAdjacentHTML('afterbegin', productObject.render());
        }
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

