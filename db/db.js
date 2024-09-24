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