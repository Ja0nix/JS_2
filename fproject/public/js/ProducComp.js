Vue.component('products', {
    data(){
        return {
            // catalogUrl: '/catalogData.json',
            catalogUrl: '/products.json',
            products: [],
            filtered: [],
            imgCatalog: 'https://placehold.it/200x150',
        }
    },
    methods: {
        filter(){
            let regexp = new RegExp(this.userSearch, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.product_name));
        }
    },
    mounted(){
        this.$parent.getJson(`${API + this.catalogUrl}`)
            .then(data => {
                for(let el of data){
                    this.products.push(el);
                    this.filtered.push(el);
                }
            });
        // this.$parent.getJson(`getProducts.json`)
        //     .then(data => {
        //         for(let el of data){
        //             this.products.push(el);
        //             this.filtered.push(el);
        //         }
        //     })
    },
    template: `
        <div class="products">
            <product ref="refref" v-for="item of filtered" :key="item.id_product" :img="imgCatalog" :product="item"></product>
        </div>
    `
});
Vue.component('product', {
    props: ['product', 'img'],
    template: `
    <div class="product-item">
                <img :src="img" alt="Some img">
                <div class="desc">
                    <h3>{{product.product_name}}</h3>
                    <p>{{product.price}}₽</p>
                         <button class="buy-btn" @click="$root.$refs.cart.addProduct(product)">Купить</button>
<!-- 2                    <button class="buy-btn" @click="$parent.$parent.$refs.cart.addProduct(product)">Купить</button>-->
                </div>
                <div class="featured__item">
                    <a href="#"></a><img :src=product.img :alt=product.product_name class="featured__img"></a>
                    <a href="#"><img src="img/featured/hover.png" alt="" class="featured__img-hover"></a>
                    <div class="featured__description">
                        <a href="product.html"><h3 class="featured__h3">{{product.product_name}}</h3></a>
                        <p class="featured__p">{{product.product_description}}</p>
                        <p class="featured__price">{{product.price}}</p>
                    </div>
                </div>
            </div>
    `
});
