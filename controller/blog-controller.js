import Blog from '../model/blog.js';
import express from 'express';

const app = express.Router();

//export const createBlog = async (request, response) => {
app.post('/', async (request, response) => {
    try {
        const Mblog = await new  Blog(request.body);
        Mblog.save();

        response.status(200).json('Blog saved successfully');
    } catch (error) {
        response.status(500).json(error);
    }
})

//export const updateBlog = async (request, response) => {
// app.put('/', async (request, response) => {
//     try {
//         const blog = await Blog.findById(request.params.id);

//         if (!blog) {
//             response.status(404).json({ msg: 'Blog not found' })
//         }
        
//         await Blog.findByIdAndUpdate( request.params.id, { $set: request.body })

//         response.status(200).json('Blog updated successfully');
//     } catch (error) {
//         response.status(500).json(error);
//     }
// })

// //export const deleteBlog = async (request, response) => {
// app.delete('/:id', async (request, response) => {
//     try {
//         const blog = await Blog.findById(request.params.id);
        
//         await blog.delete()

//         response.status(200).json('Blog deleted successfully');
//     } catch (error) {
//         response.status(500).json(error)
//     }
// })

// //export const getBlog = async (request, response) => {
// app.get("/:id", async (request, response) => {
//     try {
//         const blog = await Blog.findById(request.params.id);

//         response.status(200).json(blog);
//     } catch (error) {
//         response.status(500).json(error)
//     }
// })

//export const getAllBlogs = async (request, response) => {
app.get("/", async (request, response) => {
    console.log("I am get");
    try {   
        const blogs = await Blog.find({});
        console.log(blogs+"hello")
        response.status(200).json(blogs);
    } catch (error) {
        console.log(error)
        response.status(500).json(error)
    }
})

// module.exports = app
export default app