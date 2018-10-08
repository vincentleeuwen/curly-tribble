import express from 'express';
import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';
import GraphQLHTTP from 'express-graphql';
import Schema from './data/schema';

dotenv.config();

let app = express();
// app.get('/', (req, res) => res.send('hello nodemon'));
app.use(express.static('public'));

const port = 3000;

let db;
MongoClient.connect(process.env.MONGO_URL, (err, database) => {
  if (err) throw err;

  db = database.db();
  app.use('/graphql', GraphQLHTTP({
    schema: Schema(db),
    graphiql: true
  }));

  app.listen(port, () => console.log(`Listening on port ${port}...`));
  // console.log("Connected successfully to server");  
});

app.get('/data/links', (req, res) => {
  db.collection('links').find({}).toArray((err, links) => {
    if (err) throw err;

    res.json(links);
  })
});
