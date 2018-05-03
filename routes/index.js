const express = require('express');
const router = express.Router();

const Content = require('../model/scemas/schema_contents');
const News = require('../model/scemas/schema_users_news');
const User = require('../model/scemas/users');
const Menu = Content.Menu;
const Category = Content.Category;


/* GET home page. */

router.get('/', function (req, res, next) {
  switch (req.session.lang) {
    case 'en':  //  for en lang
      Menu.findOne({ Lang: 'en' }, function (err, menu) {
        if (err) throw err;
        Category.find({ Lang: 'en' }, null, { sort: { _id: 1 } }, function (err, cat) {
          if (err) throw err;
          res.render('index', {
            title: 'Gyumri',
            menu: menu,
            cat: cat,
            err: '',
            user_id: req.session.user_id
          });
        });
      });
      break;

    case 'ru':  // for ru lang

      Menu.findOne({ Lang: 'ru' }, function (err, menu) {
        if (err) throw err;
        Category.find({ Lang: 'ru' }, null, { sort: { _id: 1 } }, function (err, cat) {
          if (err) throw err;
          res.render('index', {
            title: 'Gyumri',
            menu: menu,
            cat: cat,
            err: '',
            user_id: req.session.user_id
          });
        });
      });

      break;
    case 'hy':  // for hy lang

      Menu.findOne({ Lang: 'hy' }, function (err, menu) {
        if (err) throw err;
        Category.find({ Lang: 'hy' }, null, { sort: { _id: 1 } }, function (err, cat) {
          if (err) throw err;
          res.render('index', {
            title: 'Gyumri',
            menu: menu,
            cat: cat,
            err: '',
            user_id: req.session.user_id
          });
        });
      });
      break;
    default:
      Menu.findOne({ Lang: 'en' }, function (err, menu) {
        if (err) throw err;
        Category.find({ Lang: 'en' }, null, { sort: { _id: 1 } }, function (err, cat) {
          if (err) throw err;
          res.render('index', {
            title: 'Gyumri',
            menu: menu,
            cat: cat,
            err: '',
            user_id: req.session.user_id
          });
        });
      });
      break;
  }

});

router.get('/en', function (req, res, next) {
  req.session.lang = 'en';
  res.redirect('/');
});
router.get('/ru', function (req, res, next) {
  req.session.lang = 'ru';
  res.redirect('/');
});
router.get('/hy', function (req, res, next) {
  req.session.lang = 'hy';
  res.redirect('/');
});









module.exports = router;
