<template>
    <nav class="fixed-top navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Iris & Amy</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="position-relative collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <RouterLink to="/" class="nav-link">Home</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/about" class="nav-link">About</RouterLink>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shopping</a>
                        <ul class="dropdown-menu">
                            <li><RouterLink to="/shopping/sweetItem" class="dropdown-item">甜甜的東西</RouterLink></li>
                            <li><RouterLink to="/shopping/furnitureItem" class="dropdown-item">舒服的家具</RouterLink></li>
                            <li><RouterLink to="/shopping/toyItem" class="dropdown-item">好玩的玩具</RouterLink></li>
                            <li><RouterLink to="/shopping/beautyItem" class="dropdown-item">美美的彩妝</RouterLink></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><a class="dropdown-item" href="javascripts:;">Something else here</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/checkout/checkoutAll" class="nav-link">Order</RouterLink>
                    </li>
                </ul>
                <!-- <div class="nav-item dropdown pe-3">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Login</a>
                    <ul class="dropdown-menu">
                        <li><RouterLink to="/loginView" class="dropdown-item">使用者登入</RouterLink></li>
                        <li><a href="https://irissamy.github.io/vite-pinia-admin/#/login" class="dropdown-item">管理者登入</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="javascripts:;">login out</a></li>
                    </ul>
                </div> -->
                <div class="d-flex pe-3">
                    <a class="nav-link" href="#" @click.prevent="showCart">購物小車車</a>
                    <div class="cart" :class="{ 'cart--active': isCartShow }">
                        <div class="position-relative">
                            <CartComponent></CartComponent>
                        </div> 
                    </div>
                    <!-- <i class="bi bi-cart3"></i> -->
                    <i class="bi bi-cart-dash-fill" v-if="isCartShow"></i>
                    <i class="bi bi-cart-plus" v-else></i>
                    <a class="ms-2 badge rounded-pill bg-danger text-white" href="#" @click.prevent="showCart">{{ cartLen }}</a>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import { RouterLink } from 'vue-router'
import cartStore from '@/store/cartStore'
import { mapState } from 'pinia'
import CartComponent from '@/components/CartComponent.vue'

export default {
    name:'NavBar',
    components: {
        RouterLink,CartComponent
    },
    data() {
        return {
            isCartShow: false
        }
    },
    watch: {
        isShow(){
            this.isCartShow = this.isShow
        }
    },
    computed: { 
        ...mapState(cartStore,['cartLen','isShow'])
    },
    methods: {
        showCart() {
            this.isCartShow = !this.isCartShow
        }
    }
}
</script>