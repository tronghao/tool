const buyer = {
  path: '/buyer/',
  children: [
    {
      path: 'chat-history',
      name: 'chatHistory',
      component: () => import('@/views/chat-history'),
      meta: {
        title: 'chat_history',
      },
    },
  ],
};

export default buyer;
