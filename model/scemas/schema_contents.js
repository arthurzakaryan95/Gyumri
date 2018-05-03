const db = require('../db');
const mongoosePaginate = require('mongoose-paginate');


/////////////////////
//  Menu schema ////
////////////////////


const MenuSchema = new db.Schema({
  Sign_In: {
    type: String,
    charset: "UTF8"
  },
  Contact: {
    type: String,
    charset: "UTF8"
  },
  News: {
    type: String,
    charset: "UTF8"
  },
  Sign_Up: {
    type: String,
    charset: "UTF8"
  },
  Home: {
    type: String,
    charset: "UTF8"
  },
  About: {
    type: String,
    charset: "UTF8"
  },
  LogOut: {
    type: String,
    charset: "UTF8"
  },
  UNews: {
    type: String,
    charset: "UTF8"
  },
  Lang: {
    type: String,
    charset: "UTF8"
  }
});
const Menu = db.model('menu', MenuSchema)


/////////////////////
//  Category schema ////
////////////////////

const CatSchema = new db.Schema({
  Name: {
    type: String,
    charset: "UTF8"
  },
  Photo: {
    type: String,
    charset: "UTF8"
  },
  Link: {
    type: String,
    charset: "UTF8"
  },
  Lang: {
    type: String,
    charset: "UTF8"
  }
});

const Category = db.model('category', CatSchema)

/////////////////////
//  content schema ////
////////////////////


const itemSchema = new db.Schema({
  Title:{
    type:String,
    charset:"UTF8"
  },
  Content:{
    type:String,
    charset:"UTF8"
  },
  Photo1:{
    type:String,
    charset:"UTF8"
  },
  Photo2:{
    type:String,
    charset:"UTF8"
  },
  Photo3:{
    type:String,
    charset:"UTF8"
  },
  Video:{
    type:String,
    charset:"UTF8"
  },
  CatType:{
    type:String,
    charset:"UTF8"
  },
  Href:{
    type:String,
    charset:"UTF8"
  },
  Link:{
    type:String,
    charset:"UTF8"
  },
  Lang:{
    type:String,
    charset:"UTF8"
  }
});
itemSchema.plugin(mongoosePaginate);

const States = db.model('item', itemSchema)

/////////////////////////
// About  schema    ////
///////////////////////

const AboutSchema = new db.Schema({
  Title: {
    type: String,
    charset: "UTF8"
  },
  Content: {
    type: String,
    charset: "UTF8"
  },
  Lang: {
    type: String,
    charset: "UTF8"
  }
});

const About = db.model('about', AboutSchema)




module.exports = {
  Menu: Menu,
  Category: Category,
  States: States,
  About: About
};
