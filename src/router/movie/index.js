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
            path:'/movie',
            redirect: '/movie/playing'
        }
    ]
}