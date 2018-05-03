const express = require('express');
const router = express.Router();


const Contact = require('../model/scemas/schema_contact');
const Content = require('../model/scemas/schema_contents');
const sendMail = require('../mailer/contact_mail')
const Menu = Content.Menu;
const Category = Content.Category;
const Old = Content.Old;
const Church = Content.Church;
const Famous = Content.Famous;
const Theat = Content.Theater
const Trad = Content.Trad;
const Hotel = Content.Hotel;
const About = Content.About;


router.get("/",(req,res,next)=>{
  switch (req.session.lang) {
    case 'en':  //  for en lang
      Menu.findOne({ Lang: 'en' }, function (err, menu) {
        if (err) throw err;
        About.findOne({ Lang: 'en' }, function (err, st) {
          if (err) throw err;
          res.render('contact', {
            title: 'Gyumri',
            menu: menu,
            state: st,
            error: '',
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
          res.render('contact', {
            title: 'Gyumri',
            menu: menu,
            state: st,
            error: '',
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
          res.render('contact', {
            title: 'Gyumri',
            menu: menu,
            state: st,
            error: '',
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
            res.render('contact', {
              title: 'Gyumri',
              menu: menu,
              state: st,
              error: '',
              user_id: req.session.user_id

          });
        });
      });
      break;
  }
})


router.post("/",(req,res,next)=>{
  let contact = new Contact(req.body);
  const mail = req.body.email;
  const content = req.body.content;
  const title = req.body.title;
  console.log(req.session.user_id);
  switch (req.session.lang){
    case 'en':
    console.log(contact);
    if (req.session.user_id) {
      contact.save().then(() => {
        console.log("ok");
        Menu.findOne({ Lang: 'en' }, function (err, menu) {
          if (err) throw err;
          About.findOne({ Lang: 'en' }, function (err, st) {
            if (err) throw err;
              res.render('contact', {
                title: 'Gyumri',
                menu: menu,
                state: st,
                error: '',
                user_id: req.session.user_id
            });
          });
        });
      }).catch((error) => {
        console.log(error);
        Menu.findOne({ Lang: 'en' }, function (err, menu) {
          if (err) throw err;
          About.findOne({ Lang: 'en' }, function (err, st) {
            if (err) throw err;
              res.render('contact', {
                title: 'Gyumri',
                menu: menu,
                state: st,
                error: error,
                user_id: req.session.user_id
            });
          });
        });
      });
      sendMail(mail, content,title)
    }else{
      Menu.findOne({ Lang: 'en' }, function (err, menu) {
        if (err) throw err;
        About.findOne({ Lang: 'en' }, function (err, st) {
          if (err) throw err;
            res.render('contact', {
              title: 'Gyumri',
              menu: menu,
              state: st,
              error: "Not logined yet",
              user_id: req.session.user_id
          });
        });
      });
    }
    break;
    case 'ru':
    if (req.session.user_id) {
      contact.save().then(() => {
        console.log("ok");
        Menu.findOne({ Lang: 'ru' }, function (err, menu) {
          if (err) throw err;
          About.findOne({ Lang: 'ru' }, function (err, st) {
            if (err) throw err;
              res.render('contact', {
                title: 'Gyumri',
                menu: menu,
                state: st,
                error: '',
                user_id: req.session.user_id
            });
          });
        });
      }).catch((error) => {
        console.log(error);
        Menu.findOne({ Lang: 'ru' }, function (err, menu) {
          if (err) throw err;
          About.findOne({ Lang: 'ru' }, function (err, st) {
            if (err) throw err;
              res.render('contact', {
                title: 'Gyumri',
                menu: menu,
                state: st,
                error: error,
                user_id: req.session.user_id
            });
          });
        });
      });
      sendMail(mail, content,title)
    }else{
      Menu.findOne({ Lang: 'ru' }, function (err, menu) {
        if (err) throw err;
        About.findOne({ Lang: 'ru' }, function (err, st) {
          if (err) throw err;
            res.render('contact', {
              title: 'Gyumri',
              menu: menu,
              state: st,
              error: "Not logined yet",
              user_id: req.session.user_id
          });
        });
      });
    }
    break;
    case 'hy':
    if (req.session.user_id) {
      contact.save().then(() => {
        console.log("ok");
        Menu.findOne({ Lang: 'hy' }, function (err, menu) {
          if (err) throw err;
          About.findOne({ Lang: 'hy' }, function (err, st) {
            if (err) throw err;
              res.render('contact', {
                title: 'Gyumri',
                menu: menu,
                state: st,
                error: '',
                user_id: req.session.user_id
            });
          });
        });
      }).catch((error) => {
        console.log(error);
        Menu.findOne({ Lang: 'hy' }, function (err, menu) {
          if (err) throw err;
          About.findOne({ Lang: 'hy' }, function (err, st) {
            if (err) throw err;
              res.render('contact', {
                title: 'Gyumri',
                menu: menu,
                state: st,
                error: error,
                user_id: req.session.user_id
            });
          });
        });
      });
      sendMail(mail, content,title)
    }else{
      Menu.findOne({ Lang: 'hy' }, function (err, menu) {
        if (err) throw err;
        About.findOne({ Lang: 'hy' }, function (err, st) {
          if (err) throw err;
            res.render('contact', {
              title: 'Gyumri',
              menu: menu,
              state: st,
              error: "Not logined yet",
              user_id: req.session.user_id
          });
        });
      });
    }
    break;
    default:
    if (req.session.user_id ) {
      contact.save().then(() => {
        console.log("ok");
        Menu.findOne({ Lang: 'en' }, function (err, menu) {
          if (err) throw err;
          About.findOne({ Lang: 'en' }, function (err, st) {
            if (err) throw err;
              res.render('contact', {
                title: 'Gyumri',
                menu: menu,
                state: st,
                error: '',
                user_id: req.session.user_id
            });
          });
        });
      }).catch((error) => {
        console.log(error);
        Menu.findOne({ Lang: 'en' }, function (err, menu) {
          if (err) throw err;
          About.findOne({ Lang: 'en' }, function (err, st) {
            if (err) throw err;
              res.render('contact', {
                title: 'Gyumri',
                menu: menu,
                state: st,
                error: error,
                user_id: req.session.user_id
            });
          });
        });
      });
      sendMail(mail, content,title)
    }else{
      Menu.findOne({ Lang: 'en' }, function (err, menu) {
        if (err) throw err;
        About.findOne({ Lang: 'en' }, function (err, st) {
          if (err) throw err;
            res.render('contact', {
              title: 'Gyumri',
              menu: menu,
              state: st,
              error: "Not logined yet",
              user_id: req.session.user_id
          });
        });
      });
    }
    break;
  }
});



module.exports = router;
