import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList
} from 'graphql';

// let counter = 42;

let Schema = db => {
  let data = [];

  db.collection('links').find({}).toArray((err, links) => {
    if (err) throw err;

    data = links.map(link => Object.assign({}, link, { _id: link._id.toString() }));
  })


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
          resolve: () => data
        }
      })
    })
  });

  return schema;
}

export default Schema;
