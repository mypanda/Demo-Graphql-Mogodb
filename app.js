const express = require('express')
const { ApolloServer } = require('apollo-server-express')

const connectToDatabase = require('./database')

const typeDefs = require('./schema')
const resolvers = require('./resolvers')

async function startServer() {
  await connectToDatabase()

  const app = express()
  const server = new ApolloServer({
    typeDefs,
    resolvers
  })
  await server.start()
  server.applyMiddleware({ app })

  app.listen({ port: 4000 }, () => {
    console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
  })
}

startServer()