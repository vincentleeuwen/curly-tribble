import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList
} from 'graphql';

// let counter = 42;

let data = [
  {
    counter: 42
  },
  {
    counter: 43
  },
  {
    counter: 44
  }
];

let counterType = new GraphQLObjectType({
  name: 'Counter',
  fields: () => ({
    counter: { type: GraphQLInt }
  })
});

let schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
      data: {
        type: new GraphQLList(counterType),
        resolve: () => data
      }
    })
  }),
  // mutation: new GraphQLObjectType({
  //   name: 'Mutation',
  //   fields: () => ({
  //     incrementCounter: {
  //       type: GraphQLInt,
  //       resolve: () => ++counter
  //     }
  //   })
  // }),
});

export default schema;
