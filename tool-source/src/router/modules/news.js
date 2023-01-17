const news = {
  path: '/buyer/news/',
  name: 'News',
  redirect: { name: 'NewsOverView' },
  children: [
    {
      path: 'overview',
      name: 'NewsOverView',
      component: () => import('@/views/news'),
      meta: {
        title: 'news_overview',
      },
    },
    {
      path: ':id',
      name: 'NewsCategoryDetail',
      component: () => import('@/views/news/Detail'),
      meta: {
        title: 'news_detail',
      },
    },
  ],
};

export default news;
