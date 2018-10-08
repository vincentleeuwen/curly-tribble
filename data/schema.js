import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList
} from 'graphql';

// let counter = 42;

let Schema = db => {
  let data = [];

  db.collection('links').find({}).toArray((err, links) => {
    if (err) throw err;
    data = links;
  });

  const linkType = new GraphQLObjectType({
    name: 'Link',
    fields: () => ({
      _id: { type: GraphQLString },
      title: { type: GraphQLString },
      url: { type: GraphQLString }
    })
  });

  const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
      name: 'Query',
      fields: () => ({
        links: {
          type: new GraphQLList(linkType),
          resolve: () => data // TODO: Read from Mongo
        }
      })
    })
  });

  return schema;
}

export default Schema;
