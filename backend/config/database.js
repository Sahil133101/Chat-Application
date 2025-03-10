import mongoose from "mongoose";

const connectdB = async () => {
    try {
        // Connect to MongoDB on localhost at port 27017 (default MongoDB port)
        await mongoose.connect('mongodb://127.0.0.1:27017/Chatapp');

        mongoose.connection.on('connected', () => {
            console.log('DB connected');
        });
    } catch (err) {
        console.error('Error connecting to DB:', err);
    }
};

export default connectdB;
