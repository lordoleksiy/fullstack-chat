import express from 'express';
import pool from './db.js';




const PORT = 3005

const app = express()


app.listen(PORT, ()=>{
    console.log("Server is starting on http://localhost:3005")
})

app.get("/rooms", (req, res)=>{
    res.send("hui")
})
