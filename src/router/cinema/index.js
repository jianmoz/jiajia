export default {
    path: '/cinema',
    name: 'cinema',
    component: () => import('@/view/Cinema'),
    children:[
        {
            path: 'region',
            component: () => import('@/components/region')
        },
        {
            path: 'brand',
            component: () => import('@/components/cinema/brand')
        },
        {
            path: 'feature',
            component: () => import('@/components/cinema/feature')
        },
        {
            path: 'cinemaList',
            component: () => import('@/components/cinema/cinemaList')
        },
        {
            path: '/cinema',
            redirect: '/cinema/cinemaList'
        }
    ]
}