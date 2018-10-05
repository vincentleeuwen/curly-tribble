import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

let app = express();

const mongoUrl = process.env.MONGO_URL;

// app.get('/', (req, res) => res.send('hello nodemon'));

app.use(express.static('public'));

app.listen(3000);
