const express = require('express');
const app = express();
const mongoose = require('mongoose');
const myBlog = require('./controller/blog-controller.js');
//const user = require('./controller/user-controller.js');
const thread = require('./controller/thread-controller.js');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers','Content-Type,Authorization');
    next();
});
app.use('/blog', myBlog);
//app.use('/user', user);
app.use('/thread', thread);
app.listen(3030);