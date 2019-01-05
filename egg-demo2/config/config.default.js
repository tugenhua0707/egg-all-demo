
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