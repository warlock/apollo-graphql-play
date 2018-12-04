const { ApolloServer } = require('apollo-server')
const typeDefs = require('./schema')

const server = new ApolloServer({ 
  typeDefs,
  rootValue: {
    quoteOfTheDay: () => {
      return Math.random() < 0.5 ? 'Take it easy' : 'Salvation lies within'
    },
    random: () => {
      return Math.random()
    },
    rollThreeDice: () => {
      return [1, 2, 3].map(() => 1 + Math.floor(Math.random() * 6))
    }
  }
})
server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`)
})
