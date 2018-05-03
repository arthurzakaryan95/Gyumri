const express = require('express');
const router = express.Router();
const url = require('url')
const mongoosePaginate = require('mongoose-paginate');

const Content = require('../model/scemas/schema_contents');
const Menu = Content.Menu;
const Category = Content.Category;
const States = Content.States;
const User = require('../model/scemas/users');

let perPage =3 ;
router.get('/oldandnew', function (req, res, next) {
  let page = req.params.page ;
  switch (req.session.lang) {
    case 'en':  //  for en lang
      Menu.findOne({ Lang: 'en' }, function (err, menu) {
        if (err) throw err;
        States.find({ Lang: 'en',  CatType: "Old and New Gyumri" })
        .skip((perPage * page) - perPage)
        .limit(perPage)
        .exec((err, doc) => {
          console.log(doc.length);
          if (err) throw err;
          States.find({ Lang: 'en',  CatType: "Old and New Gyumri" })
          .count()
          .exec((err, count) => {
          res.render('cat_item', {
            title: 'Gyumri',
            pages: Math.ceil(count / perPage),
            perPage:perPage,
            Link:"oldandnewpages",
            menu: menu,
            doc: doc,
            err: '',
            user_id: req.session.user_id
          });
        });
      });
    })
      break;

    case 'ru':  // for ru lang

    Menu.findOne({ Lang: 'ru' }, function (err, menu) {
      if (err) throw err;
      States.find({ Lang: 'ru',  CatType: "Old and New Gyumri" })
      .skip((perPage * page) - perPage)
      .limit(perPage)
      .exec((err, doc) => {
        console.log(doc.length);
        if (err) throw err;
        States.find({ Lang: 'ru',  CatType: "Old and New Gyumri" })
        .count()
        .exec((err, count) => {
        res.render('cat_item', {
          title: 'Gyumri',
          pages: Math.ceil(count / perPage),
          perPage:perPage,
          menu: menu,
          Link:"oldandnewpages",
          doc: doc,
          err: '',
          user_id: req.session.user_id
        });
      });
    });
  })
      break;
    case 'hy':  // for hy lang

    Menu.findOne({ Lang: 'hy' }, function (err, menu) {
      if (err) throw err;
      States.find({ Lang: 'hy',  CatType: "Old and New Gyumri" })
      .skip((perPage * page) - perPage)
      .limit(perPage)
      .exec((err, doc) => {
        console.log(doc.length);
        if (err) throw err;
        States.find({ Lang: 'hy',  CatType: "Old and New Gyumri" })
        .count()
        .exec((err, count) => {
        res.render('cat_item', {
          title: 'Gyumri',
          pages: Math.ceil(count / perPage),
          perPage:perPage,
          Link:"oldandnewpages",
          menu: menu,
          doc: doc,
          err: '',
          user_id: req.session.user_id
        });
      });
    });
  })
      break;
    default:
    Menu.findOne({ Lang: 'en' }, function (err, menu) {
      if (err) throw err;
      States.find({ Lang: 'en',  CatType: "Old and New Gyumri" })
      .skip((perPage * page) - perPage)
      .limit(perPage)
      .exec((err, doc) => {
        console.log(doc.length);
        if (err) throw err;
        States.find({ Lang: 'en',  CatType: "Old and New Gyumri" })
        .count()
        .exec((err, count) => {
        res.render('cat_item', {
          title: 'Gyumri',
          pages: Math.ceil(count / perPage),
          perPage:perPage,
          menu: menu,
          Link:"oldandnewpages",
          doc: doc,
          err: '',
          user_id: req.session.user_id
        });
      });
    });
  })
      break;
  }
});


router.get('/churches', function (req, res, next) {
  let page = req.params.page ;
  switch (req.session.lang) {
    case 'en':  //  for en lang
    Menu.findOne({ Lang: 'en' }, function (err, menu) {
      if (err) throw err;
      States.find({ Lang: 'en',  CatType: "Churches" })
      .skip((perPage * page) - perPage)
      .limit(perPage)
      .exec((err, doc) => {
        console.log(doc.length);
        if (err) throw err;
        States.find({ Lang: 'en',  CatType: "Churches" })
        .count()
        .exec((err, count) => {
        res.render('cat_item', {
          title: 'Gyumri',
          pages: Math.ceil(count / perPage),
          perPage:perPage,
          menu: menu,
          Link:"churchespages",
          doc: doc,
          err: '',
          user_id: req.session.user_id
        });
      });
    });
  })
      break;

    case 'ru':  // for ru lang

    Menu.findOne({ Lang: 'ru' }, function (err, menu) {
      if (err) throw err;
      States.find({ Lang: 'ru',  CatType: "Churches" })
      .skip((perPage * page) - perPage)
      .limit(perPage)
      .exec((err, doc) => {
        console.log(doc.length);
        if (err) throw err;
        States.find({ Lang: 'ru',  CatType: "Churches" })
        .count()
        .exec((err, count) => {
        res.render('cat_item', {
          title: 'Gyumri',
          pages: Math.ceil(count / perPage),
          perPage:perPage,
          menu: menu,
          Link:"churchespages",
          doc: doc,
          err: '',
          user_id: req.session.user_id
        });
      });
    });
  })
      break;
    case 'hy':  // for hy lang

    Menu.findOne({ Lang: 'hy' }, function (err, menu) {
      if (err) throw err;
      States.find({ Lang: 'hy',  CatType: "Churches" })
      .skip((perPage * page) - perPage)
      .limit(perPage)
      .exec((err, doc) => {
        console.log(doc.length);
        if (err) throw err;
        States.find({ Lang: 'hy',  CatType: "Churches" })
        .count()
        .exec((err, count) => {
        res.render('cat_item', {
          title: 'Gyumri',
          pages: Math.ceil(count / perPage),
          perPage:perPage,
          menu: menu,
          Link:"churchespages",
          doc: doc,
          err: '',
          user_id: req.session.user_id
        });
      });
    });
  })
      break;
    default:
    Menu.findOne({ Lang: 'en' }, function (err, menu) {
      if (err) throw err;
      States.find({ Lang: 'en',  CatType: "Churches" })
      .skip((perPage * page) - perPage)
      .limit(perPage)
      .exec((err, doc) => {
        console.log(doc.length);
        if (err) throw err;
        States.find({ Lang: 'en',  CatType: "Churches" })
        .count()
        .exec((err, count) => {
        res.render('cat_item', {
          title: 'Gyumri',
          pages: Math.ceil(count / perPage),
          perPage:perPage,
          menu: menu,
          Link:"churchespages",
          doc: doc,
          err: '',
          user_id: req.session.user_id
        });
      });
    });
  })
      break;
  }
});



router.get('/famous', function (req, res, next) {
  let page = req.params.page ;
  switch (req.session.lang) {
    case 'en':  //  for en lang
    Menu.findOne({ Lang: 'en' }, function (err, menu) {
      if (err) throw err;
      States.find({ Lang: 'en',  CatType: "Famous People" })
      .skip((perPage * page) - perPage)
      .limit(perPage)
      .exec((err, doc) => {
        console.log(doc.length);
        if (err) throw err;
        States.find({ Lang: 'en',  CatType: "Famous People" })
        .count()
        .exec((err, count) => {
        res.render('cat_item', {
          title: 'Gyumri',
          pages: Math.ceil(count / perPage),
          perPage:perPage,
          menu: menu,
          Link:"famouspages",
          doc: doc,
          err: '',
          user_id: req.session.user_id
        });
      });
    });
    })
      break;

    case 'ru':  // for ru lang

    Menu.findOne({ Lang: 'ru' }, function (err, menu) {
      if (err) throw err;
      States.find({ Lang: 'ru',  CatType: "Famous People" })
      .skip((perPage * page) - perPage)
      .limit(perPage)
      .exec((err, doc) => {
        console.log(doc.length);
        if (err) throw err;
        States.find({ Lang: 'ru',  CatType: "Famous People" })
        .count()
        .exec((err, count) => {
        res.render('cat_item', {
          title: 'Gyumri',
          pages: Math.ceil(count / perPage),
          perPage:perPage,
          menu: menu,
          Link:"famouspages",
          doc: doc,
          err: '',
          user_id: req.session.user_id
        });
      });
    });
    })
      break;
    case 'hy':  // for hy lang

    Menu.findOne({ Lang: 'hy' }, function (err, menu) {
      if (err) throw err;
      States.find({ Lang: 'hy',  CatType: "Famous People" })
      .skip((perPage * page) - perPage)
      .limit(perPage)
      .exec((err, doc) => {
        console.log(doc.length);
        if (err) throw err;
        States.find({ Lang: 'hy',  CatType: "Famous People" })
        .count()
        .exec((err, count) => {
        res.render('cat_item', {
          title: 'Gyumri',
          pages: Math.ceil(count / perPage),
          perPage:perPage,
          menu: menu,
          Link:"famouspages",
          doc: doc,
          err: '',
          user_id: req.session.user_id
        });
      });
    });
    })
      break;
    default:
    Menu.findOne({ Lang: 'en' }, function (err, menu) {
      if (err) throw err;
      States.find({ Lang: 'en',  CatType: "Famous People" })
      .skip((perPage * page) - perPage)
      .limit(perPage)
      .exec((err, doc) => {
        console.log(doc.length);
        if (err) throw err;
        States.find({ Lang: 'en',  CatType: "Famous People" })
        .count()
        .exec((err, count) => {
        res.render('cat_item', {
          title: 'Gyumri',
          pages: Math.ceil(count / perPage),
          perPage:perPage,
          menu: menu,
          Link:"famouspages",
          doc: doc,
          err: '',
          user_id: req.session.user_id
        });
      });
    });
    })
      break;
  }
});


router.get('/teatre', function (req, res, next) {
  let page = req.params.page ;
  switch (req.session.lang) {
    case 'en':  //  for en lang
    Menu.findOne({ Lang: 'en' }, function (err, menu) {
      if (err) throw err;
      States.find({ Lang: 'en',  CatType: "Theatre and film" })
      .skip((perPage * page) - perPage)
      .limit(perPage)
      .exec((err, doc) => {
        console.log(doc.length);
        if (err) throw err;
        States.find({ Lang: 'en',  CatType: "Theatre and film" })
        .count()
        .exec((err, count) => {
        res.render('cat_item', {
          title: 'Gyumri',
          pages: Math.ceil(count / perPage),
          perPage:perPage,
          menu: menu,
          Link:"teatrepages",
          doc: doc,
          err: '',
          user_id: req.session.user_id
        });
      });
    });
    })
      break;

    case 'ru':  // for ru lang

    Menu.findOne({ Lang: 'ru' }, function (err, menu) {
      if (err) throw err;
      States.find({ Lang: 'ru',  CatType: "Theatre and film" })
      .skip((perPage * page) - perPage)
      .limit(perPage)
      .exec((err, doc) => {
        console.log(doc.length);
        if (err) throw err;
        States.find({ Lang: 'ru',  CatType: "Theatre and film" })
        .count()
        .exec((err, count) => {
        res.render('cat_item', {
          title: 'Gyumri',
          pages: Math.ceil(count / perPage),
          perPage:perPage,
          menu: menu,
          Link:"teatrepages",
          doc: doc,
          err: '',
          user_id: req.session.user_id
        });
      });
    });
    })
      break;
    case 'hy':  // for hy lang

    Menu.findOne({ Lang: 'hy' }, function (err, menu) {
      if (err) throw err;
      States.find({ Lang: 'hy',  CatType: "Theatre and film" })
      .skip((perPage * page) - perPage)
      .limit(perPage)
      .exec((err, doc) => {
        console.log(doc.length);
        if (err) throw err;
        States.find({ Lang: 'hy',  CatType: "Theatre and film" })
        .count()
        .exec((err, count) => {
        res.render('cat_item', {
          title: 'Gyumri',
          pages: Math.ceil(count / perPage),
          perPage:perPage,
          menu: menu,
          Link:"teatrepages",
          doc: doc,
          err: '',
          user_id: req.session.user_id
        });
      });
    });
    })
      break;
    default:
    Menu.findOne({ Lang: 'en' }, function (err, menu) {
      if (err) throw err;
      States.find({ Lang: 'en',  CatType: "Theatre and film" })
      .skip((perPage * page) - perPage)
      .limit(perPage)
      .exec((err, doc) => {
        console.log(doc.length);
        if (err) throw err;
        States.find({ Lang: 'en',  CatType: "Theatre and film" })
        .count()
        .exec((err, count) => {
        res.render('cat_item', {
          title: 'Gyumri',
          pages: Math.ceil(count / perPage),
          perPage:perPage,
          menu: menu,
          Link:"teatrepages",
          doc: doc,
          err: '',
          user_id: req.session.user_id
        });
      });
    });
    })
      break;
  }
});
router.get('/hotel', function (req, res, next) {
  let page = req.params.page ;
  switch (req.session.lang) {
    case 'en':  //  for en lang
    Menu.findOne({ Lang: 'en' }, function (err, menu) {
      if (err) throw err;
      States.find({ Lang: 'en',  CatType: "Restaurants and hotels" })
      .skip((perPage * page) - perPage)
      .limit(perPage)
      .exec((err, doc) => {
        console.log(doc.length);
        if (err) throw err;
        States.find({ Lang: 'en',  CatType: "Restaurants and hotels" })
        .count()
        .exec((err, count) => {
        res.render('cat_item', {
          title: 'Gyumri',
          pages: Math.ceil(count / perPage),
          perPage:perPage,
          menu: menu,
          Link:"hotelpages",
          doc: doc,
          err: '',
          user_id: req.session.user_id
        });
      });
    });
    })
      break;

    case 'ru':  // for ru lang

    Menu.findOne({ Lang: 'ru' }, function (err, menu) {
      if (err) throw err;
      States.find({ Lang: 'ru',  CatType: "Restaurants and hotels" })
      .skip((perPage * page) - perPage)
      .limit(perPage)
      .exec((err, doc) => {
        console.log(doc.length);
        if (err) throw err;
        States.find({ Lang: 'ru',  CatType: "Restaurants and hotels" })
        .count()
        .exec((err, count) => {
        res.render('cat_item', {
          title: 'Gyumri',
          pages: Math.ceil(count / perPage),
          perPage:perPage,
          menu: menu,
          Link:"hotelpages",
          doc: doc,
          err: '',
          user_id: req.session.user_id
        });
      });
    });
    })
      break;
    case 'hy':  // for hy lang

    Menu.findOne({ Lang: 'hy' }, function (err, menu) {
      if (err) throw err;
      States.find({ Lang: 'hy',  CatType: "Restaurants and hotels" })
      .skip((perPage * page) - perPage)
      .limit(perPage)
      .exec((err, doc) => {
        console.log(doc.length);
        if (err) throw err;
        States.find({ Lang: 'hy',  CatType: "Restaurants and hotels" })
        .count()
        .exec((err, count) => {
        res.render('cat_item', {
          title: 'Gyumri',
          pages: Math.ceil(count / perPage),
          perPage:perPage,
          menu: menu,
          Link:"hotelpages",
          doc: doc,
          err: '',
          user_id: req.session.user_id
        });
      });
    });
    })
      break;
    default:
    Menu.findOne({ Lang: 'en' }, function (err, menu) {
      if (err) throw err;
      States.find({ Lang: 'en',  CatType: "Restaurants and hotels" })
      .skip((perPage * page) - perPage)
      .limit(perPage)
      .exec((err, doc) => {
        console.log(doc.length);
        if (err) throw err;
        States.find({ Lang: 'en',  CatType: "Restaurants and hotels" })
        .count()
        .exec((err, count) => {
        res.render('cat_item', {
          title: 'Gyumri',
          pages: Math.ceil(count / perPage),
          perPage:perPage,
          menu: menu,
          Link:"hotelpages",
          doc: doc,
          err: '',
          user_id: req.session.user_id
        });
      });
    });
    })
      break;
  }
});


router.get('/traditions', function (req, res, next) {
  let page = req.params.page ;
  switch (req.session.lang) {
    case 'en':  //  for en lang
    Menu.findOne({ Lang: 'en' }, function (err, menu) {
      if (err) throw err;
      States.find({ Lang: 'en',  CatType: "Traditions" })
      .skip((perPage * page) - perPage)
      .limit(perPage)
      .exec((err, doc) => {
        console.log(doc.length);
        if (err) throw err;
        States.find({ Lang: 'en',  CatType: "Traditions" })
        .count()
        .exec((err, count) => {
        res.render('cat_item', {
          title: 'Gyumri',
          pages: Math.ceil(count / perPage),
          perPage:perPage,
          menu: menu,
          Link:"traditionspages",
          doc: doc,
          err: '',
          user_id: req.session.user_id
        });
      });
    });
    })
      break;

    case 'ru':  // for ru lang

    Menu.findOne({ Lang: 'ru' }, function (err, menu) {
      if (err) throw err;
      States.find({ Lang: 'ru',  CatType: "Traditions" })
      .skip((perPage * page) - perPage)
      .limit(perPage)
      .exec((err, doc) => {
        console.log(doc.length);
        if (err) throw err;
        States.find({ Lang: 'ru',  CatType: "Traditions" })
        .count()
        .exec((err, count) => {
        res.render('cat_item', {
          title: 'Gyumri',
          pages: Math.ceil(count / perPage),
          perPage:perPage,
          menu: menu,
          Link:"traditionspages",
          doc: doc,
          err: '',
          user_id: req.session.user_id
        });
      });
    });
    })
      break;
    case 'hy':  // for hy lang

    Menu.findOne({ Lang: 'hy' }, function (err, menu) {
      if (err) throw err;
      States.find({ Lang: 'hy',  CatType: "Traditions" })
      .skip((perPage * page) - perPage)
      .limit(perPage)
      .exec((err, doc) => {
        console.log(doc.length);
        if (err) throw err;
        States.find({ Lang: 'hy',  CatType: "Traditions" })
        .count()
        .exec((err, count) => {
        res.render('cat_item', {
          title: 'Gyumri',
          pages: Math.ceil(count / perPage),
          perPage:perPage,
          menu: menu,
          Link:"traditionspages",
          doc: doc,
          err: '',
          user_id: req.session.user_id
        });
      });
    });
    })
      break;
    default:
    Menu.findOne({ Lang: 'en' }, function (err, menu) {
      if (err) throw err;
      States.find({ Lang: 'en',  CatType: "Traditions" })
      .skip((perPage * page) - perPage)
      .limit(perPage)
      .exec((err, doc) => {
        console.log(doc.length);
        if (err) throw err;
        States.find({ Lang: 'en',  CatType: "Traditions" })
        .count()
        .exec((err, count) => {
        res.render('cat_item', {
          title: 'Gyumri',
          pages: Math.ceil(count / perPage),
          perPage:perPage,
          menu: menu,
          Link:"traditionspages",
          doc: doc,
          err: '',
          user_id: req.session.user_id
        });
      });
    });
    })
      break;
  }
});






router.get('/traditions/:name', function (req, res, next) {
  switch (req.session.lang) {
    case 'en':  //  for en lang
      Menu.findOne({ Lang: 'en' }, function (err, menu) {
        if (err) throw err;
        States.find({ Lang: 'en', Link: `/${req.params.name}` }, function (err, doc) {
          if (err) throw err;
          res.render('each_state', {
            title: 'Gyumri',
            menu: menu,
            doc: doc,
            err: '',
            user_id: req.session.user_id
          });
        });
      });
      break;

    case 'ru':  // for ru lang

      Menu.findOne({ Lang: 'ru' }, function (err, menu) {
        if (err) throw err;
        States.find({ Lang: 'ru',  Link: `/${req.params.name}` }, function (err, doc) {
          if (err) throw err;
          res.render('each_state', {
            title: 'Gyumri',
            menu: menu,
            doc: doc,
            err: '',
            user_id: req.session.user_id
          });
        });
      });
      break;
    case 'hy':  // for hy lang

      Menu.findOne({ Lang: 'hy' }, function (err, menu) {
        if (err) throw err;
        States.find({ Lang: 'hy',  Link: `/${req.params.name}` }, function (err, doc) {
          if (err) throw err;
          res.render('each_state', {
            title: 'Gyumri',
            menu: menu,
            doc: doc,
            err: '',
            user_id: req.session.user_id
          });
        });
      });
      break;
    default:
      Menu.findOne({ Lang: 'en' }, function (err, menu) {
        if (err) throw err;

        States.find({ Lang: 'en',  Link: `/${req.params.name}` }, function (err, doc) {
          if (err) throw err;
          res.render('each_state', {
            title: 'Gyumri',
            menu: menu,
            doc: doc,
            err: '',
            user_id: req.session.user_id
          });
        });
      });
      break;
  }
});

router.get('/oldandnew/:name', function (req, res, next) {
  switch (req.session.lang) {
    case 'en':  //  for en lang
      Menu.findOne({ Lang: 'en' }, function (err, menu) {
        if (err) throw err;
        States.find({ Lang: 'en', Link: `/${req.params.name}` }, function (err, doc) {
          if (err) throw err;
          res.render('each_state', {
            title: 'Gyumri',
            menu: menu,
            doc: doc,
            err: '',
            user_id: req.session.user_id
          });
        });
      });
      break;

    case 'ru':  // for ru lang

      Menu.findOne({ Lang: 'ru' }, function (err, menu) {
        if (err) throw err;
        States.find({ Lang: 'ru',  Link: `/${req.params.name}` }, function (err, doc) {
          if (err) throw err;
          res.render('each_state', {
            title: 'Gyumri',
            menu: menu,
            doc: doc,
            err: '',
            user_id: req.session.user_id
          });
        });
      });
      break;
    case 'hy':  // for hy lang

      Menu.findOne({ Lang: 'hy' }, function (err, menu) {
        if (err) throw err;
        States.find({ Lang: 'hy',  Link: `/${req.params.name}` }, function (err, doc) {
          if (err) throw err;
          res.render('each_state', {
            title: 'Gyumri',
            menu: menu,
            doc: doc,
            err: '',
            user_id: req.session.user_id
          });
        });
      });
      break;
    default:
      Menu.findOne({ Lang: 'en' }, function (err, menu) {
        if (err) throw err;

        States.find({ Lang: 'en',  Link: `/${req.params.name}` }, function (err, doc) {
          if (err) throw err;
          res.render('each_state', {
            title: 'Gyumri',
            menu: menu,
            doc: doc,
            err: '',
            user_id: req.session.user_id
          });
        });
      });
      break;
  }
});

router.get('/churches/:name', function (req, res, next) {
  switch (req.session.lang) {
    case 'en':  //  for en lang
      Menu.findOne({ Lang: 'en' }, function (err, menu) {
        if (err) throw err;
        States.find({ Lang: 'en', Link: `/${req.params.name}` }, function (err, doc) {
          if (err) throw err;
          res.render('each_state', {
            title: 'Gyumri',
            menu: menu,
            doc: doc,
            err: '',
            user_id: req.session.user_id
          });
        });
      });
      break;

    case 'ru':  // for ru lang

      Menu.findOne({ Lang: 'ru' }, function (err, menu) {
        if (err) throw err;
        States.find({ Lang: 'ru',  Link: `/${req.params.name}` }, function (err, doc) {
          if (err) throw err;
          res.render('each_state', {
            title: 'Gyumri',
            menu: menu,
            doc: doc,
            err: '',
            user_id: req.session.user_id
          });
        });
      });
      break;
    case 'hy':  // for hy lang

      Menu.findOne({ Lang: 'hy' }, function (err, menu) {
        if (err) throw err;
        States.find({ Lang: 'hy',  Link: `/${req.params.name}` }, function (err, doc) {
          if (err) throw err;
          res.render('each_state', {
            title: 'Gyumri',
            menu: menu,
            doc: doc,
            err: '',
            user_id: req.session.user_id
          });
        });
      });
      break;
    default:
      Menu.findOne({ Lang: 'en' }, function (err, menu) {
        if (err) throw err;

        States.find({ Lang: 'en',  Link: `/${req.params.name}` }, function (err, doc) {
          if (err) throw err;
          res.render('each_state', {
            title: 'Gyumri',
            menu: menu,
            doc: doc,
            err: '',
            user_id: req.session.user_id
          });
        });
      });
      break;
  }
});


router.get('/teatre/:name', function (req, res, next) {
  switch (req.session.lang) {
    case 'en':  //  for en lang
      Menu.findOne({ Lang: 'en' }, function (err, menu) {
        if (err) throw err;
        States.find({ Lang: 'en', Link: `/${req.params.name}` }, function (err, doc) {
          if (err) throw err;
          res.render('each_state', {
            title: 'Gyumri',
            menu: menu,
            doc: doc,
            err: '',
            user_id: req.session.user_id
          });
        });
      });
      break;

    case 'ru':  // for ru lang

      Menu.findOne({ Lang: 'ru' }, function (err, menu) {
        if (err) throw err;
        States.find({ Lang: 'ru',  Link: `/${req.params.name}` }, function (err, doc) {
          if (err) throw err;
          res.render('each_state', {
            title: 'Gyumri',
            menu: menu,
            doc: doc,
            err: '',
            user_id: req.session.user_id
          });
        });
      });
      break;
    case 'hy':  // for hy lang

      Menu.findOne({ Lang: 'hy' }, function (err, menu) {
        if (err) throw err;
        States.find({ Lang: 'hy',  Link: `/${req.params.name}` }, function (err, doc) {
          if (err) throw err;
          res.render('each_state', {
            title: 'Gyumri',
            menu: menu,
            doc: doc,
            err: '',
            user_id: req.session.user_id
          });
        });
      });
      break;
    default:
      Menu.findOne({ Lang: 'en' }, function (err, menu) {
        if (err) throw err;

        States.find({ Lang: 'en',  Link: `/${req.params.name}` }, function (err, doc) {
          if (err) throw err;
          res.render('each_state', {
            title: 'Gyumri',
            menu: menu,
            doc: doc,
            err: '',
            user_id: req.session.user_id
          });
        });
      });
      break;
  }
});

router.get('/famous/:name', function (req, res, next) {
  switch (req.session.lang) {
    case 'en':  //  for en lang
      Menu.findOne({ Lang: 'en' }, function (err, menu) {
        if (err) throw err;
        States.find({ Lang: 'en', Link: `/${req.params.name}` }, function (err, doc) {
          if (err) throw err;
          res.render('each_state', {
            title: 'Gyumri',
            menu: menu,
            doc: doc,
            err: '',
            user_id: req.session.user_id
          });
        });
      });
      break;

    case 'ru':  // for ru lang

      Menu.findOne({ Lang: 'ru' }, function (err, menu) {
        if (err) throw err;
        States.find({ Lang: 'ru',  Link: `/${req.params.name}` }, function (err, doc) {
          if (err) throw err;
          res.render('each_state', {
            title: 'Gyumri',
            menu: menu,
            doc: doc,
            err: '',
            user_id: req.session.user_id
          });
        });
      });
      break;
    case 'hy':  // for hy lang

      Menu.findOne({ Lang: 'hy' }, function (err, menu) {
        if (err) throw err;
        States.find({ Lang: 'hy',  Link: `/${req.params.name}` }, function (err, doc) {
          if (err) throw err;
          res.render('each_state', {
            title: 'Gyumri',
            menu: menu,
            doc: doc,
            err: '',
            user_id: req.session.user_id
          });
        });
      });
      break;
    default:
      Menu.findOne({ Lang: 'en' }, function (err, menu) {
        if (err) throw err;

        States.find({ Lang: 'en',  Link: `/${req.params.name}` }, function (err, doc) {
          if (err) throw err;
          res.render('each_state', {
            title: 'Gyumri',
            menu: menu,
            doc: doc,
            err: '',
            user_id: req.session.user_id
          });
        });
      });
      break;
  }
});

router.get('/hotel/:name', function (req, res, next) {
  switch (req.session.lang) {
    case 'en':  //  for en lang
      Menu.findOne({ Lang: 'en' }, function (err, menu) {
        if (err) throw err;
        States.find({ Lang: 'en', Link: `/${req.params.name}` }, function (err, doc) {
          if (err) throw err;
          res.render('each_state', {
            title: 'Gyumri',
            menu: menu,
            doc: doc,
            err: '',
            user_id: req.session.user_id
          });
        });
      });
      break;

    case 'ru':  // for ru lang

      Menu.findOne({ Lang: 'ru' }, function (err, menu) {
        if (err) throw err;
        States.find({ Lang: 'ru',  Link: `/${req.params.name}` }, function (err, doc) {
          if (err) throw err;
          res.render('each_state', {
            title: 'Gyumri',
            menu: menu,
            doc: doc,
            err: '',
            user_id: req.session.user_id
          });
        });
      });
      break;
    case 'hy':  // for hy lang

      Menu.findOne({ Lang: 'hy' }, function (err, menu) {
        if (err) throw err;
        States.find({ Lang: 'hy',  Link: `/${req.params.name}` }, function (err, doc) {
          if (err) throw err;
          res.render('each_state', {
            title: 'Gyumri',
            menu: menu,
            doc: doc,
            err: '',
            user_id: req.session.user_id
          });
        });
      });
      break;
    default:
      Menu.findOne({ Lang: 'en' }, function (err, menu) {
        if (err) throw err;
        States.find({ Lang: 'en',  Link: `/${req.params.name}` }, function (err, doc) {
          if (err) throw err;
          res.render('each_state', {
            title: 'Gyumri',
            menu: menu,
            doc: doc,
            err: '',
            user_id: req.session.user_id
          });
        });
      });
      break;
  }
});
router.get('/oldandnewpages/:page', function(req, res, next) {
let page = req.params.page ;
    switch (req.session.lang) {
      case 'en':  //  for en lang
    Menu.findOne({ Lang: 'en' }, function (err, menu) {
      if (err) throw err;
      States.find({ Lang: 'en',  CatType: "Old and New Gyumri" })
      .skip((perPage * page) - perPage)
      .limit(perPage)
      .exec((err, doc) => {
        if (err) throw err;
        States.find({ Lang: 'en',  CatType: "Old and New Gyumri" }).count().exec((err, count) => {
          console.log(count);
        res.render('cat_item', {
          title: 'Gyumri',
          Link:"oldandnewpages",
          page: page,
          pages:Math.ceil(count / perPage),
          menu: menu,
          doc: doc,
          err: '',
          user_id: req.session.user_id
        });
      });
    });
  })
    break;
    case 'ru':  //  for en lang
  Menu.findOne({ Lang: 'ru' }, function (err, menu) {
    if (err) throw err;
    States.find({ Lang: 'ru',  CatType: "Old and New Gyumri" })
    .skip((perPage * page) - perPage)
    .limit(perPage)
    .exec((err, doc) => {
      if (err) throw err;
      States.find({ Lang: 'ru',  CatType: "Old and New Gyumri" }).count().exec((err, count) => {
      res.render('cat_item', {
        title: 'Gyumri',
        page: page,
        pages: Math.ceil(count / perPage),
        menu: menu,
        Link:"oldandnewpages",
        doc: doc,
        err: '',
        user_id: req.session.user_id
      });
    });
  });
})
  break;
  case 'hy':  //  for en lang
  Menu.findOne({ Lang: 'hy' }, function (err, menu) {
    if (err) throw err;
    States.find({ Lang: 'hy',  CatType: "Old and New Gyumri" })
    .skip((perPage * page) - perPage)
    .limit(perPage)
    .exec((err, doc) => {
      if (err) throw err;
      States.find({ Lang: 'hy',  CatType: "Old and New Gyumri" }).count().exec((err, count) => {
      res.render('cat_item', {
        title: 'Gyumri',
        page: page,
        pages: Math.ceil(count / perPage),
        menu: menu,
        Link:"oldandnewpages",
        doc: doc,
        err: '',
        user_id: req.session.user_id
      });
    });
  });
  })
break;
default:  //  for en lang
Menu.findOne({ Lang: 'en' }, function (err, menu) {
  if (err) throw err;
  States.find({ Lang: 'en',  CatType: "Old and New Gyumri" })
  .skip((perPage * page) - perPage)
  .limit(perPage)
  .exec((err, doc) => {
    if (err) throw err;
    States.find({ Lang: 'en',  CatType: "Old and New Gyumri" }).count().exec((err, count) => {
      console.log(count);
    res.render('cat_item', {
      title: 'Gyumri',
      Link:"oldandnewpages",
      page: page,
      pages:Math.ceil(count / perPage),
      menu: menu,
      doc: doc,
      err: '',
      user_id: req.session.user_id
    });
  });
});
})
break;
    }
})
router.get('/churchespages/:page', function(req, res, next) {
let page = req.params.page ;
    switch (req.session.lang) {
      case 'en':  //  for en lang
    Menu.findOne({ Lang: 'en' }, function (err, menu) {
      if (err) throw err;
      States.find({ Lang: 'en',  CatType: "Churches" })
      .skip((perPage * page) - perPage)
      .limit(perPage)
      .exec((err, doc) => {
        if (err) throw err;
        States.find({ Lang: 'en',  CatType: "Churches" }).count().exec((err, count) => {
          console.log(count);
        res.render('cat_item', {
          title: 'Gyumri',
          page: page,
          pages:Math.ceil(count / perPage),
          menu: menu,
          Link:"churchespages",
          doc: doc,
          err: '',
          user_id: req.session.user_id
        });
      });
    });
  })
    break;
    case 'ru':  //  for en lang
  Menu.findOne({ Lang: 'ru' }, function (err, menu) {
    if (err) throw err;
    States.find({ Lang: 'ru',  CatType: "Churches" })
    .skip((perPage * page) - perPage)
    .limit(perPage)
    .exec((err, doc) => {
      if (err) throw err;
      States.find({ Lang: 'ru',  CatType: "Churches" }).count().exec((err, count) => {
      res.render('cat_item', {
        title: 'Gyumri',
        page: page,
        pages: Math.ceil(count / perPage),
        menu: menu,
        Link:"churchespages",
        doc: doc,
        err: '',
        user_id: req.session.user_id
      });
    });
  });
})
  break;
  case 'hy':  //  for en lang
  Menu.findOne({ Lang: 'hy' }, function (err, menu) {
    if (err) throw err;
    States.find({ Lang: 'hy',  CatType: "Churches" })
    .skip((perPage * page) - perPage)
    .limit(perPage)
    .exec((err, doc) => {
      if (err) throw err;
      States.find({ Lang: 'hy',  CatType: "Churches" }).count().exec((err, count) => {
      res.render('cat_item', {
        title: 'Gyumri',
        page: page,
        pages: Math.ceil(count / perPage),
        menu: menu,
        Link:"churchespages",
        doc: doc,
        err: '',
        user_id: req.session.user_id
      });
    });
  });
  })
break;
default:  //  for en lang
Menu.findOne({ Lang: 'en' }, function (err, menu) {
  if (err) throw err;
  States.find({ Lang: 'en',  CatType: "Churches" })
  .skip((perPage * page) - perPage)
  .limit(perPage)
  .exec((err, doc) => {
    if (err) throw err;
    States.find({ Lang: 'en',  CatType: "Churches" }).count().exec((err, count) => {
      console.log(count);
    res.render('cat_item', {
      title: 'Gyumri',
      page: page,
      pages:Math.ceil(count / perPage),
      menu: menu,
      Link:"churchespages",
      doc: doc,
      err: '',
      user_id: req.session.user_id
    });
  });
});
})
break;
    }
})

router.get('/famouspages/:page', function(req, res, next) {
let page = req.params.page ;
    switch (req.session.lang) {
      case 'en':  //  for en lang
    Menu.findOne({ Lang: 'en' }, function (err, menu) {
      if (err) throw err;
      States.find({ Lang: 'en',  CatType: "Famous People" })
      .skip((perPage * page) - perPage)
      .limit(perPage)
      .exec((err, doc) => {
        if (err) throw err;
        States.find({ Lang: 'en',  CatType: "Famous People" }).count().exec((err, count) => {
          console.log(count);
        res.render('cat_item', {
          title: 'Gyumri',
          page: page,
          pages:Math.ceil(count / perPage),
          menu: menu,
          Link:"famouspages",
          doc: doc,
          err: '',
          user_id: req.session.user_id
        });
      });
    });
  })
    break;
    case 'ru':  //  for en lang
  Menu.findOne({ Lang: 'ru' }, function (err, menu) {
    if (err) throw err;
    States.find({ Lang: 'ru',  CatType: "Famous People" })
    .skip((perPage * page) - perPage)
    .limit(perPage)
    .exec((err, doc) => {
      if (err) throw err;
      States.find({ Lang: 'ru',  CatType: "Famous People" }).count().exec((err, count) => {
      res.render('cat_item', {
        title: 'Gyumri',
        page: page,
        pages: Math.ceil(count / perPage),
        menu: menu,
        Link:"famouspages",
        doc: doc,
        err: '',
        user_id: req.session.user_id
      });
    });
  });
})
  break;
  case 'hy':  //  for en lang
  Menu.findOne({ Lang: 'hy' }, function (err, menu) {
    if (err) throw err;
    States.find({ Lang: 'hy',  CatType: "Famous People" })
    .skip((perPage * page) - perPage)
    .limit(perPage)
    .exec((err, doc) => {
      if (err) throw err;
      States.find({ Lang: 'hy',  CatType: "Famous People" }).count().exec((err, count) => {
      res.render('cat_item', {
        title: 'Gyumri',
        page: page,
        pages: Math.ceil(count / perPage),
        menu: menu,
        Link:"famouspages",
        doc: doc,
        err: '',
        user_id: req.session.user_id
      });
    });
  });
  })
break;
default:  //  for en lang
Menu.findOne({ Lang: 'en' }, function (err, menu) {
  if (err) throw err;
  States.find({ Lang: 'en',  CatType: "Famous People" })
  .skip((perPage * page) - perPage)
  .limit(perPage)
  .exec((err, doc) => {
    if (err) throw err;
    States.find({ Lang: 'en',  CatType: "Famous People" }).count().exec((err, count) => {
      console.log(count);
    res.render('cat_item', {
      title: 'Gyumri',
      page: page,
      pages:Math.ceil(count / perPage),
      menu: menu,
      Link:"famouspages",
      doc: doc,
      err: '',
      user_id: req.session.user_id
    });
  });
});
})
break;
    }
})
router.get('/teatrepages/:page', function(req, res, next) {
let page = req.params.page ;
    switch (req.session.lang) {
      case 'en':  //  for en lang
    Menu.findOne({ Lang: 'en' }, function (err, menu) {
      if (err) throw err;
      States.find({ Lang: 'en',  CatType: "Theatre and film" })
      .skip((perPage * page) - perPage)
      .limit(perPage)
      .exec((err, doc) => {
        if (err) throw err;
        States.find({ Lang: 'en',  CatType: "Theatre and film" }).count().exec((err, count) => {
          console.log(count);
        res.render('cat_item', {
          title: 'Gyumri',
          page: page,
          pages:Math.ceil(count / perPage),
          menu: menu,
          Link:"teatrepages",
          doc: doc,
          err: '',
          user_id: req.session.user_id
        });
      });
    });
  })
    break;
    case 'ru':  //  for en lang
  Menu.findOne({ Lang: 'ru' }, function (err, menu) {
    if (err) throw err;
    States.find({ Lang: 'ru',  CatType: "Theatre and film" })
    .skip((perPage * page) - perPage)
    .limit(perPage)
    .exec((err, doc) => {
      if (err) throw err;
      States.find({ Lang: 'ru',  CatType: "Theatre and film" }).count().exec((err, count) => {
      res.render('cat_item', {
        title: 'Gyumri',
        page: page,
        pages: Math.ceil(count / perPage),
        menu: menu,
        Link:"teatrepages",
        doc: doc,
        err: '',
        user_id: req.session.user_id
      });
    });
  });
})
  break;
  case 'hy':  //  for en lang
  Menu.findOne({ Lang: 'hy' }, function (err, menu) {
    if (err) throw err;
    States.find({ Lang: 'hy',  CatType: "Theatre and film" })
    .skip((perPage * page) - perPage)
    .limit(perPage)
    .exec((err, doc) => {
      if (err) throw err;
      States.find({ Lang: 'hy',  CatType: "Theatre and film" }).count().exec((err, count) => {
      res.render('cat_item', {
        title: 'Gyumri',
        page: page,
        pages: Math.ceil(count / perPage),
        menu: menu,
        Link:"teatrepages",
        doc: doc,
        err: '',
        user_id: req.session.user_id
      });
    });
  });
  })
break;
default:  //  for en lang
Menu.findOne({ Lang: 'en' }, function (err, menu) {
  if (err) throw err;
  States.find({ Lang: 'en',  CatType: "Theatre and film" })
  .skip((perPage * page) - perPage)
  .limit(perPage)
  .exec((err, doc) => {
    if (err) throw err;
    States.find({ Lang: 'en',  CatType: "Theatre and film" }).count().exec((err, count) => {
      console.log(count);
    res.render('cat_item', {
      title: 'Gyumri',
      page: page,
      pages:Math.ceil(count / perPage),
      menu: menu,
      Link:"teatrepages",
      doc: doc,
      err: '',
      user_id: req.session.user_id
    });
  });
});
})
break;
    }
})
router.get('/traditionspages/:page', function(req, res, next) {
let page = req.params.page ;
    switch (req.session.lang) {
      case 'en':  //  for en lang
      Menu.findOne({ Lang: 'en' }, function (err, menu) {
        if (err) throw err;
        States.find({ Lang: 'en',  CatType: "Traditions" })
        .skip((perPage * page) - perPage)
        .limit(perPage)
        .exec((err, doc) => {
          if (err) throw err;
          States.find({ Lang: 'en',  CatType: "Traditions" }).count().exec((err, count) => {
            console.log(count);
          res.render('cat_item', {
            title: 'Gyumri',
            page: page,
            pages:Math.ceil(count / perPage),
            menu: menu,
            Link:"traditionspages",
            doc: doc,
            err: '',
            user_id: req.session.user_id
          });
        });
      });
      })
    break;
    case 'ru':  //  for en lang
    Menu.findOne({ Lang: 'ru' }, function (err, menu) {
      if (err) throw err;
      States.find({ Lang: 'ru',  CatType: "Traditions" })
      .skip((perPage * page) - perPage)
      .limit(perPage)
      .exec((err, doc) => {
        if (err) throw err;
        States.find({ Lang: 'ru',  CatType: "Traditions" }).count().exec((err, count) => {
          console.log(count);
        res.render('cat_item', {
          title: 'Gyumri',
          page: page,
          pages:Math.ceil(count / perPage),
          menu: menu,
          Link:"traditionspages",
          doc: doc,
          err: '',
          user_id: req.session.user_id
        });
      });
    });
    })
  break;
  case 'hy':  //  for en lang
  Menu.findOne({ Lang: 'hy' }, function (err, menu) {
    if (err) throw err;
    States.find({ Lang: 'hy',  CatType: "Traditions" })
    .skip((perPage * page) - perPage)
    .limit(perPage)
    .exec((err, doc) => {
      if (err) throw err;
      States.find({ Lang: 'hy',  CatType: "Traditions" }).count().exec((err, count) => {
        console.log(count);
      res.render('cat_item', {
        title: 'Gyumri',
        page: page,
        pages:Math.ceil(count / perPage),
        menu: menu,
        Link:"traditionspages",
        doc: doc,
        err: '',
        user_id: req.session.user_id
      });
    });
  });
  })
break;
default:  //  for en lang
Menu.findOne({ Lang: 'en' }, function (err, menu) {
  if (err) throw err;
  States.find({ Lang: 'en',  CatType: "Traditions" })
  .skip((perPage * page) - perPage)
  .limit(perPage)
  .exec((err, doc) => {
    if (err) throw err;
    States.find({ Lang: 'en',  CatType: "Traditions" }).count().exec((err, count) => {
      console.log(count);
    res.render('cat_item', {
      title: 'Gyumri',
      page: page,
      pages:Math.ceil(count / perPage),
      menu: menu,
      Link:"traditionspages",
      doc: doc,
      err: '',
      user_id: req.session.user_id
    });
  });
});
})
break;
    }
})
router.get('/hotelpages/:page', function(req, res, next) {
let page = req.params.page ;
    switch (req.session.lang) {
      case 'en':  //  for en lang
      Menu.findOne({ Lang: 'en' }, function (err, menu) {
        if (err) throw err;
        States.find({ Lang: 'en',  CatType: "Restaurants and hotels" })
        .skip((perPage * page) - perPage)
        .limit(perPage)
        .exec((err, doc) => {
          if (err) throw err;
          States.find({ Lang: 'en',  CatType: "Restaurants and hotels" }).count().exec((err, count) => {
            console.log(count);
          res.render('cat_item', {
            title: 'Gyumri',
            page: page,
            pages:Math.ceil(count / perPage),
            menu: menu,
            Link:"hotelpages",
            doc: doc,
            err: '',
            user_id: req.session.user_id
          });
        });
      });
      })
    break;
    case 'ru':  //  for en lang
    Menu.findOne({ Lang: 'ru' }, function (err, menu) {
      if (err) throw err;
      States.find({ Lang: 'ru',  CatType: "Restaurants and hotels" })
      .skip((perPage * page) - perPage)
      .limit(perPage)
      .exec((err, doc) => {
        if (err) throw err;
        States.find({ Lang: 'ru',  CatType: "Restaurants and hotels" }).count().exec((err, count) => {
          console.log(count);
        res.render('cat_item', {
          title: 'Gyumri',
          page: page,
          pages:Math.ceil(count / perPage),
          menu: menu,
          Link:"hotelpages",
          doc: doc,
          err: '',
          user_id: req.session.user_id
        });
      });
    });
    })
  break;
  case 'hy':  //  for en lang
  Menu.findOne({ Lang: 'hy' }, function (err, menu) {
    if (err) throw err;
    States.find({ Lang: 'hy',  CatType: "Restaurants and hotels" })
    .skip((perPage * page) - perPage)
    .limit(perPage)
    .exec((err, doc) => {
      if (err) throw err;
      States.find({ Lang: 'hy',  CatType: "Restaurants and hotels" }).count().exec((err, count) => {
        console.log(count);
      res.render('cat_item', {
        title: 'Gyumri',
        page: page,
        pages:Math.ceil(count / perPage),
        menu: menu,
        Link:"hotelpages",
        doc: doc,
        err: '',
        user_id: req.session.user_id
      });
    });
  });
  })
break;
default:  //  for en lang
Menu.findOne({ Lang: 'en' }, function (err, menu) {
  if (err) throw err;
  States.find({ Lang: 'en',  CatType: "Restaurants and hotels" })
  .skip((perPage * page) - perPage)
  .limit(perPage)
  .exec((err, doc) => {
    if (err) throw err;
    States.find({ Lang: 'en',  CatType: "Restaurants and hotels" }).count().exec((err, count) => {
      console.log(count);
    res.render('cat_item', {
      title: 'Gyumri',
      page: page,
      pages:Math.ceil(count / perPage),
      menu: menu,
      Link:"hotelpages",
      doc: doc,
      err: '',
      user_id: req.session.user_id
    });
  });
});
})
break;
    }
})
module.exports = router;
