var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'bob' });
});

// junk route
router.get('/dude', function(req, res, next) {
  res.render('second');
});

router.get('/main-menu', function(req, res, next) {
    res.render('main-menu');
});

module.exports = router;
