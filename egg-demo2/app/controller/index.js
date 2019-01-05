
// app/controller/index.js
const Controller = require('egg').Controller;

class IndexController extends Controller {
  async list() {
    /*
    const dataList = {
      list: [
        { id: 1, title: '今天是我第一天学习egg了', url: '/index/1' },
        { id: 2, title: '今天是我第一次学习egg了', url: '/index/2' }
      ]
    };
    */
    const ctx = this.ctx;
    const page = ctx.query.page || 1;
    const indexList = await ctx.service.index.list(page);

    await ctx.render('index/list.tpl', { list: indexList });
  }
}

module.exports = IndexController;