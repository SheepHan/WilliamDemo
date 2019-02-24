var express = require('express');
var app = express();

// 指定html
app.get('/index.html', function(req, res) {
  res.sendFile(__dirname + req.path);
});

// 配置Mock数据
var fs = require('fs');
app.get('/todolist', function(req, res) {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  fs.readFile('./mockTest/todolist.json', function(err, data) {
    if (err) throw err;

    res.json(JSON.parse(data));
  });
});

// 监听端口
app.listen('3737', function () {
  console.log('localhost:3737/index.html');
});
