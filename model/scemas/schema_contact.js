const db = require('../db');

const ContactSchema = new db.Schema({
  title: {
    type: String,
    charset: "UTF8",
    required: [true, 'Title is required']
  },
  content: {
    type: String,
    charset: "UTF8",
    required: [true, 'Content is required'],
  },
  email:{
    type: String,
    charset: "UTF8",
    required: [true, 'Mail is required'],
    match: [/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Invalid mail']
  }
});

const Contact = db.model('contact', ContactSchema)

module.exports = Contact;
