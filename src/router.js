import Vue from 'vue';
import Router from 'vue-router';

// 登录页
import Login from '@/views/Login/Login';
// 主导航
import StartNav from '@/views/StartNav/StartNav';
// 主架构
import Layout from '@/views/Layout/Layout';
// 句子
import Sentence from '@/views/Sentence/Sentence';

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',    // 登录页
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: StartNav
    },
    {
      path: '',
      name: 'layout',
      component: Layout,
      children: [{
        path: '/sentence',
        name: 'sentence',
        component: Sentence
      }]
    }
  ]
})
