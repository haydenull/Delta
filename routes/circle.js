var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', function(req, res) {
    res.send('绘制动画圆环');
});
router.get('/canvas', function(req, res) {
    res.sendFile('/circle/canvas/index.html', {root: path.join(__dirname, '/../public')});
});
router.get('/:name', function(req, res) {
    res.send('hello, ' + req.params.name);
});


module.exports = router;