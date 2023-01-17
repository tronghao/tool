const pickup = {
  path: '/buyer/pickup/',
  name: 'pickup',
  redirect: { name: 'pickupOverView' },
  children: [
    {
      path: 'overview',
      name: 'pickupOverView',
      component: () => import('@/views/pickup'),
      meta: {
        title: 'pickup_overview',
      },
    },
    {
      path: 'grid',
      name: 'pickupGrid',
      component: () => import('@/views/pickup/Grid'),
      meta: {
        title: 'grid',
      },
    },
    {
      path: ':id(\\d+)',
      name: 'pickupDetail',
      component: () => import('@/views/pickup/Detail'),
      meta: {
        title: 'pickup_detail',
      },
    },
  ],
};

export default pickup;
