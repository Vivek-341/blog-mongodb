import express from 'express';
import myBlog from './controller/blog-controller.js';
import user from './controller/user-controller.js';
import thread from './controller/thread-controller.js';
import bodyParser from 'body-parser';
import Connection from './db/db.js';
import login from './controller/login-controller.js';
const app = express();
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
    next();
});
app.use('/blog', myBlog);
app.use('/user', user);
app.use('/thread', thread);
app.use('/login', login);
Connection();
app.listen(3030);