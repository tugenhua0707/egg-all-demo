
// app/controller/index.js

const Controller = require('egg').Controller;

class IndexController extends Controller {
  async list() {
    const dataList = {
      list: [
        { id: 1, title: '今天是我第一天学习egg了', url: '/index/1' },
        { id: 2, title: '今天是我第一次学习egg了', url: '/index/2' }
      ]
    };
    await this.ctx.render('index/list.tpl', dataList);
  }
}

module.exports = IndexController;