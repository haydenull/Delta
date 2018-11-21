var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/', function(req, res) {
    res.send('hello');
});
router.post('/img', function(req, res) {
    console.log(req.body);
});
router.get('/barrage', function(req, res) {
    var texts = fs.readFileSync(__dirname + '/../asset/comments.txt', 'utf8');
    var comments = texts.split(/\r?\n/).filter(function(item, index) {
      return item != "";
    });
    res.json(comments);
});

module.exports = router;
