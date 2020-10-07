
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');


window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example-component', require('./components/ExampleComponent.vue'));


Vue.component('product', require('./components/Product.vue'));
Vue.component('cart-count', require('./components/CartCount.vue'));
Vue.component('cart-detail', require('./components/CartDetail.vue'));



Vue.component('ProductList', require('./vuestr/ShoppingCart.vue'));
Vue.component('ShoppingCart', require('./vuestr/ProductList.vue'));

import VueRouter from 'vue-router'

    
    

Vue.use(VueRouter)


import store from './store'


import App from './views/App'
import Home from './views/Home'
import Login from './views/Login'
import Register from './views/Register'
import SingleProduct from './views/SingleProduct'
import Checkout from './views/Checkout'
import Confirmation from './views/Confirmation'
import UserBoard from './views/UserBoard'
import Admin from './views/Admin'

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        },
        {
            path: '/products/:id',
            name: 'single-products',
            component: SingleProduct
        },
        {
            path: '/confirmation',
            name: 'confirmation',
            component: Confirmation
        },
        {
            path: '/checkout',
            name: 'checkout',
            component: Checkout,
            props: (route) => ({ pid: route.query.pid })
        },
        {
            path: '/dashboard',
            name: 'userboard',
            component: UserBoard,
            meta: {
                requiresAuth: true,
                is_user: true
            }
        },
        {
            path: '/admin/:page',
            name: 'admin-pages',
            component: Admin,
            meta: {
                requiresAuth: true,
                is_admin: true
            }
        },
        {
            path: '/admin',
            name: 'admin',
            component: Admin,
            meta: {
                requiresAuth: true,
                is_admin: true
            }
        },
    ],
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (localStorage.getItem('bigStore.jwt') == null) {
            next({
                path: '/login',
                params: { nextUrl: to.fullPath }
            })
        } else {
            let user = JSON.parse(localStorage.getItem('bigStore.user'))
            if (to.matched.some(record => record.meta.is_admin)) {
                if (user.is_admin == 1) {
                    next()
                }
                else {
                    next({ name: 'userboard' })
                }
            }
            else if (to.matched.some(record => record.meta.is_user)) {
                if (user.is_admin == 0) {
                    next()
                }
                else {
                    next({ name: 'admin' })
                }
            }
            next()
        }
    } else {
        next()
    }
})
const app = new Vue({
     el: '#app',
     components: { App },
     router,
     store,
     data: {
        cart: []
    }
    //,
    // created(){
    //     this.getCart();

    //     bus.$on('added-to-cart', (product) => {
    //         this.addToCart(product);
    //     });

    //     bus.$on('remove-from-cart', (product) => {
    //         this.removeFromCart(product);
    //     });

    // },
    // computed: {
    //     cartTotal(){
    //         return this.cart.reduce((total, product) => {
    //             return total + product.qty * product.price;
    //         }, 0);
    //     },
    //     totalItems(){
    //         return this.cart.reduce((total, product) => {
    //             return total + product.qty;
    //         }, 0);
    //     }
    // },
    // methods: {
    //     getCart () {
    //         if (localStorage && localStorage.getItem('cart')) {
    //             this.cart = JSON.parse(localStorage.getItem('cart'));

    //         } else {
    //             this.cart = [];
    //         }
    //     },
    //     addToCart(product){
    //         const matchingProductIndex = this.cart.findIndex((item) => {
    //             return item.id === product.id;
    //         });

    //         if (matchingProductIndex > -1) {
    //             this.cart[matchingProductIndex].qty++;
    //         } else {
    //             product.qty = 1;
    //             this.cart.push(product);

    //         }

    //         localStorage.setItem('cart', JSON.stringify(this.cart));
    //     },

    //     removeFromCart(product){
    //         const matchingProductIndex = this.cart.findIndex((item) => {
    //             return item.id == product.id;
    //         });

    //         if (this.cart[matchingProductIndex].qty <= 1) {
    //             this.cart.splice(matchingProductIndex, 1);
    //         } else {
    //             this.cart[matchingProductIndex].qty--;
    //         }

    //         localStorage.setItem('cart', JSON.stringify(this.cart));
    //     }

    // }

    
     
 });