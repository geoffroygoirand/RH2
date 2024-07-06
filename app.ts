import express from 'express'
import dotenv from 'dotenv';
import { connectDB } from './config/db'

dotenv.config()

connectDB()

const app = express()

const PORT = 3000;

app.listen(3000, () => {
    console.log(`Server running on port ${PORT} => http://localhost:${PORT}`);
})