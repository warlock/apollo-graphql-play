const { ApolloServer } = require('apollo-server')
const typeDefs = require('./lib/schema')
const rootValue = require('./lib/rootValue')
const config = require('./config')
const mongoose = require('mongoose')
//mongoose.Promise = global.Promise
mongoose.connect(config.db, { useNewUrlParser: true })

const server = new ApolloServer({ 
  typeDefs,
  rootValue
})
server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`)
})
