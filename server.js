import express from 'express';
import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';

dotenv.config();

let app = express();

// app.get('/', (req, res) => res.send('hello nodemon'));

app.use(express.static('public'));

app.listen(3000);

MongoClient.connect(process.env.MONGO_URL, (err, database) => {
  if (err) throw err;

  // const db = database.db('rgrjs');
  // console.log("Connected successfully to server");  
  
  database.db().collection('links').find({}).toArray((err, links) => {
    if (err) throw err;

    console.log(links);
  })
});
