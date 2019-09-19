// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.prototype.axios = axios

//设置全局过滤器，包括对图片url的处理
Vue.filter('setWH', (url, arg)=>{
  return url.replace(/w\.h/,arg)
})

import scroller from "./components/scroller";
Vue.component('scroller', scroller) ;   //全局封装better-scroll组件

import loading from "./components/loading";
Vue.component('loading', loading);

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
