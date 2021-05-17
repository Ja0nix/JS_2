const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
  el: '#app',
  data: {
    catalogUrl: '/catalogData.json',
    products: [],
    imgCatalog: 'https://placehold.it/200x150',
    searchLine: '',
    searchResult: [],
    show: false,
    isVisibleCart: false,
    cartResult: [],
    cartTotalQuantity: 0
  },
  methods: {
    getJson(url){
      return fetch(url)
        .then(result => result.json())
        .catch(error => {
          console.log(error);
        })
    },
    addProduct(product){
      // добавляем товары по клику к массив корзины
      this.cartResult.push(product);
      this.cartTotalQuantity = this.cartResult.length;
      // console.log(this.cartTotalQuantity);
      // console.log(this.cartResult);
    },
    filterGoods() {
      // фильтруем продукты по названию на наличие текста из поисковой строки
      // и выводим массив из найденных объектов
      // this.searchResult = this.products.filter((el) =>
      //   el.product_name.toLowerCase().indexOf(this.searchLine.toLowerCase()) > -1
      // )

      //обнуляю массив поиска
      this.searchResult = [];
      let line = this.searchLine;
      let regExp = new RegExp(line, 'i');

      // прохожусь по названию каждого элемента на наличие вхождения из строки поиска,
      // при наличии - в массив поиска добавляю весь продукт
      this.products.forEach(product => {
        if(product.product_name.search(regExp) !== -1) {
          this.searchResult.push(product);
        }
      });

      console.log(this.searchResult)
    }
  },
  beforeCreate() {},
  created() {
    this.getJson(`${API + this.catalogUrl}`)
      .then(data => {
        for(let el of data){
          this.products.push(el);
        }
      });
  },
  beforeMount() {},
  mounted(){},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
});
