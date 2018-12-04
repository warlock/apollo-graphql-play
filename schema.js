const { gql } = require('apollo-server')

const typeDefs = gql`
  type Query {
    quoteOfTheDay: String
    random: Float!
    rollThreeDice: [Int]
  }
`

module.exports = typeDefs
