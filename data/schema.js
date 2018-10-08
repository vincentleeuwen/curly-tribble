import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList
} from 'graphql';

// let counter = 42;

let Schema = db => {

  const linkType = new GraphQLObjectType({
    name: 'Link',
    fields: () => ({
      _id: { type: GraphQLID },
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
          resolve: () => db.collection('links').find({}).toArray() // GraphQL takes care of promise
        }
      })
    })
  });

  return schema;
}

export default Schema;
