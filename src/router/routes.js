const routes = [
    {
      path: '/',
      children:[
        {
            path:'',
            name:'home',
            component: () => import ('@/views/HomeView.vue'),
        },
        {
      path: '/contac',
      name: 'contac',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/ContacView.vue')
    },
     {
      path: 'test',
      name: 'test',
      component: () => import('@/views/TestView.vue')
    },
     {
      path: 'project',
      name: 'project',
      component: () => import('@/views/ProjectView.vue')
    },
        {
      path: 'detail/:id',
      name: 'detail',
      component: () => import('@/views/DetailView.vue')
    },
       
      ]
    },   
  ];

  export default routes;