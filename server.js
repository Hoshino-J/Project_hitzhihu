const express = require('express');
const path = require('path');
const app = express();

// 静态文件目录，存放前端页面和资源文件
app.use(express.static(path.join(__dirname, 'public')));

// // 路由定义
app.get('/api/data', (req, res) => {
    // 这里可以编写你的业务逻辑，比如获取数据
    // 返回数据给前端
    res.json({ message: 'Hello, World!' });
});

app.post('/login', (req, res) => {
    // 在这里处理登录请求，验证用户名和密码
    // 返回相应的结果给前端
});

// 启动服务器
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
