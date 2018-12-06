const { ApolloServer } = require('apollo-server')
const typeDefs = require('./lib/schema')
const rootValue = require('./lib/rootValue')

const server = new ApolloServer({ 
  typeDefs,
  rootValue
})
server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`)
})
