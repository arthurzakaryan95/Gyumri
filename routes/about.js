const express = require('express');
const router = express.Router();

const Content = require('../model/scemas/schema_contents');
const Menu = Content.Menu;
const Category = Content.Category;
const Old = Content.Old;
const Church = Content.Church;
const Famous = Content.Famous;
const Theat = Content.Theater
const Trad = Content.Trad;
const Hotel = Content.Hotel;
const About = Content.About;
const User = require('../model/scemas/users');

router.get('/', function (req, res, next) {
    switch (req.session.lang) {
      case 'en':  //  for en lang
        Menu.findOne({ Lang: 'en' }, function (err, menu) {
          if (err) throw err;
          About.findOne({ Lang: 'en' }, function (err, st) {
            if (err) throw err;
            res.render('about', {
              title: 'Gyumri',
              menu: menu,
              state: st,
              err: '',
              user_id: req.session.user_id
            });
          });
        });
        break;

      case 'ru':  // for ru lang

        Menu.findOne({ Lang: 'ru' }, function (err, menu) {
          if (err) throw err;
          About.findOne({ Lang: 'ru' }, function (err, st) {
            if (err) throw err;
            res.render('about', {
              title: 'Gyumri',
              menu: menu,
              state: st,
              err: '',
              user_id: req.session.user_id
            });
          });
        });
        break;
      case 'hy':  // for hy lang

        Menu.findOne({ Lang: 'hy' }, function (err, menu) {
          if (err) throw err;
          About.findOne({ Lang: 'hy' }, function (err, st) {
            if (err) throw err;
            res.render('about', {
              title: 'Gyumri',
              menu: menu,
              state: st,
              err: '',
              user_id: req.session.user_id
            });
          });
        });
        break;
      default:
        Menu.findOne({ Lang: 'en' }, function (err, menu) {
          if (err) throw err;
          About.findOne({ Lang: 'en' }, function (err, st) {
            if (err) throw err;
              res.render('about', {
                title: 'Gyumri',
                menu: menu,
                state: st,
                err: '',
                user_id: req.session.user_id

            });
          });
        });
        break;
    }
  });




module.exports = router;
