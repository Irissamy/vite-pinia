import{T as p,P as i,p as o}from"./productStore-856ed0d0.js";import{_ as u,m as e,e as d,r,o as f,c as m,f as a,F as l}from"./index-5b696e1b.js";const x={name:"ShoppingView",components:{TheProduct:p,ProductBanner:i},data(){return{bannerImage:["https://images.unsplash.com/photo-1576717585968-8ea8166b89b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80","https://images.unsplash.com/photo-1612201142855-7873bc1661b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80","https://images.unsplash.com/photo-1606913084603-3e7702b01627?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"]}},computed:{...e(o,["sortProducts"]),...e(o,{products:"sortProducts",productList(){return this.products.filter(t=>t.category==="零食")}})},methods:{...d(o,["getProductList"])},created(){this.getProductList()}};function b(t,h,w,g,n,_){const s=r("ProductBanner"),c=r("TheProduct");return f(),m(l,null,[a(s,{"banner-image":n.bannerImage},null,8,["banner-image"]),a(c,{product:t.productList},null,8,["product"])],64)}const H=u(x,[["render",b]]);export{H as default};
