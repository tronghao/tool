const supplier = {
  path: '/buyer/supplier/',
  name: 'Supplier',
  redirect: { name: 'SupplierOverview' },
  children: [
    // Auth
    {
      path: 'register',
      name: 'SupplierRegister',
      component: () => import('@/views/supplier/register'),
      meta: {
        title: 'supplier_register',
      },
    },
    {
      path: 'register/completed',
      name: 'SupplierRegisterCompleted',
      component: () => import('@/views/supplier/register/Completed'),
      meta: {
        title: 'supplier_register_completed',
      },
    },
    {
      path: 'overview',
      name: 'SupplierOverview',
      component: () => import('@/views/supplier'),
      meta: {
        title: 'supplier_overview',
      },
    },
    {
      path: ':id(\\d+)',
      name: 'SupplierDetail',
      component: () => import('@/views/supplier/Detail'),
      meta: {
        title: 'supplier_detail',
      },
    },
    {
      path: ':id/exhibition-booth',
      name: 'SupplierExhibitionBooth',
      component: () => import('@/views/supplier/ExhibitionBooth'),
      meta: {
        title: 'supplier_exhibition_booth',
      },
    },
    {
      path: ':id/company-info',
      name: 'SupplierCompanyInfo',
      component: () => import('@/views/supplier/CompanyInfo'),
      meta: {
        title: 'supplier_company_info',
      },
    },
    // campaign
    {
      path: 'campaign/list',
      name: 'SupplierCampaignList',
      component: () => import('@/views/supplier/campaign'),
      meta: {
        title: 'supplier_campaign_list',
      },
    },
    {
      path: 'campaign/:id/detail',
      name: 'SupplierCampaignDetail',
      component: () => import('@/views/supplier/campaign/Detail'),
      meta: {
        title: 'supplier_campaign_detail',
      },
    },
  ],
};

export default supplier;
