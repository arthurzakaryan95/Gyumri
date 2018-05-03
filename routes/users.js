const express = require('express');
const router = express.Router();

const User = require('../model/scemas/users');
const News = require('../model/scemas/schema_users_news');
const Content = require('../model/scemas/schema_contents');
const Menu = Content.Menu;
const Category = Content.Category;



router.post("/regist", (req, res, next) => {
	let newUser = new User(req.body);
	console.log(newUser);
	newUser.save().then(() => {
		console.log("ok");
		res.send(req.body);
	}).catch((err) => {
		console.log(err);
		res.send(err);
	});
});

router.get('/news', (req, res, next) => {
	Menu.findOne({ Lang: 'en' }, function (err, menu) {
		if (err) throw err;
		News.find({}, function (err, st) {
			if (err) throw err;
			let state = [];
			st.forEach((each) => {
				state.push(each);
			});
			res.render('news', {
				title: 'Gyumri',
				menu: menu,
				state: state,
				err: '',
				user_id: req.session.user_id
			});
		});
	});
});

router.post("/login", (req, res, next) => {
	let login = req.body.login;
	let password = req.body.pass;
	User.findOne({ "email": `${login}` }, function (err, docs) {
		if (err) throw err;
		if (docs != null) {
			if (docs.checkPassword(password)) {
				req.session.user_id = docs._id
				res.redirect('/');
			}

		} else {
			req.session.name = "";

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
								err: "Incorrect email or password",
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
								err: 'Неверный адрес электронной почты или пароль',
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
								err: 'սխալ էլ. փոստ կամ գաղտնաբառ',
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
							console.log(cat);
							res.render('index', {
								title: 'Gyumri',
								menu: menu,
								cat: cat,
								err: "Incorrect email or password",
								user_id: req.session.user_id
							});
						});
					});
					break;
			}
		}
	})
});

router.get('/exit', (req, res, next) => {
	req.session.destroy((err) => {
		if (err) throw err;
	});
	res.redirect('/');
});

router.post("/addnews", (req, res, next) => {
	let newNews = new News(req.body);
	console.log(newNews);
	newNews.save().then(() => {
		console.log("ok");
		res.send(req.body);
	}).catch((err) => {
		console.log(err);
		res.send(err);
	});
});


module.exports = router;
