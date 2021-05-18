Vue.component('search', {
    data() {
        return {
            // userSearch: '',
        }
    },

    props: ['userSearch'],

    template: `
    <form action="#" class="search-form" @submit.prevent="$parent.$emit('filter')">
        <input type="text" class="search-field" :userSearch="userSearch" v-model="userSearch">
        <button class="btn-search" type="submit">
            <i class="fas fa-search"></i>
        </button>
    </form> `
})