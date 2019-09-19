export default {
    path: '/admin',
    name: 'admin',
    component: () => import('@/view/Admin'),
    children: [
        {
            path: 'users',
            component: ()=> import('@/view/Admin/users')
        },
        {
            path: 'cinemas',
            component: ()=> import('@/view/Admin/cinemas')
        },
        {
            path: 'movies',
            component: ()=> import('@/view/Admin/movies')
        },
        {
            path: '/admin',
            component: ()=> import('@/view/Admin/users')
        },
    ]
}