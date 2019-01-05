
// app/service/index.js

const Service = require('egg').Service;

class IndexService extends Service {
  async list(page = 1) {
    // 读取config下的默认配置
    const { serverUrl, pageSize } = this.config.index;

    const { data: idList } = await this.ctx.curl(`${serverUrl}/topstories.json`, {
      data: {
        orderBy: '"$key"',
        startAt: `"${pageSize * (page - 1)}"`,
        endAt: `"${pageSize * page - 1}"`
      },
      dataType: 'json',
    });

    const indexList = await Promise.all(
      Object.keys(idList).map(key => {
        const url = `${serverUrl}/item/${idList[key]}.json`;
        return this.ctx.curl(url, { dataType: 'json' });
      })
    );
    return indexList.map(res => res.data);
  }
};

module.exports = IndexService;