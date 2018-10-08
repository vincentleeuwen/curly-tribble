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

(async () => {
  const database = await MongoClient.connect(process.env.MONGO_URL);
  const db = database.db();
  app.use('/graphql', GraphQLHTTP({
    schema: Schema(db),
    graphiql: true
  }));
  app.listen(port, () => console.log(`Listening on port ${port}...`));
})();
