import Vue from 'vue'
import Router from 'vue-router'
import cinemaRouter from './cinema'
import mineRouter from './mine'
import movieRouter from './movie'
import adminRouter from './admin'

//使用vue-router插件
Vue.use(Router)

//一级路由
export default new Router({
    mode: 'history',
    base: '/jiajia/',
    routes: [
        cinemaRouter,
        mineRouter,
        movieRouter,
        adminRouter,
        {
            path: '/*',
            redirect: '/movie'
        }
    ]
})