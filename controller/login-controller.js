import User from '../model/user.js';
import express from 'express';
const app = express.Router();

app.post('/', async (request, response) => {
    try {
        if (request.body.userName && request.body.password) {
            const users = await User.find({ "userName": request.body.userName, "password": request.body.password });
            if (users.length > 0) {
                response.status(200).json(users);
            }
        }
    } catch (error) {
        response.status(500).json(error);
    }
})

export default app