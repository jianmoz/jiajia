export default {
    path: '/movie',
    name: 'movie',
    component: () => import('@/view/Movie'),
    children: [
        {
            path: 'city',
            component: () => import('@/components/city')
        },
        {
            path: 'playing',
            component: () => import('@/components/movie/playing')
        },
        {
            path: 'coming',
            component: () => import('@/components/movie/coming')
        },
        {
            path: 'search',
            component: () => import('@/components/movie/search')
        },
        {
            path: 'detail/1/:movieId',
            components: {
                //两个router-view防止跳转时候，另一个路由不匹配直接空白
                default: ()=>import('@/components/movie/playing'),
                detail: ()=> import('@/view/Movie/detail')
            },
            // props: true //获取路由参数
            props: {
                detail: true   //将路由上的参数作为props一个属性
            }
        },
        {
            path: 'detail/2/:movieId',
            components: {
                default: ()=>import('@/components/movie/coming'),
                detail: ()=> import('@/view/Movie/detail')
            },
            // props: true //获取路由参数
            props: {
                detail: true   //将路由上的参数作为props一个属性
            }
        },
        {
            path:'/movie',
            redirect: '/movie/playing'
        }
    ]
}