
// 下面是我自己的 Cookie 安全字符串密钥

exports.keys = '123456';

// 添加view配置
exports.view = {
  defaultViewEngine: 'nunjucks',
  mapping: {
    '.tpl': 'nunjucks'
  }
};

// 添加index 的 配置项
exports.index = {
  pageSize: 10,
  serverUrl: 'https://hacker-news.firebaseio.com/v0'
};
/*
// 配置需要的中间件，数组的顺序即为中间件加载的顺序
exports.middleware = [
  'forbidIp'
];
// 上面中间件的配置 ip
exports.forbidIp = {
  forbidips: [
    '192.168.1.12',
    '127.0.0.1'
  ]
}
*/
