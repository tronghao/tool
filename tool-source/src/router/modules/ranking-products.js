const rankingProducts = {
  path: '/products/ranking',
  name: 'RankingProduct',
  component: () => import('@/views/ranking'),
  meta: {
    title: 'ranking_product',
  },
};

export default rankingProducts;
