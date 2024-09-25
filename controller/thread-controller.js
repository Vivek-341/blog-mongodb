import Thread from '../model/thread.js';
import express from 'express';
const app = express.Router();

// export const newThread = async (request, response) => {
app.post('/', async (request, response) => {


    try {
        const thread = await new Thread(request.body);
        thread.save();

        response.status(200).json('Thread saved successfully');
    } catch (error) {
        console.log(error)
        response.status(500).json(error);
    }
})

app.put('/:id', async (request, response) => {
    try {
        const thread = await Thread.findById(request.params.id);
        await Thread.updateOne({ "_id": request.params.id }, { $set: request.body });
        response.status(200).json('Thread updated successfully');
    } catch (error) {
        response.status(500).json(error);
    }
})

// export const getThreads = async (request, response) => {
app.get('/:id', async (request, response) => {
    try {
        const threads = await Thread.find({ blogId: request.params.id });

        response.status(200).json(threads);
    } catch (error) {
        response.status(500).json(error)
    }
})

app.get('/', async (request, response) => {
    try {
        const threads = await Thread.find();

        response.status(200).json(threads);
    } catch (error) {
        response.status(500).json(error)
    }
})
//export const deleteThread = async (request, response) => {
app.delete('/:id', async (request, response) => {
    console.log(request.params.id);
    try {
        const thread = await Thread.findById(request.params.id);
        await thread.deleteOne({ "_id": request.params.id });

        response.status(200).json('Thread deleted successfully');
    } catch (error) {
        response.status(500).json(error)
    }
})

// app.delete('/blog/:id', async (request, response) => {
//     try {
//         await Thread.deleteMany({ blogId: request.params.id });
//         response.status(200).json('All threads deleted successfully');
//     } catch (error) {
//         response.status(500).json(error)
//     }
// })

export default app