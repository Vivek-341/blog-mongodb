import Blog from '../model/blog.js';
import express from 'express';

const app = express.Router();

app.post('/', async (request, response) => {
    try {
        const Mblog = await new Blog(request.body);
        Mblog.save();

        response.status(200).json('Blog saved successfully');
    } catch (error) {
        response.status(500).json(error);
    }
})

app.put('/:id', async (request, response) => {
    try {
        const blog = await Blog.findById(request.params.id);
        await Blog.updateOne({ "_id": request.params.id }, { $set: request.body });
        response.status(200).json('Blog updated successfully');
    } catch (error) {
        response.status(500).json(error);
    }
})

app.delete('/:id', async (request, response) => {
    try {
        const blog = await Blog.findById(request.params.id);
        await blog.deleteOne({ "_id": request.params.id });
        response.status(200).json('Blog deleted successfully');
    } catch (error) {
        response.status(500).json(error)
    }
})

app.get("/:id", async (request, response) => {
    try {
        const blog = await Blog.findById(request.params.id).select({ title: 1, description: 1 , threads: 1, _id: 0});
        response.status(200).json(blog);
    } catch (error) {
        response.status(500).json(error)
    }
})

app.get("/", async (request, response) => {
    try {
        const blogs = await Blog.find({});
        response.status(200).json(blogs);
    } catch (error) {
        console.log(error)
        response.status(500).json(error)
    }
})

export default app