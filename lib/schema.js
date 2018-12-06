const { gql } = require('apollo-server')

module.exports = gql`
  type User {
    id: ID
    name: String
    surname: String
    company: String
    mail: String
  }

  type Query {
    user (id: ID!): User
    users: [User]
  }

  input UserInput {
    name: String
    surname: String
    company: String
    mail: String
  }

  type Mutation {
    createUser (input: UserInput): User
  }
`

