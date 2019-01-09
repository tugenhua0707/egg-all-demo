
module.exports = app => {
  const { router, controller } = app;

  // 路由中使用中间件
  const forbidIp = app.middleware.forbidIp({
    forbidips: [
      '127.0.0.1'
    ]
  });

  router.get('/', forbidIp, controller.home.index);
  router.get('/index', controller.index.list);
}