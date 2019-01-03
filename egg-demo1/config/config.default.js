
// 下面是我自己的 Cookie 安全字符串密钥

exports.keys = '123456';

// 添加view配置
exports.view = {
  defaultViewEngine: 'nunjucks',
  mapping: {
    '.tpl': 'nunjucks'
  }
};