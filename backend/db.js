import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config();

try {
  const connection = await mongoose.connect(process.env.DB_URL)
  console.log('DB Connection Successful');
  } catch (error) {
  console.log(`DB Connection Error: ${error}`)
}

const todoSchema = mongoose.Schema({
  title: String,
  details: String,
  completed: Boolean
})

const Todo = mongoose.model('Todo', todoSchema); 
export {Todo}; 
