import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/loginView',
      name: 'loginView',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/shopping',
      name: 'shopping',
      component: () => import('../views/ShoppingView.vue'),
      children: [
        {
          path: 'sweetItem',
          component: () => import('../views/shopping/SweetView.vue'),
        },
        {
          path: 'furnitureItem',
          component: () => import('../views/shopping/FurnitureView.vue')
        },
        {
          path: 'toyItem',
          component: () => import('../views/shopping/ToyView.vue')
        },
        {
          path: 'beautyItem',
          component: () => import('../views/shopping/BeautyView.vue'),
        },
        {
          path: ':productCategory/:productId',
          name: 'productDatil',
          component: () => import('../views/shopping/ProductView.vue')
        },
        {
          path: 'createOrder',
          name: 'createOrder',
          component: () => import('../views/shopping/CreateOrder.vue')
        },
      ]
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: () => import('../views/CheckoutView.vue'),
      children: [
        {
          path: ':orderId',
          name: 'checkoutId',
          component: () => import('../views/checkout/CheckoutIdView.vue'),
        },
        {
          path: 'checkoutAll',
          name: 'checkoutAll',
          component: () => import('../views/checkout/CheckoutAllView.vue')
        }
      ]
    },
    
  ]
})

export default router
