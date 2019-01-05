
<!-- app/view/index/list.tpl -->
<html>
  <head>
    <title>第一天学习egg</title>
    <link rel="stylesheet" href="/public/css/index.css" />
  </head>
  <body>
    <ul class="view-list">
      {% for item in list %}
        <li class="item">
          <a href = "{{ item.url }}">{{ item.title }}</a>
        </li>
      {% endfor %}
    </ul>
  </body>
</html>