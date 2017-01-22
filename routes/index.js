var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/game2', function(req, res, next) {
  res.render('game2');
});

router.get('/Game', function(req, res, next) {
  res.render('Game');
});

router.get('/game3', function(req, res, next) {
  res.render('game3');
});

module.exports = router;
