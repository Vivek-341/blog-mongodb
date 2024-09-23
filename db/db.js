// // var mongoose = require('mongoose');
// import mongoose from 'mongoose';

// var con = mongoose.createConnection('mongodb+srv://vivekvardhannada:UFSMQM0yn26DfeCu@cluster0.4xn2v.mongodb.net/');
// con.once('open', function () {  
//     console.log("Connected!");
// });
// // module.exports = mongoose
// export default con

import mongoose from 'mongoose';

const Connection = async () => {
    //const URL = `mongodb+srv://${username}:${password}@blog-app.jf6wryc.mongodb.net/?retryWrites=true&w=majority`;
    const URL=`mongodb+srv://vivekvardhannada:UFSMQM0yn26DfeCu@cluster0.4xn2v.mongodb.net/`
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('MongoDB is connected');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;