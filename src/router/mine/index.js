export default {
    path: '/mine',
    name: 'mine',
    component: () => import('@/view/Mine'),
    children: [
        {
            path: 'center',
            component: () => import('@/view/Mine/center')
        },
        {
            path: 'login',
            component: () => import('@/components/login')
        },
        {
            path: 'register',
            component: () => import('@/components/register')
        },
        {
            path: 'findPassword',
            component: () => import('@/components/findPassword')
        },
        {
            path: '/mine',
            redirect: 'center'
        }
    ]
}