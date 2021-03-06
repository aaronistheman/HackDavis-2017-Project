var express = require('express');
var router = express.Router();
var passport = require('passport');

var mongoose = require('mongoose');
var User = mongoose.model('User');
var Event = mongoose.model('Event');

var jwt = require('express-jwt');

var auth = jwt({secret: 'SECRET', userProperty: 'payload'});

var ListItems = mongoose.model('ListItem');


/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'bob' });
  res.render('main-menu');
});

// junk route
router.get('/dude', function(req, res, next) {
  res.render('second');
});


router.get('/main-menu', function(req, res, next) {
    res.render('main-menu');
});

router.get('/game-menu',function(req,res, next) {
	res.render('game-menu');
});


// visit Register page
router.get('/register', function(req, res, next){
    res.render('register');
});

// visit Login page
router.get('/login', function(req, res, next){
  res.render('login');
});

// junk route
router.get('/schedule', function(req, res, next) {
  res.render('event_form');
});


router.post('/register', function(req, res, next){
  if(!req.body.username || !req.body.password){
    return res.status(400).json({message: 'Please fill out all fields'});
  }

  var user = new User();

  user.username = req.body.username;

  user.setPassword(req.body.password)

  user.save(function (err){
    if(err){ return next(err); }

    return res.json({token: user.generateJWT()})
  });
});

router.post('/login', function(req, res, next){
  if(!req.body.username || !req.body.password){
    return res.status(400).json({message: 'Please fill out all fields'});
  }

  passport.authenticate('local', function(err, user, info){
    if(err){ return next(err); }

    if(user){
      return res.json({token: user.generateJWT()});
    } else {
      return res.status(401).json(info);
    }
  })(req, res, next);
});

router.post('/ListItems', function(req, res, next){
  var item = new ListItems(req.body);

  item.save(function(err, item) {
    if(err){return next(err); }

    res.json(item);
  });
});

router.post('/Events', function(req, res, next) {
  var event = new Event(req.body);
  event.save (function(err, event) {
    if(err) {return next(err);}

    res.json(event);
  })
});

// Get list items
router.get('/Events', function(req, res, next) {
  ListItems.find(function(err, listitems) {
    if (err) {
      return next(err);
    }

    res.json(listitems);
  });
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

router.get('/checklist', function(req, res, next) {
  res.render('checklist');
});


module.exports = router;
