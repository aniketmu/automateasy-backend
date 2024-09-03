import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()


const uri = `mongodb+srv://blogChefUser:${process.env.MONGO_KEY}@cluster0.pq0gbfi.mongodb.net/`

export const DB = mongoose.connect(uri).then(() => console.log('Connected to DB')).catch((err) => console.log("Error connecting to DB: " + err))