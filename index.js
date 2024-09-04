import express from 'express';
import { DB } from './connect.js';
import mongoose from 'mongoose';

const app = express();
const PORT = 4000;

const userSchema = new mongoose.Schema({
    userId: { type: Number, unique: true },
    firstName: String,
    lastName: String,
    email: String,
    age: Number,
});

const User = mongoose.model('User', userSchema);

app.get('/', (req, res) => {
    res.send("Hello from Server");
});

app.get("/users", async (req, res) => {
    try {
        const users = await User.find().limit(500); 
        res.json(users);
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).send("Error fetching users");
    }
});


app.get("/users/:id", async(req,res) => {
    try {
        const { id } = req.params;
        const user = await User.findOne({userId: id});
        if(!user){
            return res.status(404).send('User not found')
        }
        res.json(user);
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).send("Error fetching User");
    }
})

DB.then(() => {
    app.listen(PORT, () => {
        console.log("Server running on PORT: " + PORT);
    });
}).catch((err) => {
    console.error("Failed to connect to the database", err);
    process.exit(1);
});