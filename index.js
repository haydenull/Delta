var express = require('express');
var app = express();
var path = require('path');
var cors = require('cors');
var bodyParser = require('body-parser');
var compass = require('node-compass');
var Config = require('./config/config');
var indexRouter = require('./routes/index');
var circleRouter = require('./routes/circle');
var loginRouter = require('./routes/login_activity');

// 编译 scss
// app.use(compass({
//     project: path.join(__dirname, '/public')
// }));
// 处理跨域
app.use(cors());
// 解析请求
app.use(bodyParser.json({limit: '1mb'}));  //body-parser 解析json格式数据
app.use(bodyParser.urlencoded({            //此项必须在 bodyParser.json 下面,为参数编码
    extended: true
}));
app.use('/public', express.static(__dirname + '/public'));
app.use('/', indexRouter);
app.use('/circle', circleRouter);
app.use('/login', loginRouter);

app.listen(Config.port, function() {
    console.log('Server is listening for http://localhost:' + Config.port + ' ...');
});
