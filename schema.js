const { gql } = require('apollo-server-express')

const typeDefs = gql`
  type Query {
    greetings: String
    welcome(name:String!): String
    getAllUsers: [User!]!
    users: [User!]
    user(id: ID): User!
  }

  type User{
    id: ID!
    name: String!
    age: Int!
  }

  type Mutation{
    createUser(name: String!, age: Int!): User!
    updateUser(id: ID!, name: String!, age: Int!): User!
    deleteUser(id: ID!): User!
  }
`

module.exports = typeDefs