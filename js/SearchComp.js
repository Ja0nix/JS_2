Vue.component('search', {
    data() {
        return {
            userSearch: '',
        }
    },

    // props: ['filter', 'userSearch'],

    // methods: {
    //     filter: function() {
    //       console.log(this.$refs.userSearch);
    //       this.$emit('filter', this.userSearch);
    //     }
    // },
    watch: {
        userSearch(value) {
            console.log(value);
        }
    },
    template: `
    <form action="#" class="search-form">
        <input type="text" class="search-field" v-model="userSearch" :userSearch="userSearch">
        <button class="btn-search" type="submit" @click="$root.$refs.products.filter(userSearch)">
            <i class="fas fa-search"></i>
        </button>
    </form> `
})