import Thread from '../model/thread.js';
import express from 'express';
const app = express.Router();

export const newThread = async (request, response) => {
    try {
        const thread = await new Thread(request.body);
        thread.save();

        response.status(200).json('Thread saved successfully');
    } catch (error) {
        response.status(500).json(error);
    }
}


export const getThreads = async (request, response) => {
    try {
        const threads = await Thread.find({ blogId: request.params.id });
        
        response.status(200).json(threads);
    } catch (error) {
        response.status(500).json(error)
    }
}

export const deleteThread = async (request, response) => {
    try {
        const thread = await Thread.findById(request.params.id);
        await thread.delete()

        response.status(200).json('Thread deleted successfully');
    } catch (error) {
        response.status(500).json(error)
    }
}

// module.exports=app
export default app