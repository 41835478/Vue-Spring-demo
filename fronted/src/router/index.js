import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: resolve => require(['../components/common/Home.vue'], resolve),
      children: [
        {
          path: '/',
          name: 'Recommend',
          component: resolve => require(['../components/page/Recommend.vue'], resolve)
        },
        // 商品类别列表，主要是以类别（category）和关键词（keyword）进行查找
        {
          path: '/list',
          component: resolve => require(['../components/common/Product.vue'], resolve),
          children: [
            {
              path: '/list/category/:categoryId',
              component: resolve => require(['../components/page/ProductList.vue'], resolve),
              children: [
                {
                  path: '/list/category/:categoryId/keyword/:keyword',
                  component: resolve => require(['../components/page/ProductList.vue'], resolve)
                }
              ]
            },
            {
              path: '/list/keyword/:keyword',
              name: 'ListKeyword',
              component: resolve => require(['../components/page/ProductList.vue'], resolve),
              children: [
                {
                  path: '/list/keyword/:keyword/category/:categoryId',
                  component: resolve => require(['../components/page/ProductList.vue'], resolve)
                }
              ]
            }
          ]
        },
        {
          // 商品详情页面
          path: '/detail',
          component: resolve => require(['../components/common/Product.vue'], resolve),
          children: [
            {
              path: '/detail/productId/:productId',
              component: resolve => require(['../components/page/ProductDetail.vue'], resolve)
            }
          ]
        },
        {
          // 购物车页面
          path: '/cart',
          component: resolve => require(['../components/common/Product.vue'], resolve),
          children: [
            {
              path: '',
              component: resolve => require(['../components/page/Cart.vue'], resolve)
            }
          ]
        }
      ]
    },
    {
      // 登录页面
      path: '/login',
      component: resolve => require(['../components/common/LoginRegister.vue'], resolve),
      children: [
        {
          path: '',
          component: resolve => require(['../components/page/Login.vue'], resolve)
        }
      ]
    },
    {
      // 注册页面
      path: '/register',
      component: resolve => require(['../components/common/LoginRegister.vue'], resolve),
      children: [
        {
          path: '',
          component: resolve => require(['../components/page/Register.vue'], resolve)
        }
      ]
    }
  ]
})
