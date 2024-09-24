// import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken';
// import dotenv from 'dotenv';

// import Token from '../model/token.js'
// import User from '../model/user.js';

// dotenv.config();

// export const singupUser = async (request, response) => {
//     try {
//         // const salt = await bcrypt.genSalt();
//         // const hashedPassword = await bcrypt.hash(request.body.password, salt);
//         const hashedPassword = await bcrypt.hash(request.body.password, 10);

//         const user = { username: request.body.username, name: request.body.name, password: hashedPassword }

//         const newUser = new User(user);
//         await newUser.save();

//         return response.status(200).json({ msg: 'Signup successfull' });
//     } catch (error) {
//         return response.status(500).json({ msg: 'Error while signing up user' });
//     }
// }


// export const loginUser = async (request, response) => {
//     let user = await User.findOne({ username: request.body.username });
//     if (!user) {
//         return response.status(400).json({ msg: 'Username does not match' });
//     }

//     try {
//         let match = await bcrypt.compare(request.body.password, user.password);
//         if (match) {
//             const accessToken = jwt.sign(user.toJSON(), process.env.ACCESS_SECRET_KEY, { expiresIn: '15m'});
//             const refreshToken = jwt.sign(user.toJSON(), process.env.REFRESH_SECRET_KEY);
            
//             const newToken = new Token({ token: refreshToken });
//             await newToken.save();
        
//             response.status(200).json({ accessToken: accessToken, refreshToken: refreshToken,name: user.name, username: user.username });
        
//         } else {
//             response.status(400).json({ msg: 'Password does not match' })
//         }
//     } catch (error) {
//         response.status(500).json({ msg: 'error while login the user' })
//     }
// }

// export const logoutUser = async (request, response) => {
//     const token = request.body.token;
//     await Token.deleteOne({ token: token });

//     response.status(204).json({ msg: 'logout successfull' });
// }

import User from '../model/user.js';
import express from 'express';
const app = express.Router();


app.post('/', async (request, response) => {
    try {
        const user = new User(request.body);
        //Checks if username is same then don't save
        if (await User.findOne({ "username": request.body.username })) {
            return response.status(400).json({ msg: 'Username already exists' });
        } 
        else{
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
        const users = await User.find({});
        response.status(200).json(users);
    } catch (error) {
        response.status(500).json(error);
        }
})

export default app