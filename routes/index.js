var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let ak = "AKIAJIPU77TQL5LB5OIB"
  let as = "8Mw77pe6Ua9wr56f6lr169rDPTDWeUvV0q6ZS+6N"
  res.render('index', { title: 'Express' });
});

module.exports = router;
