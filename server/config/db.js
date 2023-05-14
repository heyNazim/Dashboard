import mongoose from "mongoose";
import color from 'colors'
const connectDB = () =>{
    try {
        const conn = mongoose.connect('mongodb+srv://nazim:nazim1908@nazim-crud.jvsy7bg.mongodb.net/mernstack?retryWrites=true&w=majority');
        console.log('Connected to MongoDB'.bgGreen);
    } catch (error) {
        console.log("Database connection failed".bgRed)
    }
};
export default connectDB;