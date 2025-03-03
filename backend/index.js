import express from 'express'
import { bodyValidation, updateValidation } from './types.js';
import {Todo}  from './db.js';
import dotenv from 'dotenv';
import cors from 'cors'
dotenv.config();
const app = express();
app.use(cors())
app.use(express.json());

app.post('/todos', async (req, res)=>{
  const body = req.body;
  const parsedBody = bodyValidation.safeParse(body);
  if(!parsedBody.success){
    res.status(411).json({
      msg: 'Validation failed'
    })
    return;
  }
  await Todo.create({
    title: body.title,
    details: body.details,
    completed: false
  })
  res.json({
    msg: "Todo created successfully"
  })
})
app.put('/todos', async(req, res)=>{
  const body = req.body;
  const parsedBody = updateValidation.safeParse(body);
  if(!parsedBody.success){
    console.log(`Error while validating update body`);
    res.status(411).json({
      msg: "Wrong inputs"
    })
    return;
  }
  // TODO: firstly need to check user's existence
  await Todo.findByIdAndUpdate({_id: req.body._id}, {completed: true});
  res.json({
    msg: "Updated Sucessfully"
  })
})


app.get('/todos', async (req, res)=>{
  const allTodos = await Todo.find({});
  res.json({allTodos})
})

app.listen(process.env.PORT, ()=> console.log(`Listening on port: ${process.env.PORT}`))