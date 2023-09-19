const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// 静态文件目录
app.use(express.static(path.join(__dirname, 'dist')));

// 处理根路由
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// 启动服务器
app.listen(port, () => {
  console.log(`Server running on <http://localhost>:${port}`);
});
