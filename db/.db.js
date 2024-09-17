var mongoose = require('mongoose');

var con = mongoose.createConnection('mongodb+srv://vivekvardhannada:UFSMQM0yn26DfeCu@cluster0.4xn2v.mongodb.net/');
con.once('open', function () {  
    console.log("Connected!");
});
module.exports = mongoose