const pressRelease = {
  path: '/buyer/press-release/',
  name: 'PressRelease',
  redirect: { name: 'PressReleaseOverview' },
  children: [
    {
      path: 'overview',
      name: 'PressReleaseOverview',
      component: () => import('@/views/press-release'),
      meta: {
        title: 'press_release_overview',
      },
    },
    {
      path: ':id(\\d+)',
      name: 'PressReleaseDetail',
      component: () => import('@/views/press-release/Detail'),
      meta: {
        title: 'press_release_detail',
      },
    },
  ],
};

export default pressRelease;
