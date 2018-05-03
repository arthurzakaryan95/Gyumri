const db = require('../db');
const mongoosePaginate = require('mongoose-paginate');


const Schemas = new db.Schema({
    Title: {
        type: String,
        charset: "UTF8"
     },
     Content: {
        type: String,
        charset: "UTF8"
     }
});


const Schema = db.model('usersnews', Schemas);



module.exports = Schema;