import express from 'express';
import { DB } from './connect.js';
const app = express()
const PORT = 4000

DB;

app.get('/', (req, res)=>{
    res.send("Hello from Server")
})

app.listen(PORT, () => {
    console.log("Server running on PORT: " + PORT)
})