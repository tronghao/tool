const column = {
  path: '/buyer/column/',
  name: 'Column',
  redirect: { name: 'ColumnOverView' },
  children: [
    {
      path: 'overview',
      name: 'ColumnOverView',
      component: () => import('@/views/column'),
      meta: {
        title: 'column_overview',
      },
    },
    {
      path: ':id(\\d+)',
      name: 'ColumnDetail',
      component: () => import('@/views/column/Detail'),
      meta: {
        title: 'column_detail',
      },
    },
  ],
};

export default column;
