import User from '../model/user.js';
import express from 'express';
const app = express.Router();


app.post('/', async (request, response) => {
    try {
        const user = new User(request.body);
        //Checks if userName is same then don't save
        if (await User.findOne({ "userName": request.body.userName })) {
            return response.status(400).json({ msg: 'userName already exists' });
        }
        else {
            user.save();
            response.status(200).json('User saved successfully');
        }
    } catch (error) {
        response.status(500).json(error);
    }
})

app.put('/:id', async (request, response) => {
    try {
        const user = await User.findById(request.params.id);
        await User.updateOne({ "_id": request.params.id }, { $set: request.body });
        response.status(200).json('User updated successfully');
    } catch (error) {
        response.status(500).json(error);
    }
})

app.delete('/:id', async (request, response) => {
    try {
        const user = await User.findById(request.params.id);
        await user.deleteOne({ "_id": request.params.id });
        response.status(200).json('User deleted successfully');
    } catch (error) {
        response.status(500).json(error);
    }
})

app.get('/', async (request, response) => {
    try {
        if (request.body.userName && request.body.password) {
            const users = await User.find({ "userName": request.body.userName, "password": request.body.password });
            if (users.length > 0) {
                response.status(200).json({ msg: "User found" });
            } else {
                response.status(400).json({ msg: "User not found" });
            }
        }
        else {
            const users = await User.find({});
            response.status(200).json(users);
        }
    } catch (error) {
        response.status(500).json(error);
    }
})

export default app