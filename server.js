import express from 'express';
import dotenv from 'dotenv';
import fs from 'fs';
import { MongoClient } from 'mongodb';
import GraphQLHTTP from 'express-graphql';
import Schema from './data/schema';
import { graphql } from 'graphql';
import { introspectionQuery } from 'graphql/utilities';

dotenv.config();

let app = express();
// app.get('/', (req, res) => res.send('hello nodemon'));
app.use(express.static('public'));

const port = 3000;

(async () => {
  const database = await MongoClient.connect(process.env.MONGO_URL);
  const db = database.db();
  const schema = Schema(db);

  app.use('/graphql', GraphQLHTTP({
    schema,
    graphiql: true // show GraphiQL interface
  }));
  app.listen(port, () => console.log(`Listening on port ${port}...`));

  // Generate schema.json
  const json = await graphql(schema, introspectionQuery);
  
  // fs.writeFile('./data/schema.json', JSON.stringify(json, null, 2), err => {
  //   if (err) throw err;
  //   console.log('JSON schema created');
  // });
})();
